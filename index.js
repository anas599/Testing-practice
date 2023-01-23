function stringLength(string){
    const length=string.length
    return length>0 && length<10
}

function reverseString(string1){
    let arr=[], str=string1.split("")
    for (let i = str.length-1; i >= 0; i--) {
        arr.push(str[i])
    }
    return arr.join("")

    // return string1.split("").reduce((a,b)=>b+a)
}

const calculator={
    add:(a,b)=> a+b,
    subtract:(a,b)=> a-b,
    divide: (a,b)=> a/b,
    multiply: (a,b)=>a*b

}

function capitalize(str){
    // let arr=str.split(' '),arrstr=[]
    // for (let i = 0; i < arr.length; i++) {
    //     arrstr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1,arr[i].length))
    // }
    // return arrstr.join(' ')
    // another method
      let capt= str.replace(/\b[a-z]/gi, function (x) {
        return x.toUpperCase();
      });
      return capt
}


console.log(reverseString('anas'));
console.log(stringLength('saaaaaaaa'));
console.log(capitalize('anas sufyan'));
module.exports = {
  stringLength,
  reverseString,
  calculator,
  capitalize
};
