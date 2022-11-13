



Array.prototype.removeDuplicatesAsync = function() {
    const arr = this;
    return new Promise(function (resolve, reject) {
        const uniqueArr = arr.filter((value, index) => {
            return arr.indexOf(value) === index;
        });
        resolve(uniqueArr);
        setTimeout(function() {
            console.log(uniqueArr)
        }, 0);
    });

};

console.log(`start`);
    [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]