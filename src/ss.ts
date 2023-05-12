#! /usr/bin/env node

import * as fs from 'fs';
import { csvToInterface } from './csvToInterface';
import { Command } from 'commander';

const program = new Command();

program
  .version("0.1.0")
  .description('A tool to help with translation of spreadsheets into software');

const csvToInterfaceCommand = program.command('csvToInterface');
csvToInterfaceCommand.alias('c')
  .argument('<path>', 'Path to the CSV file')
  .description('Convert a CSV file to a TypeScript interface string')
  .action(convertCommand);

// Add more commands here

program.parse(process.argv);

function convertCommand(path: string) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    console.log(csvToInterface(data));
  } catch (error) {
    console.error(`Error reading file: ${error}`);
  }
}