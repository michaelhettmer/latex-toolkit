import { Arguments, CommandBuilder } from 'yargs';
import yeoman from 'yeoman-environment';
import mht from 'generator-mht';

const env = yeoman.createEnv();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
env.registerStub(mht as any, 'mht:app');

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
    env.run('mht:app', (err: null | Error) => console.log('done', err));
};
