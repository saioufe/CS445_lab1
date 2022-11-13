
let isPrime = function (num) {
    return new Promise(function (resolve, reject) {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) reject({'prime': false});
        if(num > 1){
            resolve({'prime' : true})
        }
    });
};

console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');