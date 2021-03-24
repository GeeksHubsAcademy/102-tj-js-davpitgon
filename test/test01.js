function numPrimo(input) {
    
    let result = [];

    if ( input == 1 ) {
        result = -1;
    }

    for ( let i = 2; i <= input; i ++ ) {
        let count = 0;

        for ( let j = 1; j <= i; j ++ ) {
            if ( i % j == 0 )
            count ++;
        }
        if ( count == 2 ) {
            result.push(i);  
        }

    }
    return result;
}

module.exports = numPrimo;
