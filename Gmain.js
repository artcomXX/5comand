// ===== ДАННЫЕ КАРТОЧЕК =====
const cardsData = [
        {
        title: "Космический проект Гондураса",
        shortDesc: "Подготовка к проекту по запуску первой ракеты со спутником в космос.",
        fullDesc: "Мы готовы открыть сбор средств на спонсирование первого национального космического проекта Гондураса. Эта центральноамериканская страна остро нуждается в собственном спутнике для мониторинга природных изменений, которые ежегодно угрожают жизни сотен тысяч людей. Спутник позволит в режиме реального времени отслеживать уровень воды в реках во время сезона дождей, прогнозировать наводнения и оповещать службы спасения. Кроме того, космические снимки помогут учёным изучать изменения климата, контролировать вырубку лесов, оценивать ущерб от засух и планировать восстановление сельскохозяйственных угодий. Проект реализуется Национальным автономным университетом Гондураса при поддержке японских партнёров, но для завершения работ и запуска спутника на орбиту требуются дополнительные средства. Ваше участие позволит Гондурасу сделать первый шаг в большой космос, обучить новое поколение инженеров и превратить космические технологии в инструмент спасения и развития для всей страны",
        image: "images/space6.png"
    },
    {
        title: "Начало космической эры: создание первых космических программ",
        shortDesc: "После Второй мировой войны СССР и США начали активно разрабатывать ракетные технологии. Это привело к созданию первых космических проектов и открыло путь к освоению космоса.",
        fullDesc: "Первым масштабным космическим проектом считается советская программа по созданию искусственного спутника Земли. Основой для неё стали исследования немецких ракет V-2 и работы советских инженеров под руководством Сергея Королёва. В 1950-х годах СССР разработал ракету Р-7, способную выводить полезный груз на орбиту.\n\n4 октября 1957 года был запущен первый искусственный спутник Земли — Спутник-1. Его запуск стал началом космической эры человечества. Спутник передавал радиосигналы и доказал возможность вывода объектов на орбиту.\n\nУспех проекта вызвал начало космической гонки между СССР и США, что привело к быстрому развитию космических технологий и новым достижениям в исследовании космоса.",
        image: "images/space1.png"
    },
    {
        title: "Первое животное в космосе: полёт Лайки",
        shortDesc: "В 1957 году собака Лайка стала первым живым существом, выведенным на орбиту Земли. Её полёт доказал, что живой организм способен переносить условия космоса.",
        fullDesc: "3 ноября 1957 года СССР запустил космический аппарат Спутник-2 с собакой Лайка на борту. До этого в космос запускались животные на суборбитальные высоты, однако Лайка стала первым живым существом, совершившим орбитальный полёт.\n\nСобака была найдена на улицах Москвы и специально подготовлена к полёту. Учёные изучали влияние невесомости и перегрузок на живой организм. Несмотря на историческое значение миссии, технологии того времени не позволяли вернуть аппарат на Землю.\n\nПолёт Лайки стал важным этапом в подготовке будущих пилотируемых космических миссий и дал ценные данные для отправки человека в космос.",
        image: "images/space2.png"
    },
    {
        title: "Юрий Гагарин — первый человек в космосе",
        shortDesc: "12 апреля 1961 года Юрий Гагарин совершил первый в истории полёт человека в космос и успешно облетел Землю на космическом корабле «Восток-1».",
        fullDesc: "12 апреля 1961 года советский космонавт Юрий Гагарин стартовал с космодрома Байконур на корабле Восток-1.\n\nПолёт продолжался 108 минут. За это время корабль совершил один полный оборот вокруг Земли. Во время старта Гагарин произнёс знаменитую фразу: «Поехали!».\n\nУспешная миссия доказала возможность пребывания человека в космосе и стала одним из крупнейших достижений XX века. После возвращения Гагарин стал всемирно известным символом освоения космоса.",
        image: "images/space3.png"
    },
    {
        title: "Первый шаг человека на Луне",
        shortDesc: "В июле 1969 года американский астронавт Нил Армстронг первым в истории ступил на поверхность Луны в рамках программы «Аполлон».",
        fullDesc: "20 июля 1969 года космический корабль Аполлон-11 доставил экипаж на окололунную орбиту. Лунный модуль «Игл» совершил посадку на поверхность Луны.\n\nПервым на Луну вышел астронавт Нил Армстронг. Сделав первый шаг, он произнёс знаменитые слова: «Это один маленький шаг для человека, но гигантский скачок для человечества».\n\nВместе с ним на поверхность Луны вышел Базз Олдрин. Астронавты провели научные эксперименты, собрали образцы грунта и установили американский флаг.\n\nМиссия «Аполлон-11» стала вершиной космической гонки и одним из самых значимых событий в истории человечества.",
        image: "images/space4.jpg"
    },
    {
        title: "Космическая программа Замбии",
        shortDesc: "В разгар космической гонки между СССР и США школьный учитель из недавно получившей независимость Замбии пообещал обогнать сверхдержавы и отправить на Марс 17-летнюю девушку, двух котов и миссионера. Тренировки его афронавтов проходили в бочках из-под нефти, скатываемых с холма",
        fullDesc: "Вдохновителем и главным идеологом этой авантюры был Эдвард Макука Нколосо — учитель естествознания, ветеран Второй мировой войны и борец за независимость. Он основал Национальную академию наук, космических исследований и философии Замбии и назначил себя её директором. Правительство страны не имело к этой программе никакого отношения и дистанцировалось от неё, считая её чудачеством отдельного человека.",
        image: "images/space5.jpeg"
    },
];

