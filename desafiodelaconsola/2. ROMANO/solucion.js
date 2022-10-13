function romano(num) {
    let diccionario = {"M":1000,"CM":900,"D":500,"CD":400,"C":100,"XC":90,"L":50,"XL":40,"X":10,"IX":9,"V":5,"IV":4,"I":1};
    let roman = '';
    let i;

    for(i in diccionario) {
        while(num >= diccionario[i]) {
            roman += i;
            num -= diccionario[i];
        }
    }
    return roman;
}

let num = prompt("Digite el número a convertir:");

while (num > 3999) {
    num = prompt("Digite un número inferior a 4000:");
}

console.log(`El número ${num} es ${romano(num)} en romano`);

