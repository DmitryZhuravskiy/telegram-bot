const TelegramBot = require("node-telegram-bot-api");
const token = "6389569310:AAG0h9ayaIKBUDmYYh00EuXasBO7PxJhBo0";
const webApiUrl = "https://darkside.ru/";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === `/start`) {
    await bot.sendMessage(chatId, "Заполни форму ниже", {
      reply_markup: {
        keyboard: [[{ text: "Заполни форму" }]],
      },
    });

    await bot.sendMessage(chatId, "Это сообщение номер два", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Сделать заказ", web_app: { url: webApiUrl } }],
        ],
      },
    });
  }
});
