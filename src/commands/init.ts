import { CommandBuilder } from 'yargs';
import yeoman from 'yeoman-environment';
import mht from 'generator-mht';

const env = yeoman.createEnv();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
env.registerStub(mht as any, 'mht:app');

export const command = 'init';

export const aliases = ['i'];

export const desc = 'Initialize a LaTeX project';

export const builder: CommandBuilder = {};

export const handler = () => {
    env.run('mht:app', (err: null | Error) => console.log('done', err ?? 'without an error'));
};
