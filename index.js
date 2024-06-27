class Mynumber{
 
    constructor(fnum, snum){
           this.fnum = fnum
           this.snum = snum
    }
    addNumbers(){
        return this.fnum + this.snum
    }
}

let newNum = new Mynumber(23, 34)

console.log(newNum.addNumbers());