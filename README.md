# stylelint-todo

stylelint-todo is a TODO configuration file generator for Stylelint.

Have you ever added Stylelint to an existing project and been plagued with a large number of errors?  
With Stylelint-todo, you can silence existing errors and write code according to the new rules in a new file.

Inspired by [rubocop_todo.yml](https://docs.rubocop.org/rubocop/configuration.html#automatically-generated-configuration).

## Requirements

- Node.js 14 or higher
- Stylelint 14 or higher

## Installation

```bash
npm install --save-dev stylelint-todo
```

## Usage

Run the following command in the root directory of the project where Stylelint is installed.

```bash
npx stylelint-todo '**/*.css' > stylelint-todo.json
```

Then, add to the end of `extends` in your stylelint config.

```json
{
  "extends": ["stylelint-config-standard", "./stylelint-todo.json"]
}
```

## License

[The MIT License](https://github.com/tutti2612/stylelint-todo/blob/main/LICENSE.txt).
