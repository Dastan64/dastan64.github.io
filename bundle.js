!function(){var e={9:function(){var e=document.querySelector("#theme-checkbox");function t(){var t=localStorage.theme;t?"dark"===t?(document.documentElement.classList.add("dark"),e.checked=!0):"light"===t&&document.documentElement.classList.remove("dark"):window.matchMedia("(prefers-color-scheme: dark)").matches?(console.log("Ты предпочитаешь тёмный режим"),document.documentElement.classList.add("dark"),e.checked=!0):document.documentElement.classList.remove("dark")}e.addEventListener("change",(function(e){e.target.checked?(localStorage.theme="dark",document.documentElement.classList.add("dark")):(localStorage.theme="light",document.documentElement.classList.remove("dark"))})),window.addEventListener("load",t),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(){return t()}))}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}(),function(){"use strict";const e=a.p+"assets/images/spider-man.png",t=a.p+"assets/images/s23-landing.png";var n={layout:[{ruTitle:"Страница предзаказа игры Spider-Man 2",enTitle:"Spider-Man 2 pre-order page",kkTitle:"Spider-Man 2 алдын ала тапсырыс беті",image:e,ruText:"Предзаказ следующей игры франшизы «MARVEL Человек-паук» на консоли PlayStation®5.",enText:"Pre-order of the next game in the MARVEL Spider-Man franchise on PlayStation®5.",kkText:"PlayStation®5 жүйесінде MARVEL Spider-Man франшизасындағы келесі ойынға алдын ала тапсырыс",link:"https://www.technodom.kz/cms/promo/spider-man-2",githubLink:"",stack:[]},{ruTitle:"Конкурс на лучший обзор",enTitle:"Competition for the best review",kkTitle:"Үздік шолу байқауы",image:t,ruText:"Конкурс среди контент-мейкеров за лучший видеообзор на новую и самую эпичную линейку Galaxy.",enText:"A contest among content makers for the best video review of the new and most epic Galaxy line.",kkText:"Жаңа және ең эпикалық Galaxy желісіне ең жақсы бейне шолу үшін контент-мейкерлер байқауы.",link:"https://www.technodom.kz/cms/samsung-raffle",githubLink:"",stack:[]},{ruTitle:"Футбольный сезон в Technodom",enTitle:"Football season at Technodom",kkTitle:"Технодомдағы футбол маусымы",image:a.p+"assets/images/vivo-world-cup.png",ruText:"Страница розыгрыша смартфонов Vivo V25e",enText:"Vivo V25e smartphones lottery page",kkText:"Vivo V25e смартфондарының ұтыс ойынның беті",link:"https://www.technodom.kz/cms/under/vivo-world-cup",githubLink:"",stack:[]},{ruTitle:"Сборка игровых компьютеров",enTitle:"Assembly of gaming computers",kkTitle:"Ойын компьютерлерін құрастыру",image:a.p+"assets/images/tgaming.png",ruText:'Сайт по сборке игровых ПК компании "Технодом"',enText:"Website for assembling gaming PCs of the Technodom company",kkText:"Технодом компаниясының ойын компьютерлерін жинауға арналған сайт",link:"https://www.technodom.kz/cms/tgaming",githubLink:"",stack:[]},{ruTitle:"AUZ T",enTitle:"AUZ T",kkTitle:"AUZ T",image:a.p+"assets/images/auzt.png",ruText:"Первый стрит-фуд на основе казахской кухни",enText:"The first street food based on Kazakh cuisine",kkText:"Қазақ тағамдарына негізделген алғашқы көше тағамы",link:"https://dastan64.github.io/auzt/",githubLink:"https://github.com/Dastan64/auzt",stack:[]},{ruTitle:"AUZ T Franchise",enTitle:"AUZ T Franchise",kkTitle:"AUZ T Franchise",image:a.p+"assets/images/auzt-franchise.png",ruText:"Сайт франшизы казахской национальной еды AUZ T",enText:"Website of the Kazakh national food franchise AUZ T",kkText:"Қазақтың ұлттық тағамы франшизасының AUZ Т сайты",link:"https://dastan64.github.io/auzt-franchise/",githubLink:"https://github.com/Dastan64/auzt-franchise",stack:[]},{ruTitle:"Сайт йога-туров в Индию",enTitle:"India yoga tours website",kkTitle:"Үндістан йога турларының веб-сайты",image:a.p+"assets/images/yoga-tours.png",ruText:"Сайт йога-туров в Индию",enText:"India yoga tours website",kkText:"Үндістан йога турларының веб-сайты",link:"https://dastan64.github.io/project-1/",githubLink:"https://github.com/Dastan64/project-1",stack:[]},{ruTitle:"Сайт сертифицированных детских бескаркасных автокресел",enTitle:"Site of certified child frameless car seats",kkTitle:"Балаларға арналған сертификатталған рамасыз автокөлік орындықтары сайты",image:a.p+"assets/images/child-seats.png",ruText:"Сайт сертифицированных детских бескаркасных автокресел",enText:"Site of certified child frameless car seats",kkText:"Балаларға арналған сертификатталған рамасыз автокөлік орындықтары сайты",link:"https://dastan64.github.io/project-2",githubLink:"https://github.com/Dastan64/project-2",stack:[]},{ruTitle:"Сайт продажи кузовных запчастей",enTitle:"Website for the sale of body spare parts",kkTitle:"Шанақ бөлшектерін сатуға арналған веб-сайты",image:a.p+"assets/images/auto-parts.png",ruText:"Сайт продажи кузовных запчастей",enText:"Website for the sale of body spare parts",kkText:"Шанақ бөлшектерін сатуға арналған веб-сайты",link:"https://dastan64.github.io/project-3/",githubLink:"https://github.com/Dastan64/project-3",stack:[]},{ruTitle:"Сайт сервиса детского отдыха '7 континентов'",enTitle:"Website of the children's recreation service '7 continents'",kkTitle:'"7 Континент" балалар демалысы сервисінің сайты',image:a.p+"assets/images/continents.png",ruText:"Сайт сервиса детского отдыха '7 континентов'",enText:"Website of the children's recreation service '7 continents'",kkText:'"7 Континент" балалар демалысы сервисінің сайты',link:"https://dastan64.github.io/project-4",githubLink:"https://github.com/Dastan64/project-4",stack:[]},{ruTitle:"Сайт турецкой клиники 'Avrasya Hastanesi'",enTitle:"Website of the Turkish clinic 'Avrasya Hastanesi'",kkTitle:"'Avrasya Hastanesi' түрік клиникасының сайты",image:a.p+"assets/images/clinic.png",ruText:"Сайт турецкой клиники 'Avrasya Hastanesi'",enText:"Website of the Turkish clinic 'Avrasya Hastanesi'",kkText:"'Avrasya Hastanesi' түрік клиникасының сайты",link:"https://dastan64.github.io/project-6/",githubLink:"https://github.com/Dastan64/project-6",stack:[]},{ruTitle:"Сайт барбершопа 'Borodinski'",enTitle:"The website of 'Borodinski' barbershop",kkTitle:"Borodinski барбершоптың сайты",image:a.p+"assets/images/barbershop.png",ruText:"Сайт барбершопа 'Borodinski'",enText:"The website of 'Borodinski' barbershop",kkText:"Borodinski барбершоптың сайты",link:"https://dastan64.github.io/project-7/",githubLink:"https://github.com/Dastan64/project-7",stack:[]},{ruTitle:"Сайт умной доставки материалов для сложных строительных площадок",enTitle:"Website for smart delivery of materials for complex construction sites",kkTitle:"Күрделі құрылыс алаңдарына арналған материалдарды ақылды жеткізу сайты",image:a.p+"assets/images/delivery.png",ruText:"Сайт умной доставки материалов для сложных строительных площадок",enText:"Website for smart delivery of materials for complex construction sites",kkText:"Күрделі құрылыс алаңдарына арналған материалдарды ақылды жеткізу сайты",link:"https://dastan64.github.io/project-8/",githubLink:"https://github.com/Dastan64/project-8",stack:[]},{ruTitle:"Агентство с международным именем 'Blitz Estate'",enTitle:"International agency 'Blitz Estate'",kkTitle:"'Blitz Estate' халықаралық атауы бар агенттігі",image:a.p+"assets/images/agency.png",ruText:"Агентство с международным именем 'Blitz Estate'",enText:"International agency 'Blitz Estate'",kkText:"'Blitz Estate' халықаралық атауы бар агенттігі",link:"https://dastan64.github.io/project-9/",githubLink:"https://github.com/Dastan64/project-9",stack:[]}],projects:[{ruTitle:"Конкурс на лучший обзор",enTitle:"Competition for the best review",kkTitle:"Үздік шолу байқауы",image:t,ruText:"Конкурс среди контент-мейкеров за лучший видеообзор на новую и самую эпичную линейку Galaxy.",enText:"A contest among content makers for the best video review of the new and most epic Galaxy line.",kkText:"Жаңа және ең эпикалық Galaxy желісіне ең жақсы бейне шолу үшін контент-мейкерлер байқауы.",link:"https://www.technodom.kz/cms/samsung-raffle",githubLink:"",stack:["JavaScript (ES6)","SCSS"]},{ruTitle:"Калькулятор лизинга авто",enTitle:"Auto Leasing Calculator",kkTitle:"Автокөлік лизингі калькуляторы",image:a.p+"assets/images/leasing-calculator.png",ruText:"Калькулятор лизинга автомобиля, который помогает рассчитать ежемесячный платеж и сумму договора в зависимости от различных факторов",enText:"Car leasing calculator, which helps to calculate the monthly payment and the amount of the contract depending on various factors",kkText:"Түрлі факторларға байланысты ай сайынғы төлемді және келісімшарт сомасын есептеуге көмектесетін автокөлік лизингінің калькуляторы",ruFeatures:[],link:"https://dastan64.github.io/auto-leasing-calculator/",githubLink:"https://github.com/Dastan64/auto-leasing-calculator",stack:["React","SCSS"]},{enTitle:"Movie Library",ruTitle:"Библиотека фильмов",kkTitle:"Кинотека",image:a.p+"assets/images/movie-service.png",ruText:"Библиотека фильмов, где собрано большое количество фильмов и сериалов.",enText:"A library of films, where a large number of films and TV series are collected.",kkText:"Көптеген фильмдер мен сериаларды қамтитын кинотекасы.",ruFeatures:["Списки фильмов по разным категориям","Поиск фильмов","Подробная информация о выбранном фильме","Интересные факты и отзывы зрителей"],enFeatures:["Lists of films by different categories","Movie search","Detailed information about the selected movie","Interesting facts and audience reviews"],kkFeatures:["Әртүрлі санаттар бойынша фильмдер тізімі","Фильмдерді іздеу","Таңдалған фильм туралы толық ақпарат","Қызықты фактілер мен көрермендердің пікірлері"],link:"https://dastan64.github.io/movie-service",githubLink:"https://github.com/Dastan64/movie-service",stack:["React","MobX","CSS Modules","React Router"]},{enTitle:"Games Library",ruTitle:"Библиотека игр",kkTitle:"Ойындар каталогы",image:a.p+"assets/images/games-service.png",ruText:"Каталог более 700 000 игр",enText:"Catalog of more than 700,000 games",kkText:"700 000-нан астам ойындар каталогы",ruFeatures:["Поиск по названию","Подробная информация о каждой игре","Добавление в избранное и понравившиеся","Классификация по жанрам"],enFeatures:["Search by name","Detailed information about each game","Adding to favorites and liked","Classification by genre"],kkFeatures:["Аты бойынша іздеу","Әр ойын туралы толық ақпарат","Таңдаулылар мен ұнатуларға қосу","Жанр бойынша сыныптау"],link:"https://dastan64.github.io/games-service",githubLink:"https://github.com/Dastan64/games-service",stack:["React","Redux","CSS Modules","React Router"]},{ruTitle:"Таймер Помодоро",enTitle:"Pomodoro Timer",kkTitle:"Помодоро таймері",image:a.p+"assets/images/pomodoro-preview.png",ruText:"Трекер времени по методике Помодоро",enText:"Pomodoro Time Tracker",kkText:"Помодоро әдіс арқылы уақытын бақылау құралы",ruFeatures:["Настройка таймера Pomodoro, а также таймера для коротких и длительных перерывов","Настройка продолжительности каждого таймера","Круговой индикатор выполнения","Настройка внешнего вида приложения с возможностью настройки предпочтений для цветов и шрифтов"],enFeatures:["Setting the Pomodoro timer, as well as the timer for short and long breaks","Setting the duration of each timer","Circular progress bar","Customize the appearance of the application with the ability to set preferences for colors and fonts."],kkFeatures:["Pomodoro таймерін, сондай-ақ қысқа және ұзақ үзілістерге арналған таймерді теңшеу","Әр таймердің ұзақтығын теңшеу","Дөңгелек орындалу жолағы","Түстер мен қаріптерге арналған теңшелімдерді баптау мүмкіндігімен қолданбаның сыртқы түрін теңшеу "],link:"https://dastan64.github.io/pomodoro-timer",githubLink:"https://github.com/Dastan64/pomodoro-timer",stack:["React","Redux Toolkit","CSS Modules"]},{ruTitle:"Тестовое задание №3",enTitle:"Test Task №3",kkTitle:"Тест тапсырмасы №3",image:a.p+"assets/images/ruport-bears.png",enText:"Test task for a frontend developer",ruText:"Тестовое задание на позицию фронтенд-разработчика. Распределение заявок на сайте клуба медведей",kkText:"Фронтенд-әзірлеуші позициясына арналған тест тапсырмасы. Аюлар клубының сайтында өтінімдерді бөлу",link:"https://dastan64.github.io/ruport-digital-bears",githubLink:"https://github.com/Dastan64/ruport-digital-bears",stack:["JavaScript","SCSS"]},{ruTitle:"Тестовое задание №2",enTitle:"Test Task №2",kkTitle:"Тест тапсырмасы №2",image:a.p+"assets/images/roox-test.png",enText:"Test task for a frontend developer candidate",ruText:"Тестовое задание для соискателя на должность frontend-разработчика",kkText:"Фронтенд-әзірлеуші позициясына арналған тест тапсырмасы",link:"https://dastan64.github.io/roox-solutions-profile/",githubLink:"https://github.com/Dastan64/roox-solutions-profile",stack:["React","TypeScript","SCSS","React Router"]},{ruTitle:"Тестовое задание №1",enTitle:"Test Task №1",kkTitle:"Тест тапсырмасы №1",image:a.p+"assets/images/kode-test.png",enText:"Test task for a frontend developer candidate",ruText:"Тестовое задание для соискателя на должность frontend-разработчика",kkText:"Фронтенд-әзірлеуші позициясына арналған тест тапсырмасы",link:"https://dastan64.github.io/kode-test-task/",githubLink:"https://github.com/Dastan64/kode-test-task",stack:["React","TypeScript","CSS Modules","React Router"]}]},s=document.querySelector(".dropdown"),i=document.querySelector(".dropdown__btn"),o=document.querySelector(".dropdown__list"),r=document.querySelector(".dropdown__btn-text"),c=document.querySelector(".dropdown__btn-icon"),l=document.querySelector(".dropdown__btn-flag"),u=document.querySelector(".projects__cards"),d=document.querySelector(".work__container");const k=a.p+"assets/images/github-icon.svg",p=a.p+"assets/images/external-icon.svg";function h(e,t){return t.length>0?"\n        <ul class=".concat(e,">\n            ").concat(t.map((function(e){return"<li>".concat(e,"</li>")})).join(""),"\n        </ul>\n    "):""}const m=a.p+"assets/images/russian.svg",g=a.p+"assets/images/kazakh.svg",b=a.p+"assets/images/english.svg",f=JSON.parse('{"kk":{"title":"Сәлем, мен Дастан","subtitle":"Танысқаныма қуаныштымын","aboutMe":"Мен туралы","me":"Дамуды және кәсіби өсуді іздейтін Алматыдан (Қазақстан) келген әзірлеуші","interface":"Керемет интерфейстерді әзірлеу және пайдаланушы тәжірибесін барынша арттыру үшін frontend әзірлеуіне келдім","resources":"Бос уақытымда <a href=\\"https://web-standards.ru/\\" >веб-стандарттар</a> тыңдаймын, <a href=\\"https://www.youtube.com/c/Фронтенд/videos\\" > Шри Яндекс дәрістері </a> қараймын, Habr және Medium мақалаларын оқимын. Мені <a href=\\"https://stateofdps.com/en-us/\\">State of CSS</a> және <a href=\\"https://stateofjs.com/en-us/\\">State of JS</a> сауалнамаларының нәтижелері де қызықтырады.","stack":"Менің стекім","tools":"Құралдар және басқалар:","projects":"Жобалар","layout":"Вёрстка","code":"Кодты қарау","live":"Тікелей көру","experienceTitle":"Жұмыс тәжірибесі"},"en":{"title":"Hi, I\'m Dastan","subtitle":"Nice to meet you","aboutMe":"About me","me":"Frontend-developer from Almaty (Kazakhstan) seeking self-development and professional growth","interface":"Came to frontend development to develop cool interfaces and maximize the user experience","resources":"Listen to <a href=\\"https://web-standards.ru/\\">web standards</a>, watch <a href=\\"https://www.youtube.com/c/Фронтенд/videos \\">lectures from Yandex</a>, read articles on Habr and Medium. Quite interested in the results of The <a href=\\"https://stateofdps.com/en-us /\\">State of CSS</a> and <a href=\\"https://stateofjs.com/en-us /\\">State of JS</a> surveys.","stack":"My stack","tools":"Tools and other:","projects":"Projects","layout":"Layout","code":"See the code","live":"See in live","experienceTitle":"Work experience"},"ru":{"title":"Привет, я Дастан!","subtitle":"Будем знакомы","aboutMe":"Обо мне","me":"Frontend-разработчик из Алматы (Казахстан), который ищет развития и профессионального роста","interface":"Пришёл во frontend-разработку, чтобы разрабатывать крутые интерфейсы и максимально улучшать пользовательский опыт","resources":"Слушаю <a href=\\"https://web-standards.ru/\\">веб-стандарты</a>, смотрю <a href=\\"https://www.youtube.com/c/Фронтенд/videos\\">лекции ШРИ Яндекса</a>, читаю статьи на Habr и Medium. Очень интересны результаты опросов <a href=\\"https://stateofcss.com/en-us/\\">State of CSS</a> и <a href=\\"https://stateofjs.com/en-us/\\">State of JS</a>.","stack":"Мой стек","tools":"Инструменты и прочее:","projects":"Проекты","layout":"Вёрстка","code":"Посмотреть код","live":"Посмотреть вживую","experienceTitle":"Опыт работы"}}');var T=[{img:a.p+"assets/images/technodom.jpg",title:{ru:"Веб-разработчик",en:"Web Developer",kk:"Веб-әзірлеуші"},companyName:"Technodom",timeRange:["2021-09-13T23:59:59","present"],location:{ru:"Алматы, Казахстан",en:"Almaty, Kazakhstan",kk:"Алматы, Қазақстан"},responsibilities:{list:{ru:["- Вёрстка виртуальных витрин товаров и лендингов под масштабные акции;","- Рефакторинг и переписывание старого кода;","- Оптимизация JavaScript-кода;","- Работа с внутренним API при создании проектов, связанными с товарами."],en:["- Made layouts of virtual showcases of goods and landing pages for large-scale promotions using HTML 5, CSS 3 and JavaScript;","- Optimized JavaScript code;","- Refactored and rewrote legacy code; - Worked with internal API when creating projects related to goods."],kk:["- Тауарлардың виртуалды витриналарының орналасуы және кең ауқымды акцияларға арналған сайттардың әзірлеу;","- Ескі кодты рефакторинг және қайта жазу;","- JavaScript кодын оңтайландыру;","- Тауарларға қатысты жобаларды жасау кезінде ішкі API-мен жұмыс істеу."]}},achievements:{title:{ru:"Достижения",en:"Achievements",kk:"Жетістіктер"},list:{ru:["- Создал автоматическую и динамическую загрузку категорий продуктов, которая помогла менеджерам и разработчикам избежать избыточной работы и лишней коммуникации;","- Создал простые в интеграции и переиспользуемые компоненты пользовательского интерфейса для дальнейшего использования разработчиками;","- Внёс свой вклад в разработку базу знаний команды, которая помогла новым разработчикам быстрее погрузиться в рабочий процесс;","- Разработал семантические и доступные шаблоны страниц для избежания ненужного написания кода снова и снова;"],en:["- Created automatic and dynamic loading of product categories which helped managers and developers avoid redundant work;","- Created easy-to-integrate and reusable UI-components for further usage by developers","- Contributed to the development of team knowledge base which helped new developers to dive faster into workflow;","- Developed semantic and accessible page templates to reduce the amount of teammates' unnecessary coding;"],kk:["Тауар санаттарының автоматты және динамикалық жүктелуі жасалдым, бұл менеджерлер мен әзірлеушілерге артық жұмыс пен қажетсіз байланысты болдырмауға көмектесті;","- Әзірлеушілер одан әрі пайдалану үшін оңай біріктірілетін және қайта пайдалануға болатын UI құрамдастары жасалдым;","- Жаңа әзірлеушілерге жұмыс процесіне тезірек енуге көмектесетін команданың білім базасын дамытуға үлес қосты;","- Қайта-қайта қажетсіз кодтауды болдырмау үшін семантикалық және қол жетімді бет үлгілерді жасалдым;"]}},techStack:{title:{ru:"Стек технологий",en:"Technologies Stack",kk:"Технологиялық стек"},list:["• HTML5","• CSS 3","• SCSS","• JavaScript","• React"]},tools:{title:{ru:"Инструменты",en:"Tools",kk:"Құралдар"},list:["• Webpack;","• Visual Studio Code;","• Webstorm;","• Figma;","• Vite;","• Parcel."]}},{img:a.p+"assets/images/zoomia.jpg",title:{ru:"Веб-разработчик",en:"Web Developer",kk:"Веб-әзірлеуші"},companyName:"Zoomia Inc.",timeRange:["2021-07-13T23:59:59","2021-08-13T23:59:59"],location:{ru:"Алматы, Казахстан",en:"Almaty, Kazakhstan",kk:"Алматы, Қазақстан"},responsibilities:{list:{ru:["- Создание посадочных страниц (landing pages) для продвижения модулей CRM-системы;","- Оптимизация скорости загрузки и кода существовавших сайтов;","- Частично занимался веб-дизайном для одностраничных лендингов."],en:["- Created landing pages for the promotion of CRM system modules;","- Optimized the download speed and code of existing websites;","- Partially made web design for single-page landing pages."],kk:["- CRM-жүйесінің модульдерін жарнамалау үшін лендингтерді жасау; - Жүктеу жылдамдығын және бар сайттардың кодын оңтайландыру","- Бір беттік лендингтерге арналған веб-дизайнмен ішінара айналыстым."]}},achievements:{title:{ru:"Достижения",en:"Achievements",kk:"Жетістіктер"},list:{}},techStack:{title:{ru:"Стек технологий",en:"Technologies Stack",kk:"Технологиялық стек"},list:["• HTML5","• CSS 3","• SCSS","• JavaScript"]},tools:{title:{ru:"Инструменты",en:"Tools",kk:"Құралдар"},list:["• Gulp 4;","• Figma."]}}];function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var y=function(e,t){var a,n,s,i=(s=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,s,i=[],o=!0,r=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){r=!0,s=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw s}}return i}}(n,s)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?v(e,t):void 0}}(n,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],r=i[1],c=[{ru:"Январь",en:"January",kk:"Қаңтар"},{ru:"Февраль",en:"February",kk:"Ақпан"},{ru:"Март",en:"March",kk:"Наурыз "},{ru:"Апрель",en:"April",kk:"Сәуір "},{ru:"Май",en:"May",kk:"Мамыр  "},{ru:"Июнь",en:"June",kk:"Маусым "},{ru:"Июль",en:"Jule",kk:"Шілде "},{ru:"Август",en:"August",kk:"Тамыз "},{ru:"Сентябрь",en:"September",kk:"Қыркүйек "},{ru:"Октябрь",en:"October",kk:"Қазан"},{ru:"Ноябрь",en:"November",kk:"Қараша"},{ru:"Декабрь",en:"December",kk:"Желтоқсан"}];switch(t){case"ru":a="по настоящее время";break;case"en":a="Present";break;case"kk":a="Қазіргі уақытқа дейін"}var l=new Date(o).getFullYear(),u="present"!==r&&new Date(r).getFullYear(),d=c.find((function(e){return c.indexOf(e)===new Date(o).getMonth()})),k="present"!==r&&c.find((function(e){return c.indexOf(e)===new Date(r).getMonth()}));return"present"!==r?"".concat(d[t].slice(0,3)," ").concat(l," - ").concat(k[t].slice(0,3)," ").concat(u," - ").concat(function(e,t,a){var n,s=new Date(e),i=new Date(t),o={years:{ru:["год","года"],en:["year","years"],kk:["жыл","жыл"]},months:{ru:["месяц","месяца","месяцев"],en:["month","months"],kk:["ай","айлар","ай"]}};n=12*(i.getFullYear()-s.getFullYear()),n-=s.getMonth(),n+=i.getMonth();var r=Math.floor(n/12),c=o.years[a][r>1&&r<=4?1:0],l=n%12==1?o.months[a][0]:o.months[a][n>1&&n<=4?1:2];return n>12?"".concat(r," ").concat(c," ").concat(n-12," ").concat(l):n<=0?"":"".concat(n," ").concat(l)}(o,r,t)):"".concat(d[t].slice(0,3)," ").concat(l," - ").concat(a)},S=function(){d.innerHTML="",T.forEach((function(e){return d.append(function(e){var t=e.img,a=e.title,n=e.companyName,s=e.timeRange,i=e.location,o=e.responsibilities,r=e.achievements,c=e.techStack,l=e.tools,u=w.selectedLanguage,d="ru"===u,k="en"===u,p="kk"===u,m=Object.keys(r.list).length>0?'\n        <h4 class="job__list-title">'.concat(d&&r.title.ru||k&&r.title.en||p&&r.title.kk,":</h4>\n        ").concat(h("job__responsibilities",d&&r.list.ru||k&&r.list.en||p&&r.list.kk||[]),"\n        "):"",g=document.createElement("div");return g.className="container__item job",g.innerHTML="\n        <img src=".concat(t," alt=").concat(a.ru,'>\n        <div class="job__description">\n            <h3 class="job__title">').concat(d&&a.ru||k&&a.en||p&&a.kk,'</h3>\n            <p class="job__info">').concat(n,' · Full-time</p>\n            <p class="job__term">').concat(y(s,u),'</p>\n            <p class="job__location">').concat(d&&i.ru||k&&i.en||p&&i.kk,"</p>\n            ").concat(h("job__responsibilities",d&&o.list.ru||k&&o.list.en||p&&o.list.kk||[])," \n            ").concat(m,'\n            <h4 class="job__list-title">').concat(d&&c.title.ru||k&&c.title.en||p&&c.title.kk,":</h4>\n            ").concat(h("job__responsibilities",c.list),'\n            <h4 class="job__list-title">').concat(d&&l.title.ru||k&&l.title.en||p&&l.title.kk,":</h4>\n            ").concat(h("job__responsibilities",l.list),"\n        </div>\n    "),g}(e))}))},w={selectedLanguage:"ru",selectedTab:"layout",ru:{flag:m},kk:{flag:g},en:{flag:b}};function x(e){u.innerHTML="",n[e].forEach((function(e){return u.append(function(e){var t,a=e.ruTitle,n=e.enTitle,s=e.kkTitle,i=e.ruText,o=e.enText,r=e.kkText,c=e.ruFeatures,l=e.enFeatures,u=e.kkFeatures,d=e.image,m=e.link,g=e.githubLink,b=e.stack,f=w.selectedLanguage,T="ru"===f,v="en"===f,y="kk"===f,S=document.createElement("article"),x=""!==g?" <a href=".concat(g,' class="card__link" target="_blank" rel="noopener noreferrer">\n                <img width="24" height="24" src=').concat(k,' alt="">\n                <span data-localization-key="code" class="card__link-caption">').concat((T?"Посмотреть код":v&&"See the code")||y&&"Кодты қарау","</span>\n            </a>"):"";return S.className="card",S.innerHTML='\n    <figure class="card__image-container">\n        <img draggable="false" src='.concat(d,' alt="" class="card__image">\n    </figure>\n    <div class="card__info">\n        <h3 class="card__title">').concat(T&&a||v&&n||y&&s,'</h3>\n        <p class="card__description">').concat(T&&i||v&&o||y&&r,"</p>\n        ").concat(h("card__features-list",T&&c||v&&l||y&&u||[])," \n        ").concat((t=b,t.length>0?"\n        <h4 class=\"card__stack-list-title\">Стек:</h4>\n        <ul class='card__stack-list'>\n            ".concat(t.map((function(e){return"<li>".concat(e,"</li>")})).join(""),"\n        </ul>\n    "):""),'\n        <div class="card__links">\n            ').concat(x,"\n            <a href=").concat(m,' class="card__link" target="_blank" rel="noopener noreferrer">\n                <img width="24" height="24" src=').concat(p,' alt="">\n                <span data-localization-key="live" class="card__link-caption">').concat((T?"Посмотреть вживую":v&&"See in live")||y&&"Тікелей көру","</span>\n            </a>\n        </div>\n    </div>\n    "),S}(e))}))}var _=document.querySelector(".tabs"),L=document.querySelector(".tabs__btn");L.classList.add("tabs__btn--active"),x(w.selectedTab),_.addEventListener("click",(function(e){var t=e.target;w.selectedTab=t.closest(".tabs__btn").dataset.type,L&&L.classList.remove("tabs__btn--active"),(L=t.closest(".tabs__btn")).classList.add("tabs__btn--active"),x(w.selectedTab)})),a(9),s.addEventListener("click",(function(e){var t,a=e.target;o.classList.toggle("dropdown__list--active"),i.classList.toggle("dropdown__btn--active"),c.classList.toggle("dropdown__btn-icon--rotated"),a.closest(".dropdown__list-btn")&&(w.selectedLanguage=a.closest(".dropdown__list-btn").dataset.value.toLowerCase(),o.classList.remove("dropdown__list--active"),r.textContent=w.selectedLanguage.toUpperCase(),l.src=w[w.selectedLanguage].flag,c.classList.remove("dropdown__btn-icon--rotated"),t=w.selectedLanguage,document.querySelectorAll("[data-localization-key]").forEach((function(e){var a=e.getAttribute("data-localization-key");e.innerHTML=f[t][a]})),x(w.selectedTab),S())})),S()}()}();