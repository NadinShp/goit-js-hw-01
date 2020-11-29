let deliveryCountry = prompt('Введите название вашей страны:');
let normalizedDeliveryCountry = deliveryCountry.toLowerCase();
let nameCountry = normalizedDeliveryCountry[0].toUpperCase() + normalizedDeliveryCountry.slice(1);
let cost;
switch (nameCountry) {
    case 'Китай':
        cost = 100;
        break;
    case 'Чили':
        cost = 250;
        break;
    case 'Австралия':
        cost = 170;
        break;
    case 'Индия':
        cost = 80;
        break;
    case 'Ямайка':
        cost = 120;
        break;
    default:
        alert('В вашей стране доставка не доступна');
}
if (cost > 0) {
    console.log(`Доставка в ${nameCountry} будет стоить ${cost} кредитов`);
}
