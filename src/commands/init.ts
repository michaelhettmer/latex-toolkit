import { Arguments, CommandBuilder } from 'yargs';

export const command = 'init';

export const aliases = ['i'];

export const desc = 'Initialize a LaTeX project';

export const builder: CommandBuilder = {
    name: {
        required: true,
        description: 'First argument',
        alias: 'a',
        type: 'string',
    },
    circleci: {
        description: 'First argument',
        alias: 'c',
        type: 'boolean',
        default: false,
    },
};

export const handler = (args: Arguments<{ name: string; circleci: boolean }>) => {
    console.log(args.name, args.circleci);
};
