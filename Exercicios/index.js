// 📝 Instrucoes do Exercicio-js-01
// Crie variáveis para testar comparações entre tipos iguais e diferentes. Use console.log() para mostrar os resultados das comparações com == e ===. Exemplo: compare um número com outro número, uma string com outra string e um número com uma string contendo o mesmo valor.

// Comparação entre números
//let numero1 = 10;
//let numero2 = 10;

//console.log(numero1 == numero2);  // true
//console.log(numero1 === numero2); // true

// Comparação entre strings
//let texto1 = "Olá";
//let texto2 = "Olá";

//console.log(texto1 == texto2);  // true
//console.log(texto1 === texto2); // true

// Comparação entre número e string
//let numero = 10;
//let textoNumero = "10";

//console.log(numero == textoNumero);  // true
//console.log(numero === textoNumero); // false

//📝 Instrucoes do Exercicio-js-02
//Crie duas variáveis numéricas e faça comparações usando os operadores <, <=, > e >=. Use console.log() para exibir os resultados no console

// let numero1 = 10;
// let numero2 = 20;

// console.log(numero1 < numero2);  // true
// console.log(numero1 <= numero2); // true
// console.log(numero1 > numero2); // false
// console.log(numero1 >= numero2); // false

// 📝 Instrucoes do Exercicio-js-03
// Crie variáveis numéricas para cada operação. Em seguida, faça operações de soma, subtração, multiplicação, divisão e resto da divisão usando essas variáveis. Exiba os resultados no console com console.log()

// const soma1 = 10
// const soma2 = 5 

// const soma = soma1 + soma2

// console.log(soma)

// const subtracao1 = 15
// const subtracao2 = 5

// const subtracao = subtracao1 - subtracao2
// console.log(subtracao);

// const multiplicacao1 = 5
// const multiplicacao2 = 10

// const multiplicacao = multiplicacao1 * multiplicacao2
// console.log(multiplicacao)

// let divisao1 = 6
// let divisao2 = 3

// let divisao = divisao1 / divisao2
// console.log(divisao)

// const resto1 = 10
// const resto2 = 2

// const resto = resto1 % resto2 
// console.log(resto)

// 📝 Instrucoes do Exercicio-js-04
// Crie uma variável chamada nota e atribua um valor numérico entre 0 e 10. Use if, else if e else para verificar a nota e exibir no console: 'Aprovado' se a nota for maior ou igual a 7, 'Recuperação' se a nota for entre 5 e 6, e 'Reprovado' se a nota for menor que 5.

// const nota = 10

// if (nota >=7){
//     console.log("aprovado")
// } else if (nota >=5 && nota < 7) {
//     console.log("recuperação")
// } else {
//     console.log("reprovado")
// }

// 📝 Instrucoes do Exercicio-js-05
// Crie uma variável chamada diaDaSemana que armazene um número de 1 a 7. Use a estrutura switch para exibir no console o nome do dia correspondente (1 = Domingo, 2 = Segunda, ..., 7 = Sábado). Se o valor não estiver entre 1 e 7, exiba 'Dia inválido'.

// const diaDaSemana = 7

// switch (diaDaSemana) {
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("segunda");
//         break;
//     case 3:
//         console.log("terça-feira")
//         break;
//     case 4:
//         console.log("Quarta-feira")
//         break;
//     case 5:
//         console.log("Quinta-feira")
//         break;
//     case 6:
//         console.log("Sexta-feira")
//         break;
//     case 7:
//         console.log("Sábado")
//         break;
//     default:
//         console.log("Dia inválido")

// }

// let numero1 = 10
// let numero2 = 5

// console.log(numero1 + numero2);
// console.log(numero1 - numero2);
// console.log(numero1 * numero2);
// console.log(numero1 / numero2)

// const idade = 20
// if (idade >=18) {
//     console.log("Maior de idade")
// }else ("Menor de idade")

// const nota = 4

// if (nota >= 7) {
//     console.log("Aprovado")
// } else if (nota >= 5 && nota < 7) {
//     console.log("recuperação")
// } else {
//     console.log("Reprovado")
// }

// 📝 Instrucoes do Exercicio-js-06
// Use um loop for para exibir no console os números de 1 a 10. Cada número deve ser mostrado em uma linha diferente usando console.log(). **AVISO:** os resultados serão exibidos na aba de console do navegador

// for (let i = 1; i <=10; i++) {
//     console.log(i);
// }

