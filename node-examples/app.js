const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x,y) => x * y
}

function solveRect(l,w) {
    console.log(`Solving for rectangle with dimensions: ${l} & ${w}`);

    if (l <= 0 || w <= 0) {
        console.log(`Rectangle dimensions must be greater than 0; received: : ${l} & ${w}`)
    } else {
        console.log(`Area of Rectangle: ${rect.area(l,w)}`);
        console.log(`Perimeter of Rectangle: ${rect.perimeter(l,w)}`);
    }
}

solveRect(10,5);
solveRect(45,2);
solveRect(0,50);
solveRect(10,-5);