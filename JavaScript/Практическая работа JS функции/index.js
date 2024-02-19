function a(params){
    for(;params < 5;params++){
        console.log(params)
    }
}

function b(params){
    while(params <= 6){
        console.log(params)
        params++
    }
}

function c(params){
    while(params <= 10){
        if(params > 7){
            break
        }
        console.log(params)
        params++
    }
}

function d(params){
    while(params < 12){
        console.log(params)
        params++
        if(params == 8){
            continue
        }
        
    }
}