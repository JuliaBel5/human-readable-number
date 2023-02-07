module.exports = function toReadable (number) {
    const num1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    const num2 = ['twen', 'thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine'];
    const num2a = ['twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine'];
    const num3 = ['teen'] ;
    const num4 = ['ty'];
    const num5 = ['hundred'];
    const num6 = ['thousand']
    const and = 'and'
    
    let result = '';
    if (number >= 0 && number <= 12) {
        result = num1[number]
       }   else if (number >= 13 && number <= 19) {
       result = num2[number % 10 - 2] + num3
       }   else if (number >= 10 && number %10 === 0 && number < 100) {
       result = num2a[Number((number+'')[0])-2]+ num4;
       } else if (number >= 100 && number % 100 === 0 && number < 1000) {
       result = num1[Number((number+'')[0])] + " " + num5}
       else if (number > 20 && number < 100) {
       result = num2a[Number((number+'')[0])-2]+ num4 + " " + num1[(number % 10)]
        } else if (number > 100 && number < 1000 &&  Number((number+'')[2]) === 0 &&  Number((number+'')[1]) !== 1){
        result = num1[Number((number+'')[0])] + " " + num5 + " " + num2a[Number((number+'')[1])-2]+ num4
    } else if (number > 100 && number < 1000 && number % 100 === 10 ) {
        result = num1[Number((number+'')[0])] + " " + num5 + " " + num1[10]    
    } else if (number > 100 && number < 1000 && number % 100 < 10) {
         result = num1[Number((number+'')[0])] + " " + num5 + " " + num1[number % 100]
        } else if (number > 100 && number < 1000 && number % 100 === 11 ) {
            result = num1[Number((number+'')[0])] + " " + num5 + " " + num1[11]
        } else if (number > 100 && number < 1000 && number % 100 === 12) {
            result = num1[Number((number+'')[0])] + " " + num5 + " " + num1[12]
        } else if (number > 100 && number < 1000 && number % 100 > 12 && number % 100 < 20) {
            result = num1[Number((number+'')[0])] + " " + num5 + " " + num2[number % 10 - 2] + num3
       } else if (number > 100 && number < 1000 && Number((number+'')[1]) !== 0) {
       result = num1[Number((number+'')[0])] + " " + num5 + " " + num2a[Number((number+'')[1])-2]+ num4 + " " + num1[(number % 10)] 
        } else if (number > 100 && number < 1000 &&  Number((number+'')[1]) === 0) {
        result = num1[Number((number+'')[0])] + " " + num5  + " and " + num1[Number((number + '')[2])]
     
     
        } else if (number >= 1000  && number < 10000 &&  number % 1000 === 0) {
        result = num1[Number((number+'')[0])] + " " + num6}
return(result);
}
