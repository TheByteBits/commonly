#!/bin/node
const lint = require("./__internal/core")
const chalk = require("chalk")



const { failures } = lint.frisk()
if (failures.length > 0) {
	console.log(chalk`{bold Lint:} {yellow ${failures.length}} files need to be manually corrected.`)
	for (const failure of failures) {
		console.log(chalk`\t {gray ${failure.fileName}} \t ${failure.failure}`)
	}
} else {
	console.log(chalk`{bold Lint:} No files have been auto corrected.`)
}

process.exit(0)