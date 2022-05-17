const rect = require('./rectangle');

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

    /* let's define what Rect() is doing; 
    
        Rect is taking in values for x and y and a callback Function, defined above;
        the function that Rect is referencing is defined in the Rectangle file, I'm going to call the Rectangle Function 

        There, the Rectangle Function is first checking if there is an error

        If there is an error:
            it responds right away using the callback that it was given with an error object which contains a message (err.message)
            
        If there is not an error:
            it procedes, running the callback function with a different set of parameters - after two seconds (within the setTimeout method of the Rectangle file)

            This callback RUNS the callback function defined above (sicne it was passed as an arg)

            The callback passes 2 vars: NULL and an object w/ 2 methods inside

            So when the Rectanlge function uses the callback, the callback (here) calls upon the Rectangle function (there), calling upon the methods defined in the object it created,
            So the output is a combination of 2 things:
                * the method defined in Rectangle.js
                * the log message and object.method call defined in App.js
    */
}

solveRect(10,5);
solveRect(45,2);
solveRect(0,50);
solveRect(10,-5);