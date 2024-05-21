import os
from aiogram import Dispatcher, F, Bot
from aiogram.filters import CommandStart, Command
from aiogram.types import Message, LabeledPrice, PreCheckoutQuery
from keyboards import app_kb, buy_ikb
from dotenv import load_dotenv

load_dotenv()
PROVIDER_TOKEN = os.getenv('PROVIDER_TOKEN')

BOT_TOKEN = os.getenv("BOT_TOKEN")

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()


@dp.message(CommandStart())
async def start(msg: Message):
    await msg.answer("Salom", reply_markup=app_kb)


@dp.message(Command("pay"))
async def get_btn(msg: Message):
    text = msg.web_app_data.data
    product_data = text.split("|")
    products = {}
    for i in range(len(product_data)):
        if len(product_data[i].split("/")) >= 3:
            title = product_data[i].split("/")[0]
            price = product_data[i].split("/")[1]
            quantity = product_data[i].split("/")[2]
            product = {
                "title": title,
                "price": int(price),
                "quantity": int(quantity)
            }
            products[i] = product
        print(products)
    await bot.send_invoice(
        chat_id=msg.chat.id,
        title="Tolov",
        description="Tg bot orqali tolov",
        provider_token=PROVIDER_TOKEN,
        currency="UZS",
        payload="Ichki malumot",
        prices=[
            LabeledPrice(Lable=f"{product['title']}({product['quantity']})",
                         amount=(product['price'] * product['quantity']) * 100)
            for product in products.values()
        ],
    )


@dp.pre_checkout_query()
async def pre_checkout_query(checkout_query: PreCheckoutQuery):
    await bot.answer_pre_checkout_query(checkout_query.id, ok=True)


@dp.message(F.func(lambda msg: msg.web_app_data.data))
async def get_btn(msg: Message):
    text = msg.web_app_data.data
    product_data = text.split("|")
    products = {}
    for i in range(len(product_data)):
        if len(product_data[i].split("/")) >= 3:
            title = product_data[i].split('/')[0]
            price = product_data[i].split('/')[1]
            quantity = int(product_data[i].split('/')[2])
            product = {
                "Nomi": title,
                "Price": int(price),
                "Quantity": int(quantity)
            }
            products[i] = product
    await bot.send_invoice(
        chat_id=msg.chat.id,
        title="To'lov",
        description="Telegram bot orqali to'lov!",
        provider_token=PROVIDER_TOKEN,
        currency="UZS",
        payload="Ichki malumot",
        prices=[LabeledPrice(
            label=f"{product['Nomi']} ({product['Quantity']})",
            amount=product["Price"] * product["Quantity"] * 100
        ) for product in products.values()]
    ),

    # @dp.message(F.func(lambda msg: msg.web_app_data.data))
    # async def get_btn(msg: Message):
    #     text = msg.web_app_data.data
    #     products = text.split("|")
    #     summa = 0
    #     for i in range(len(products)):
    #         if len(products[i].split("/")) >= 3:
    #             title = products[i].split('/')[0]
    #             price = int(products[i].split('/')[1])
    #             quantity = int(products[i].split('/')[2])
    #             await msg.answer(text=f"Nomi: {title}\n"
    #                                   f"Narxi: {price}\n"
    #                                   f"Soni: {quantity}\n"
    #                                   f"Umumiy narxi: {quantity * price}$")
    #             summa += price * quantity
    #     await msg.answer(text=f"To'lanishi kerak: {summa}$", reply_markup=buy_ikb)