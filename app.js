function chromosomeCheck(sperm) {
    if (sperm.includes('XY')) {
        return "Congratulations! You're going to have a son."
    } else {
        return "Congratulations! You're going to have a daughter."
    }
}

console.log(chromosomeCheck('XY')); // "Congratulations! You're going to have a son."
console.log(chromosomeCheck('XX')); // "Congratulations! You're going to have a daughter."