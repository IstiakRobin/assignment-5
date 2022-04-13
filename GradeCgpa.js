let name = prompt('enter name');
let roll = prompt('enter roll');
let cls = prompt('enter class');
let bangla= prompt('bangla marks');
let english= prompt('english marks');
let math= prompt('math marks');

console.log(`

student name: ${name}
student roll: ${roll}
student clas: ${cls}
----------------------------------------------------------------------------------
subject name     marks          gpa                         grade
bangla           ${bangla}      ${gpacal(bangla)}           ${gradecal(bangla)}
english          ${english}     ${gpacal(english)}          ${gradecal(english)}
math             ${math}        ${gpacal(math)}             ${gradecal(math)}

`)