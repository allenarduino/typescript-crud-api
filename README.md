## typescript-crud-api

### Project set up

- Create an empty directory and run:

`npm init `
in the root of the directory

- Run:  
  `npm install --save-dev` or `npm install -D typescript`

- Add tsconfig.json in the root of the directory

```json
{
  "compilerOptions": {
    "target": "ES2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "strict": true,
    "rootDir": "src",
    "outDir": "build"
  }
}
```

`rootDir` specifies the root directory of our source code. In this case, we’re putting all our source code in a folder called src. This helps us make a clear distinction between source code, configuration code, and compiled code.

`outDir` specifies the directory in which TypeScript will place all the transpiled JS. Again, specifying this path, though unnecessary, improves the organization of our repo.

- Open your package.json file and add the following entry to the scripts object:

`"build": "tsc"`

- To keep typescript running:

`npm i -D ts-node nodemon`

- Add the dev script to package.json, which will run the nodemon command:

`"dev": "nodemon"`

- Add nodemon config to package.json.
  This will configure nodemon
  to watch all the .ts
  files inside the src folder and
  execute ts-node src/index.ts on any code change.

`package.json`

```json
"scripts": {
    "build": "tsc",
    "dev": "nodemon",
  },

  "nodemonConfig": {
    "watch": [
      "src"
    ],
    "ext": "ts",
    "exec": "ts-node src/index.ts"
  }

```

- Finally run:
  `npm run dev`
