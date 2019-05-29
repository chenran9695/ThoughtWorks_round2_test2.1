// Write your cade below:
module.exports = function main(number1,number2) {
    //被除数不能为零
    if(number2 == 0){
        console.log("被除数不能为0！")
        return Number.NaN;
    }
    return number1 % number2;
};