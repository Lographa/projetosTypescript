/*eslint-disable */
let nome1: string = 'vfvfvf';

//tipos de arrays
let arraySimples: Array<number> = [1,2,3];
let arraySimples1: Array<string>;
let arraySimples2: string[] = ['ydyd', 'bgibvibi'];

//objeto
// o interrogação é para torna o campo opicional
//readonly faz com q o campo não possa ser alterado por fora
let pessoa: {nome: string, idade: number, adulto?: boolean, readonly apelido: string} = {
    nome:"raphael", idade:44, adulto: true, apelido: "qualquer"
};

let pessoaArray: {nome: string, idade: number, adulto?: boolean}[] = [{
    nome:"raphael", idade:44, adulto: true
}, {
    nome:"carlos", idade:423
}];

const soma: (x: number, y:number) => number = (x,y) => x + y;
