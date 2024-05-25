import asyncio
from dotenv import load_dotenv

load_dotenv()


async def main():
    print("Starting .......")
    from handlers import dp
    from handlers import bot
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
