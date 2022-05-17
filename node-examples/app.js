const rect = require('./rectangle');

function solveRect(l,w) {
    console.log(`Solving for rectangle with dimensions: ${l} & ${w}`);

    rect(l,w, (err, rectangle) => {
        if (err) {
            console.log('ERROR',err.message);
        } else {
            console.log(`Area of Rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`Perimeter of Rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
        }
    })
    console.log("This statement is logged after the call to rect()")

}

solveRect(10,5);
solveRect(45,2);
solveRect(0,50);
solveRect(10,-5);