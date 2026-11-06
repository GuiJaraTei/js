function ParOuImpar(n){
    if(n % 2 == 0 ){
        return "par"
    }else{
        return "impar"
    }
}

let res = ParOuImpar(8)
console.log(res)