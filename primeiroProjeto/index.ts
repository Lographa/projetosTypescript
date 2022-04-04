//npm i typescript -D
//npx tsc index.ts  gerar arquivo .js
//node index.ts pode acabar gerando erro entao index.js
//npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D 

function novo(params: string) {
    return `Ola ${params}`;
};

console.log(novo("mundo"));

export default novo;