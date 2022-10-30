import registerCommand from './register.command.mjs';

let commands = new Map();
commands.set(registerCommand.data.name, registerCommand);

export default commands;
