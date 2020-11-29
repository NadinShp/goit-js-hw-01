const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let countDroid;
    countDroid = prompt("Введите желаемое колличество дроидов:");
    if (countDroid === null) {
        console.log('Отменено пользователем!');
    }
    
    countDroid = Number(countDroid);
    totalPrice = pricePerDroid * countDroid;
    const notANumber = Number.isNaN(countDroid);
    if (notANumber) {
        console.log('Неверный ввод. Необходимо ввести числовое значение.')
    }
    if (credits < totalPrice) {
     console.log('Недостаточно средств на счету!');
    }
    if (credits > totalPrice) {
      console.log(`Вы купили ${countDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);  
    }
   
    
//const credits = 23580;
//const pricePerDroid = 3000;
//let countDroid = prompt("Введите желаемое колличество дроидов:");
//countDroid = Number(countDroid);

//if (countDroid === 0) {
//    console.log('Отменено пользователем!');
//}
//else if (countDroid > 0) {
//    const totalPrice = pricePerDroid * countDroid;
//
//    if (credits < totalPrice) {
//        console.log('Недостаточно средств на счету!');
//    }
//    if (credits > totalPrice) {
//        console.log(`Вы купили ${countDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
//    }
//}
//else {
//    console.log('Неверный ввод. Необходимо ввести числовое значение.')
//}
//
    