titles = [
    'Капец чо у темика с лицом',
    'Фанаты Путина',
    'егор офигел от артемкиного лица',
    'Темик переехал на помойку',
    'капец пипец глаз вырос',
    'Артем красаучег',
    'Василина подкатывает к Вике OwO',
    'Егор навещает темика',
    'Чел што с башкой...',
    'улыбаки',
    'капец эволюция пошла не туда',
    'нос вырос',
    'Артем помолодел',
    'Василина подкатила к Вике',
    'Артем теперь собакен',
    'Артем стал таджиком',
    'Егор стал собакеном',
    'У артема выросло... выросли очки',
    'Вика стала таджиком',
    'Егор и Артем в стране грибов',
    'Егор испугался Артема собакена',
    'Артем снял шапку (Распространите!)',
    'У артема произошел пипец с глазами (иза компуктера!)',
]

const mainCont = document.querySelector('.main_container');
console.log(mainCont);

for (var i = 1; i <= 23; i++) {
    //Создаем блок
    var block = document.createElement('div');


    //Добавляем контент
    block.classList.add('block');

    var img = document.createElement('img');
    img.src = 'img/' + i + '.jpg';
    block.appendChild(img);

    block.appendChild(document.createElement('br'));

    var text = document.createElement('span');
    text.textContent = titles[i-1];
    block.appendChild(text);


    //Добавляем блок на страницу
    mainCont.appendChild(block);
}