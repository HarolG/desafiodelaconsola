const desafioFizzBuzz = (num) => {
    if(num%5 === 0 && num%3 === 0) return "FizzBuzz";
    if(num%3 === 0) return "Fizz";
    if(num%5 === 0) return "Buzz";    

    return num;
}

for(i = 1; i < 100; i++) {
    console.log(desafioFizzBuzz(i));
}