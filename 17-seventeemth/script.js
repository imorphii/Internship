function sayHello (){
    const name = 'mahdi';
    const welcoming = ', welcome to the CLUB';
    console.log( name + welcoming)
};
sayHello()




console.log("-------------------------")

function name (name){
    let massage = "khob! chkhabar? ";
    console.log(massage + name);
}
name("mahdi")



console.log("-----------------------")

function numbers (num1 , num2){
    let sum = num1 + num2;
    return sum
};

let reuslt = numbers(2,2)
console.log(reuslt)
console.log(numbers(1,2))




console.log("--------------------")


let Iran = (city) => "welcome in " + city;

console.log(Iran("Tehran"))
console.log(Iran("Shiraz"))
console.log(Iran("Ahwaz"))
console.log(Iran("Rasht"))
