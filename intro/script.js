// Functions

function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    //console.log(age);
    return age;
}

//var ageMora = calculateAge(1990);
//var ageEmma = calculateAge(1988);
//var ageRamas = calculateAge(1993);
//var ageWilly = calculateAge(1995);
//var ageBerto = calculateAge(1997);


function yearsUntilRetirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement >= 0){
        console.log(name + ' retires in ' + retirement + ' years');
    } else{
        console.log(name + ' is already retired');
    }
    return retirement;
}


yearsUntilRetirement('Alejo', 1955);
yearsUntilRetirement('Bertha', 1958);
yearsUntilRetirement('Hibran', 1986);
yearsUntilRetirement('Emma', 1988);
yearsUntilRetirement('Mora', 1990);
yearsUntilRetirement('Berto', 1997);