// 📝 Instrucoes do Exercicio-js-07
// Use um loop while para exibir no console os números de 1 a 10. Cada número deve ser mostrado em uma linha diferente usando console.log().

// let i = 1;
//  while (i <=10) {
//     console.log(i)
//     i++;
//  }

// 📝 Instrucoes do Exercicio-js-08
// Use um loop do while para exibir no console os números de 1 a 10. Cada número deve ser mostrado em uma linha diferente usando console.log().

// let i = 1.
// do{
//     console.log(i);
//     i++;
// }while(i <=10)

// 📝 Instrucoes do Exercicio-js-09
// Crie uma função nomeada chamada **saudarUsuario** que receba como parâmetro o nome do usuário. Dentro da função, use console.log() com template literal para exibir a mensagem 'Seja bem vindo' seguida do nome. Em seguida, chame a função passando um nome como argumento para testar.

// function saudarUsuario(nome) {
//     console.log(`Seja bem vindo ${nome}`);
// }
// saudarUsuario("Eleilson")

// 📝 Instrucoes do Exercicio-js-10
// Crie uma função chamada **somar** que receba dois números como parâmetros e retorne o resultado da soma. Depois, crie uma variável para armazenar o valor retornado pela função e exiba esse valor no console com console.log().

// function somar (a, b) {
//     return a + b;
// }

// const resultado = somar(10, 5); 
// console.log(resultado)

//  📝 Instrucoes do Exercicio-js-11
//  Crie uma arrow function chamada **multiplicar** que receba dois números como parâmetros e retorne o resultado da multiplicação. Em seguida, armazene o valor retornado em uma variável e exiba esse valor no console com console.log().

// const multiplicar = (a, b) => {
//     return a * b;
// };

// console.log(multiplicar(5, 4))

// 📝 Instrucoes do Exercicio - js - 11
// Crie um array chamado `numeros` com os valores de 1 a 5. Em seguida, percorra esse array usando um loop `for` e exiba cada número no console. Depois, use o método `forEach` para percorrer novamente o array e exibir os números no console.

// const numeros = [1, 2, 3, 4, 5];

// for(let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

// numeros.forEach((numero) => {
//     console.log(numero);
// });

// 📝 Instrucoes do Exercicio - js - 12
// Crie um array chamado `frutas` que contenha pelo menos 4 frutas diferentes. Depois, use `console.log()` para exibir o array completo e também exiba apenas a segunda fruta do array.

// const frutas = ["maçã", "banana", "laranja", "uva"];

// console.log(frutas)

// console.log(frutas[1])


// 📝 Instrucoes do Exercicio - js - 13
// Crie um array chamado `produtos`, onde cada item é um objeto com as propriedades `nome` e `preco`. Adicione pelo menos 4 produtos diferentes. Depois, use o método `filter()` para criar um novo array chamado `produtosCaros`, contendo apenas os produtos com preço maior que 50. Por fim, exiba os dois arrays (`produtos` e `produtosCaros`) no console. 

// const produtos = [
//     {
//         nome: "geladeira",
//         preco: 1000
//     },
//     {
//         nome: "fogão",
//         preco: 800
//     },
//     {
//         nome: "Microondas",
//         preco: 50
//     },
//     {
//         nome: "Liquidificador",
//         preco: 20
//     }

// ]

// console.log(produtos);

// const produtosCaros = produtos.filter(produtos => {
//     return produtos.preco> 50; 
// });

// console.log(produtosCaros);

// 📝 Instrucoes do Exercicio - js - 14
// Crie um array chamado `usuarios`, onde cada item é um objeto com as propriedades `id` e `nome`. Adicione pelo menos 4 usuários diferentes. Depois, use o método `find()` para procurar o usuário que tenha `id` igual a 3. Armazene o resultado em uma variável chamada `usuarioEncontrado` e exiba no console o objeto retornado

// const usuarios = [
//     {
//         id:1,
//         nome:"maria"
//     },
//     {
//         id:2,
//         nome:"Joao"
//     },
//     {
//         id:3,
//         nome:"marcelo"
//     },
//     {
//         id:4,
//         nome:"danilo"
//     }
    
// ];

// const usuarioEncontrado = usuarios.find(user =>user.id===3);

// console.log(usuarioEncontrado);

