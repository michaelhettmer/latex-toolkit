#!/usr/bin/env node

import * as yargs from 'yargs';

yargs
    .usage('Usage: $0')
    .commandDir('./commands', {
        extensions: process.env.NODE_ENV === 'development' ? ['js', 'ts'] : ['js'],
    })
    .help('help')
    .alias('help', 'h').argv;
