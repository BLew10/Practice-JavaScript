//Prints odds

for(var i = 1; i < 20; i+=2){
    console.log(i);
}

//Decreasing Multiples of 3

for(var i = 3; i <=100 ; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

//Print the Sequence

for(var i = 4; i >= -4; i -= 1.5){
    console.log(i);
}

//Sigma
var sum = 0;
for(var i = 1; i <= 100; i++){
    sum+=i;
}
console.log(sum)

//Factorial

var product = 1;
for(var i = 1; i <= 12; i++){
    product*=i;
}
console.log(product)