#!/usr/bin/env node
import chalk from 'chalk'
import inquirer from 'inquirer'

process.env.FORCE_COLOR = 3 as any

// @ts-ignore
globalThis.__DEV__ = process.env.NODE_ENV === 'development'
console.log(chalk.red('Hello world!'))

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      choices: ['a', 'b', 'c'],
      message(answers) {
        return `Hello ${answers.name}`
      },
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
