from aiogram import bot
from aiogram.types import Message, LabeledPrice, PreCheckoutQuery

async def order(message: Message, bot:bot):
    await bot.send_invoice(
        chat_id=message.chat.id,
        title="Telegram bot orqali testoviy tolov!",
        description="Telegram bot orqali bot qilishni organamiz!",
        provider_token=PROVIDER_TOKEN,
        currency="sum",
        payload="Ichki malumot",
        prices=[
            LabeledPrice(label="skidka", amount=-2),
            LabeledPrice(label="Bonus", amount=-1)
        ]
    )

async def pre_checkout(pre_checkout_query: PreCheckoutQuery):
    await bot.answer_preww_callback_query(pre_checkout_query.id,ok=True)