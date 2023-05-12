#! /usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const csvToInterface_1 = require("./csvToInterface");
const commander_1 = require("commander");
const program = new commander_1.Command();
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
function convertCommand(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        console.log((0, csvToInterface_1.csvToInterface)(data));
    }
    catch (error) {
        console.error(`Error reading file: ${error}`);
    }
}
//# sourceMappingURL=ss.js.map