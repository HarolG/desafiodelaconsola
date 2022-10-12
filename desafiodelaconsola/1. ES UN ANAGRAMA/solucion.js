const isAnagram = (w1, w2) => {

    if(w1 == w2) {
        return false;
    }

    if(w1.split("").sort().join() === w2.split("").sort().join()) {
        return true;
    } else {
        return false;
    }
}

let w1 = prompt("Input first word: ");
let w2 = prompt("Input second word: ");

console.log(isAnagram(w1, w2));