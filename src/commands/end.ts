import {Command} from './command';
import {Server} from '../server';
import {Message} from 'discord.js';
import {RequireAdminMiddleware} from './middleware/require-admin';

export default new class extends Command {
    constructor() {
        super('stop', [], new RequireAdminMiddleware());
    }

    handle(server: Server, message: Message, args: string[]): void {
        if (server.current) {
            message.reply(server.__('The music has been stopped.'));
            server.queue.clear();
            server.current.end();
        }
    }
}
