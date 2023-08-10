# Noir Hello World

This is a reference repo to help you get started with writing zero-knowledge circuits with [Noir](www.noir-lang.org).

## Development


Start by installing all the packages specified in the `package.json`

```shell
npm install
```

Install the latest version of Noir using 

```shell
noirup -n
```

Check to ensure the Nargo (Noir package manager) has been correctly installed

```shell
nargo -V
```


After installing nargo it should be placed in our path and can be called from inside the `circuits` folder. We will then compile our circuit. This will generate an intermediate representation that is called the ACIR. This will be used by the tests.

```shell
cd circuits/
nargo compile
```

### Running tests

The tests show how to complete proof verification using Typescript.

```
npm run test
```