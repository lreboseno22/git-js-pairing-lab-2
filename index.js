function OneHundredToFive(){
    for (let i = 100; i >= 5; i--){
        //console.log(i)
    }
}

//OneHundredToFive()

function absoluteValue(num){
    if (typeof num === "number"){
        return Math.abs(num)
    }else{
        return null
    }
}
 
function multiplesOfFourOrSeven(){
    for (let i = 0; i <= 100; i++){
        if (i % 4 === 0|| i % 7 ===0){
            console.log(i)
        }
    }
}

multiplesOfFourOrSeven()

function square(num){
    if (Number.isInteger(Math.sqrt(num)) === true){
        return Math.sqrt(num);
    } else {
       return num * num
    }
}


function areaofrec(x,y){
    let area = x * y
    return area
}

 
 
 
 function circleArea(radius){
     return Math.PI *(radius * radius)
 }
 console.log(areaofrec(4,5))
 
 