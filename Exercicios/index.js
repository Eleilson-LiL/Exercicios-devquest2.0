//Crie variáveis para testar comparações entre tipos iguais e diferentes. Use console.log() para mostrar os resultados das comparações com == e ===. Exemplo: compare um número com outro número, uma string com outra string e um número com uma string contendo o mesmo valor.

// Comparação entre números
let numero1 = 10;
let numero2 = 10;

console.log(numero1 == numero2);  // true
console.log(numero1 === numero2); // true

// Comparação entre strings
let texto1 = "Olá";
let texto2 = "Olá";

console.log(texto1 == texto2);  // true
console.log(texto1 === texto2); // true

// Comparação entre número e string
let numero = 10;
let textoNumero = "10";

console.log(numero == textoNumero);  // true
console.log(numero === textoNumero); // false