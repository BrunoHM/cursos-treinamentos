//-------------- exemplo 1 ---------------- #
const numeros = [1, 2, 3, 4, 5];
const letras = ["a", "b", "c", "d", "e"];

console.log([...numeros, ...letras]);
/* Resultado no console.log: 
            #[
            1,   2,   3,   4,   5, 
            'a', 'b', 'c', 'd', 'e'
            ]#
*/
//------------ Fim exemplo 1 -------------- #

//-------------- exemplo 2 ---------------- #

/* o primeiro valor da variável "letras, a" é atribuído para a nova váriavel, "letraA";
   o segundo valor da variável "letras, b" é atribuído para a próxima nova váriavel "letraB";
   Todas as demais letras restantes = "c - d - e", são atribuídas para a váriavel "demaisLetras", que acaba se tornando um objeto/array
*/
const [letraA, letraB, ...demaisLetras] = [...letras];
console.log(letraA, letraB, demaisLetras);
/* Resultado no console.log: 
            # a b [ 'c', 'd', 'e' ] #
*/
//------------ Fim exemplo 2 -------------- #

//-------------- exemplo 3 ---------------- #
const dispositivo = [{
    nome : "Smartphone Xiaomi Redmi note 8",
    categoria: "Smartphone",
    marca: "Xiaomi",
    modelo: "Redmi note 8",
}, {
    nome : "Placa de desenvolvimento Arduino Uno",
    marca: "Arduino",
    modelo: "Uno rev3",
    portasIO: 14
}];

const [
    { nome: nome1, marca: marca1, categoria: categoria1 },
    { nome: nome2, marca: marca2, portasIO: portasIO1 }
] = dispositivo;

console.log("Primeiro dispositivo:",nome1,",",marca1,",",categoria1);
console.log("Segundo dispositivo:",nome2,",",marca2,",",portasIO1);

/* Resultado no console.log: 
            # Primeiro dispositivo: Smartphone Xiaomi Redmi note 8 , Xiaomi , Smartphone
              Segundo dispositivo: Placa de desenvolvimento Arduino Uno , Arduino , 14 #
*/

//------------ Fim exemplo 3 -------------- #