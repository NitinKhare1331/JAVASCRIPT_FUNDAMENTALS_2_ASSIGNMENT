function outerFunction(arr){
    let i = 0;
    function innerFuction(){
        i += 2;
        console.log(i);
        console.log(arr);
    }
    i += 10;
    return innerFuction();
}

outerFunction([1,2,3,4,5]);

/* Lexical scoping allows the inner function to maintain access to these variables even after outerFunction has finished executing because of closures.*/