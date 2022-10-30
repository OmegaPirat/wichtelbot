import { Telegraf } from 'telegraf';
import session from '@telegraf/session';
import stage from '../scenes/index.mjs';
import commands from './commands/index.mjs';

let telegramBot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
telegramBot.use(session());
telegramBot.use(stage.middleware());

commands.forEach((command, name) => {
    telegramBot.command(name, command.execute);
})

export default telegramBot;
