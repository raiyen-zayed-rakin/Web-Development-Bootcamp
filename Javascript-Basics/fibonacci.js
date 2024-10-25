function fibonacciGeneratorOG(n){
    var output = []
    
    if(n === 1){
        output = [0];
    }
    else if(n === 2){
        output = [0, 1];
    }
    else {
        output = [0, 1];

        for(var i = 2; i<n; i++){
            output.push(output[output.length-2] + output[output.length-1]);
        }
    }
    return output;
}


function fibonacciGenerator(n){
    var fib1 = 0
    var fib2 = 1

    var output = []
    output.push(fib1)
    output.push(fib2)
    for(var i = 2; i < n; i++){
        fib3 = fib1 + fib2
        output.push(fib3)
        fib1 = fib2
        fib2 = fib3
    }

    return output
}

console.log(fibonacciGenerator(10))
console.log(fibonacciGeneratorOG(10))