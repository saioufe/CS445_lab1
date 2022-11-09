const memoize = (fn) => {
    const cache = {}
    return function (x) {
        if (!(x in cache)) {
            cache [x] = fn (x)
        }
        return cache [x]
    }
}

const fib3 = memoize (function (n) {
    if (n <= 1) {
        return 1
    }
    //console .log (`Calculating fib3 (${n})`)
    return fib3 (n - 1) + fib3 (n - 2)
})

valu = fib3 (5);
console.log(valu);