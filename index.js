// Your code here
function mapToNegativize(arr) {
    return arr.map(el => el * -1);
}

function mapToNoChange( arr ) {
    return arr;
}

function mapToDouble(arr) {
    return arr.map( el => el * 2 );
}

function mapToSquare(arr) {
    return arr.map( x => Math.pow(x,2) );
}

function reduceToTotal(arr, sp = 0) {
    let sum = 0;
    arr.forEach(x => sum += x);
    return sum + sp;
}

function reduceToAllTrue(arr) {
    var BreakException = {};

    try {
        arr.forEach((x) => {
            if (x == false) {
                throw BreakException;
            }
        } );        
        return true;
    } catch ( e ) {
        return false;
    }
}

function reduceToAnyTrue(arr) {
    let isThrutly = false;

    arr.forEach((x) => {
        if (x == true) {
            isThrutly = true;
        }
    });
    
    return isThrutly;
    
}