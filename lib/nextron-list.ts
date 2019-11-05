import fs from 'fs';
import path from 'path';
import arg from 'arg';
import chalk from 'chalk';

const args = arg({
  '--help': Boolean,
  '--version': Boolean,
  '-h': '--help',
  '-v': '--version',
});

if (args['--version']) {
  const pkg = require(path.resolve(__dirname, '../package.json'));
  console.log(`nextron v${pkg.version}`);
  process.exit(0);
}

if (args['--help']) {
  console.log(chalk`
    {bold.cyan nextron} - ⚡ Electron + NEXT.js ⚡

    {bold USAGE}

      {bold $} {cyan nextron list} --help
      {bold $} {cyan nextron list}

    {bold OPTIONS}

      --help,     -h   shows this help message
      --version,  -v   displays the current version of nextron
  `);
  process.exit(0);
}

let names = fs.readdirSync(path.resolve(__dirname, '../examples'));
names = names.filter(name => name.toLowerCase() !== '_template' && name.toLowerCase() !== '.ds_store');

console.log(chalk`
  {bold.cyan Available examples (${names.length.toString()}):}
`);

for (let i = 0; i < names.length; i++) {
  console.log(chalk`    {bold - ${names[i]}}`);
}

console.log(chalk`
  {bold USAGE}

    {bold $} {cyan nextron init} {underline my-app} [--example {underline example_folder_name}]

  If you want to use "{underline with-typescript-material-ui}", just type the command below:

    {bold $} nextron init my-app --example {underline with-typescript-material-ui}
`);
