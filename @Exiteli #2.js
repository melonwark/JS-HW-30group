let age_2 = 18;

let age_3 = 60;

const check_age= (age)=> {
    if(typeof(age) === 'number') {

    if(age < age_2) {
         console.log("You don't have access cause your age is " + age, 'It\'s less then '+ age_2)
    } else if(age >= age_2 && age< age_3) {
         console.log('Welcome!')
    } else if(age > age_3) {
         console.log('Keep calm and look Culture channel')
    } else {
        console.log('Technical work')
    }
} else {
    console.log('Error: wrong data type')
}
}
check_age(17)

check_age(18)

check_age(61)