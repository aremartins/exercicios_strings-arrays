// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const listaNum = numeros.filter((item) => item > 100).sort();
console.log(listaNum);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const possuiBaixo = instrumentos.some((instrumento)=>{
    return instrumento == 'Baixo'
})
console.log(possuiBaixo)

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];


let soma = 0;
const total = compras.map((item)=>{
    let preco = +item.preco.slice(3).replace(',','.')
    let total = soma += preco
    return total
})

console.log(`Total = R$${soma}`)

const totalComReduce = compras.reduce((acumulador, item) => {
    let precoLimpo = +item.preco.replace('R$','').replace(',','.')
    return acumulador += precoLimpo
}, 0)


console.log(totalComReduce)

const valor = 1000
console.log(valor.toLocaleString('pt-br', {style:'currency', currency: 'BRL'}))
