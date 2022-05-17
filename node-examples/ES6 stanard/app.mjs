import rect from '../rectangle.mjs';

function solveRect(l,w) {
    console.log(`Solving for rectangle with dimensions: ${l} & ${w}`);

    const callbackRect = (err,rectangle) => {
        if (err) {
            console.log('ERROR', err.message);
        } else {
            console.log(`Area of Rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`Perimeter of Rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);            
        }
    }

    rect(l,w,callbackRect);
    console.log("This statement is logged after the call to rect()");

}

solveRect(100000,5);
solveRect(45,2);
solveRect(0,50);
solveRect(10,-5);