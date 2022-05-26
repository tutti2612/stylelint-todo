# stylelint-todo

Stylelint todo generator

## Installation

```bash
npm install stylelint-todo --save-dev
```

## Usage

```bash
npx stylelint-todo '**/*.css' > stylelint-todo.json
```

Then, add to the end of `extends` in your config.

```json
{
  "extends": ["stylelint-config-standard", "./stylelint-todo.json"]
}
```

## License

[The MIT License](https://github.com/tutti2612/stylelint-todo/blob/main/LICENSE.txt).
