# typescript-webpack-empty-template

> Bootstrap for small typescript html5 projects that don't need a gargantuan amount of frameworks.

## How to know if this template is for you

If you want to setup as simple as the following using typescript and webpack.

```html
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="style.css">

    <title>TypeScript Webpack Empty Template</title>
</head>

<body>
    <h1 id="most-important-content"></h1>
    <script src="webpack.min.js"></script>
</body>

</html>
```

## Purpose of this

This is mainly for myself but it may bring some usefulness to others that want to avoid the whole headache of setting up a typescript project with webpack, formatting, and linting tools. (Basically the full simplified CI/CD setup.)

## What is included

- typescript (of course)
- webpack
- express
- prettier
- eslint
- jest
- dead simple travis config
- example `sharedModule.ts` with its corresponding `.test.ts` file
- live coding setup

## What is not included

- Frontend frameworks (depends on if you consider webpack to be a frontend framework)

### `npm run` scripts

- `copy-files`
  - copies all frontend assets from src/public/ to lib/public/
- `format`
  - runs `prettier` (a tool used to format your code)
- `lint`
  - runs `eslint`
- `jesttest`
  - runs `jest`. Be sure to include at least one `.test.ts` to prevent it from failing
- `build`
  - deletes everything in `lib/*` and runs `tsc`, `webpack-cli` and `npm run copy-files` 
- `build-prod`
  - same thing as `build` but with production settings. Runs `test` before building
- `test`
  - combination of `build`, `jesttest`, `lint`, and `prettier --check`
- `dev-server`
  - starts a live `webpack-cli`, `tsc`, `nodemon`, and `copy-and-watch` session using `concurrently`. Any changes you make to `.ts` files will update and restart the server. Making file changes in `src/public/*` will simply copy that file over. (NOTE: for unknown reasons, if you create/delete a ts file, tsc will sometimes scream at a non-existent error. Just rerun `dev-server` if that happens)
  - More on how this works:
    - `webpack-cli` generates and copies the build file to `lib/public` every time you make changes that affect the frontend.
    - `tsc` will rebuild any ts files and make changes to `lib/`, which will cause `nodemon` to restart the server
    - `copy-and-watch` will watch for changes to `src/public/*` and copy them over to `lib/public/` as needed. This will also trigger `nodemon` to restart the server.

## Where is everything (aka. how to get started)

- `src/public/` is your public root folder
- `src/server.ts` is the node server file
- `src/client.ts` is the entry point for webpack

## Parting words

Hope you find this to be a great time saver. Please open an issue if there's anything that is missing and essential to development.
