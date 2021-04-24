let reverseFunc = function(num){
    let revNum = 0;
    while (num > 0){
        revNum = (num % 10) + (revNum * 10);
        num = Math.floor(num / 10);
    }
    return revNum;
}

let param = 16461;
let reverse = reverseFunc(param);
console.log(reverse == param ? `${param} bilangan pajindrom` : `${param} bukan bilangan pajindrom`)