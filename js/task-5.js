let deliveryCountry = prompt('Введите название вашей страны:');
let nameCountry = deliveryCountry[0].toUpperCase() + deliveryCountry.slice(1).toLowerCase();
let cost;
const china = 'Китай';
const chile = 'Чили';
const australia = 'Австралия';
const india = 'Индия';
const jamaica = 'Ямайка';
switch (nameCountry) {
    case china:
        cost = 100;
        break;
    case chile:
        cost = 250;
        break;
    case australia:
        cost = 170;
        break;
    case india:
        cost = 80;
        break;
    case jamaica:
        cost = 120;
        break;
    default:
        alert('В вашей стране доставка не доступна');
}
if (cost > 0) {
    console.log(`Доставка в ${nameCountry} будет стоить ${cost} кредитов`);
}
