/**
 * AgeCalculator
 */

let agecalculator=(name, birth_year)=>
{
    let age= 2022-birth_year;
console.log(`Hello ${name}, Your age is ${age}`)
}

/**
 * Calculate Area
 */

 let calculateArea=(type,width,height)=>
 {
     let shape;
     let area;
     switch(type)
     {
         
         case 'r':
         shape= 'ractangle';
         area=(width*height);
         break;
 
         case 's':
         shape= 'squre';
         area=(width*width);
         break;
         
         case 't':
         shape= 'triangle';
         area=1/2*(width*height);
         break;
     }
     console.log(`the area of ${shape} is ${area}`)
 }

 /**
  * BMI Calculate
  */

  let bmi=(name, weight, height)=>
  {
   
      let calculation= weight/(height*height); 
      if(calculation <=18.5)
      {
          console.log(`hello ${name } Your BMI is ${calculation}`);
      }
      else if(calculation>=18.5 && calculation <=24.9)
      {
          console.log(`hello ${name }Your BMI is ${calculation}`);
      }
      else if (calculation>=25 && calculation <=29)
      {
          console.log(`hello ${name } Your BMI is ${calculation}`);
  
      }
      else if(calculation>=30)
      {
          console.log(`hello ${name } Your BMI is ${calculation}`);
      }
      else{
          console.log('invalid');
      }
  }


  /**
   * Age Identifier
   */
   
  let ageIdentifier= (name, age)=>
   {
       if(age<=12)
       {
           console.log(`HI ${name}, You are a children`)
       }
       else if(age>12 && age <=19)
       {
           console.log(`HI ${name}, You are a Teenager`)
       }
       else if(age>=20 && age <=50)
       {
           console.log(`HI ${name}, You are a Young Person`)
       }
       else if(age>=51 && age <=70)
       {
           console.log(`HI ${name}, You are a Old Person`)
       }
       else if(age >=71)
       {
           console.log(`HI ${name}, You are Very Old Person`)  
       }
       else
       {
           console.log(`invalid input`)  
   
       }
   }

/**
 * Currency Converter
 */


let currencys= function (amount, currency)
{
    let bdt;
    switch(currency)
{ 
        case 'usd':
        bdt= amount*86;
        console.log(`${amount} ${currency} = ${bdt} TK`);
        break;

        case 'cad':
            bdt= amount*68;
            console.log(`${amount} ${currency} = ${bdt} TK`);
            break;

        case 'pound':
        bdt= amount*112;
        console.log(`${amount} ${currency} = ${bdt} TK`);
        break;

        case 'euro':
        bdt= amount*93;
        console.log(`${amount} ${currency} = ${bdt} TK`);
        break;

        default:
            console.log('invalid');
            break;         
}
}

/**
 * Gpa and Grade functions
 */

 let gpacal= (marks)=>
{
    let gpa;
    
    if(marks < 40)
    {
        gpa=0;
    }
     else if(marks >=40 && marks <=50)
    {
        gpa=1;
    
    }
    else if(marks>=51 && marks <=60)
    {
        gpa=2;
    
    }
    else if(marks>=61 && marks <=70)
    {
        gpa=3;
    
    }
    else if(marks>=71 && marks <=80)
    {
        gpa=4;
    
    }
    else if(marks>=81 && marks <=100)
    {
        gpa=5;
        
    }
    return gpa;
    
}

let gradecal=(marks)=>
{
    let grade;
    
    if(marks < 40)
    {
        grade='f';
    }
     else if(marks >=40 && marks <=50)
    {
        grade='d';
    
    }
    else if(marks>=51 && marks <=60)
    {
        grade='C';
    
    }
    else if(marks>=61 && marks <=70)
    {
        grade='B';
    
    }
    else if(marks>=71 && marks <=80)
    {
        grade='A';
    
    }
    else if(marks>=81 && marks <=100)
    {
        grade='A+';
        
    }
    return grade;
    
}



 