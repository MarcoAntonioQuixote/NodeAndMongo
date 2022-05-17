// exports.perimeter = (x, y) => 2 * (x + y);
// exports.area = (x, y) => y * y;

module.exports = (x,y,callback) => { 
    //Error-Callback pattern - check for error first, 
    //stanard practice = return an error object as first argument
    //Error object is a global object in JS
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than 0; received: : ${x} & ${y}`))
    } else {
        setTimeout(() => 
            callback(null,{ //null is first argument because no error!
                perimeter: () => 2 * (x + y),
                area: () => y * y,
            }),
            2000
        )
    }
}

//Changed export to return an entire function instead of 2 separate methods; the entire function is module.exports, w/ 3 params: x,y,callback

//Check for error, if no error,