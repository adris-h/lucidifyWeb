const groups = document.querySelectorAll('.group-names-container a');
const products = {
    'Twice': [
        { title: 'Fancy', image: 'img/cd-newjeans3.webp' },
        { title: 'Feel Special', image: 'img/cd-newjeans.webp' },
        { title: 'Alcohol-Free', image: 'img/cd-newjeans4.webp' },
        { title: 'Talk That Talk', image: 'img/cd-newjeans2.webp' }
    ],
    'Le Sserafim': [
        { title: 'Antifragile', image: 'img/cd-newjeans4.webp' },
        { title: 'Fearless', image: 'img/cd-newjeans2.webp' },
        { title: 'Perfect Night', image: 'img/cd-newjeans.webp' },
        { title: 'Unforgiven', image: 'img/cd-newjeans3.webp' }
    ],
    'ITZY': [
        { title: 'ICY', image: 'img/cd-newjeans2.webp' },
        { title: 'WANNABE', image: 'img/cd-newjeans.webp' },
        { title: 'LOCO', image: 'img/cd-newjeans3.webp' },
        { title: 'CAKE', image: 'img/cd-newjeans4.webp' }
    ],
    'Illit': [
        { title: 'Magnetic', image: 'img/cd-newjeans.webp' },
        { title: 'Lucky Girl Syndrome', image: 'img/cd-newjeans4.webp' },
        { title: 'My World', image: 'img/cd-newjeans2.webp' },
        { title: 'New Star', image: 'img/cd-newjeans3.webp' }
    ],
    'NewJeans': [
        { title: 'Get Up', image: 'img/cd-newjeans.webp' },
        { title: 'How Sweet', image: 'img/cd-newjeans2.webp' },
        { title: 'Supernatural', image: 'img/cd-newjeans3.webp' },
        { title: 'NewJeans', image: 'img/cd-newjeans4.webp' }
    ],
    'aespa': [
        { title: 'Black Mamba', image: 'img/cd-newjeans4.webp' },
        { title: 'Next Level', image: 'img/cd-newjeans3.webp' },
        { title: 'Savage', image: 'img/cd-newjeans2.webp' },
        { title: 'Spicy', image: 'img/cd-newjeans.webp' }
    ],
    'Red Velvet': [
        { title: 'Peek-A-Boo', image: 'img/cd-newjeans.webp' },
        { title: 'Bad Boy', image: 'img/cd-newjeans3.webp' },
        { title: 'Psycho', image: 'img/cd-newjeans2.webp' },
        { title: 'Feel My Rhythm', image: 'img/cd-newjeans4.webp' }
    ],
    'KISS OF LIFE': [
        { title: 'Shhh', image: 'img/cd-newjeans3.webp' },
        { title: 'Sugarcoat', image: 'img/cd-newjeans2.webp' },
        { title: 'Countdown', image: 'img/cd-newjeans.webp' },
        { title: 'Midas Touch', image: 'img/cd-newjeans4.webp' }
    ],
    'fromis_9': [
        { title: 'Stay This Way', image: 'img/cd-newjeans4.webp' },
        { title: 'DM', image: 'img/cd-newjeans2.webp' },
        { title: 'We Go', image: 'img/cd-newjeans.webp' },
        { title: 'FUN!', image: 'img/cd-newjeans3.webp' }
    ],
};

    groups.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.group-names-container .selected')?.classList.replace('selected', 'unselected');
            link.classList.replace('unselected', 'selected');

            const group = products[link.textContent.trim()];
            group?.forEach((item, i) => {
                document.querySelector(`.product-${i + 1} .product-image`).style.backgroundImage = `url('${item.image}')`;
                document.querySelector(`.product-${i + 1} .product-title`).textContent = item.title;
            });
        });
    });
