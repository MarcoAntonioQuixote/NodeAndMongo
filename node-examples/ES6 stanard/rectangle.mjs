const rect = (x,y,callback) => { 

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

export default rect;