// ===== КАРУСЕЛЬ =====
const track = document.getElementById('carouselTrack');
const leftBtn = document.getElementById('carouselLeft');
const rightBtn = document.getElementById('carouselRight');
const cards = document.querySelectorAll('.carousel-card');

let currentIndex = 0;
const totalCards = cards.length;
let visibleCards = 3;

function updateVisibleCards() {
    if (window.innerWidth <= 768) {
        visibleCards = 1;
    } else if (window.innerWidth <= 1200) {
        visibleCards = 2;
    } else {
        visibleCards = 3;
    }
}

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 30;
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
    
    leftBtn.disabled = currentIndex === 0;
    rightBtn.disabled = currentIndex >= totalCards - visibleCards;
}

leftBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

rightBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
        updateCarousel();
    }
});

window.addEventListener('resize', () => {
    updateVisibleCards();
    if (currentIndex >= totalCards - visibleCards) {
        currentIndex = Math.max(0, totalCards - visibleCards);
    }
    updateCarousel();
});

// ===== МОДАЛЬНОЕ ОКНО =====
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

function openModal(index) {
    const data = cardsData[index];
    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.fullDesc;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

cards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.card-btn')) {
            openModal(index);
        }
    });
});

document.querySelectorAll('.card-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => openModal(index));
});

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Инициализация
updateVisibleCards();
updateCarousel();
// ===== ЛЕНИВАЯ ЗАГРУЗКА ВИДЕО С ПОСТЕРОМ =====
const videoContainer = document.getElementById('videoContainer');
const videoPoster = document.getElementById('videoPoster');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', function() {
    // Создаём iframe
    const iframe = document.createElement('iframe');
    iframe.src = "https://rutube.ru/play/embed/8f0cee743aeb52654ae8777934482459/?autoplay=1&muted=1";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen";
    iframe.allowFullScreen = true;
    
    // Добавляем iframe в контейнер (рядом с постером)
    videoContainer.appendChild(iframe);
    
    // Плавно скрываем постер
    videoPoster.classList.add('hidden');
    
    // Полностью удаляем постер после анимации
    setTimeout(() => {
        videoPoster.remove();
    }, 500);
});