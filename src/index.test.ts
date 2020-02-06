/* eslint-disable @typescript-eslint/no-explicit-any */
import yargs = require('yargs');

it('returns help output', async () => {
    // Initialize parser using the command module
    const parser = yargs.commandDir('./commands').help();

    // Run the command module with --help as argument
    const output = await new Promise(resolve => {
        parser.parse('--help', (err: any, argv: any, output: any) => {
            resolve(output);
        });
    });

    // Verify the output is correct
    expect(output).toMatch(/version.*?help|help.*?version/s);
});