// 📝 Instrucoes do Exercicio - js - 15
// Crie um array chamado `alunos`, onde cada item é um objeto com as propriedades `nome` e `nota`. Adicione pelo menos 3 alunos diferentes. Depois, use o método `map()` para criar um novo array chamado `alunosAtualizados`, onde cada aluno terá a mesma estrutura, mas a propriedade `nota` deve ser aumentada em 1 ponto. Por fim, exiba os dois arrays (`alunos` e `alunosAtualizados`) no console para comparar.

// const alunos = [
//     {
//         nome: "Laura",
//         nota: 20,
//     },
//     {
//         nome: "diego",
//         nota: 50,
//     },
//     {
//         nome: "maria",
//         nota: 70,
//     },
    
// ]

// console.log(alunos);

// const alunosAtualizados = alunos.map(alunos => {
//     return {
//         nome: alunos.nome,
//         nota: alunos.nota + 1
//     }
// })

// console.log(alunosAtualizados);


// 📝 Instrucoes do Exercicio - js - 16
// Crie um objeto chamado `pessoa` com as propriedades: `nome` (string), `idade` (número) e `cidade` (string). Depois, use `console.log()` para exibir uma frase no formato: 'Meu nome é NOME, tenho IDADE anos e moro em CIDADE'.

// const pessoa = {
//     nome: "maria",
//     idade: 29,
//     cidade: "palmas-TO",

// }

// console.log(`meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e moro em ${pessoa.cidade} `)

// 📝 Instrucoes do Exercicio - js - 17
// Crie um array chamado `carrinho`, onde cada item é um objeto com as propriedades `produto` e `preco`. Adicione pelo menos 3 itens diferentes no array. Depois, use o método `reduce()` para calcular o valor total de todos os preços e armazene o resultado em uma variável chamada `total`. Exiba o valor total no console.

// let carrinho = [
//     {
//         Produto: "geladeria",
//         preco: 400,
//     },
//     {
//         Produto: "microondas",
//         preco: 200,
//     },
//     {
//         Produto: "Fogao",
//         preco: 150,
//     }
// ]

// const total = carrinho.reduce((novoValor, produto) => {
//     return novoValor+produto.preco;
// },0);

// console.log(total);

// 📝 Instrucoes do Exercicio - js - 18
// Crie um array chamado `numeros` contendo os valores [10, 20, 30, 40]. Depois, use o método `reduce()` para somar todos os valores do array e armazene o resultado em uma variável chamada `soma`. Exiba o valor da soma no console.
// let numeros = [10, 20, 30, 40]

// const soma = numeros.reduce((acumulador,numero) => {
//     return acumulador+numero;
// },0);

// console.log(soma);


// 📝 Instrucoes do Exercicio - js - 19
// Crie um array chamado `numeros1` com os valores [1, 2, 3]. Depois, crie outro array chamado `numeros2` com os valores [4, 5, 6]. Use o spread operator para criar um novo array chamado `todosNumeros` que junte os dois arrays. Em seguida, crie um objeto chamado `pessoa` com as propriedades `nome` e `idade`. Use o spread operator para criar um novo objeto chamado `pessoaAtualizada`, copiando todas as propriedades do objeto original e adicionando a propriedade `cidade`. Exiba todos os resultados no console.

// const numeros1 = [1, 2, 3]

// const numeros2 = [4, 5, 6]

// let todosNumeros = [...numeros1, ...numeros2];

// console.log(todosNumeros);

// const pessoa = {
//     nome: "joão",
//     idade: 29,
// }

// let pessoaAtualizada = {
//     ...pessoa, cidade: "Palmas"
// };

// console.log(pessoaAtualizada);


// 📝 Instrucoes do Exercicio - js - 20
// Crie um objeto chamado `usuario` com as propriedades `nome` e `idade`. Depois, faça a desestruturação desse objeto em variáveis separadas: `nome`, `idade` e `cidade`. Caso `cidade` não exista no objeto, atribua o valor padrão `'Desconhecida'`. Use também o rest operator para capturar as demais propriedades do objeto em uma variável chamada `resto`. Em seguida, crie um novo objeto chamado `novoUsuario`, juntando `nome`, `cidade` e todas as propriedades capturadas em `resto`. Exiba no console o objeto `novoUsuario`.

// const usuario = {
//     nome: "Milena",
//     idade: 28,
// };

// const { nome, idade, cidade = "Desconhecida",...resto } = usuario;

// const novoUsuario = {nome, idade, cidade, ...resto};

// console.log(novoUsuario);





