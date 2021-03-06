// Slider

    // Объявляем переменные

    const prev = document.getElementById('btn-prev'),
          next = document.getElementById('btn-next'),
          slides = document.querySelectorAll('.slide'),
          dots = document.querySelectorAll('.dot');

    let   index = 0; // помагает отслеживать теущий активный слайд
    
    // Функция переключения слайдов

    function activeSlide(n) { // n это номер слайда который будет становиться активным
        for (let slide of slides) {
            slide.classList.remove('active'); // убираем active у всех слайдов
        }
        slides[n].classList.add('active'); // добавляем active к текущему слайду
    }

    function activeDot(n) { // n это номер кружочка который будет становиться активным
        for (let dot of dots) {
            dot.classList.remove('active'); // убираем active у всех dots
        }
        dots[n].classList.add('active'); // добавляем active к текущему dot
    }

    function prepareCurrentSlide(ind) { // эта функция служит для вызова 2 функций activeSlide,activeDot при переключении слайдов
        activeSlide(ind); // мы поменяли index и вызываем функцию activeSlide
        activeDot(ind); // мы поменяли index и вызываем функцию activeDot
    }

    function nextSlide() {
        if (index == slides.length - 1) { // провекрка на то чо мы дошли к последнему слайду
            index = 0; // если наш слайд последний то переходим к первому сайту
            prepareCurrentSlide(index); // Вызываем 2 функции и передаем им параметр index
        } else {
            index++; // если не последний то увеличиваем на 1 и переходим к новому сайту
            prepareCurrentSlide(index); // Вызываем 2 функции и передаем им параметр index
        }
    }

    function prevSlide() {
        if (index == 0) {
            index = slides.length - 1;
            prepareCurrentSlide(index); // Вызываем 2 функции и передаем им параметр index
        } else {
            index--;
            prepareCurrentSlide(index); // Вызываем 2 функции и передаем им параметр index
        }
    }

    dots.forEach((item, indexDot) => {
        item.addEventListener('click', () => {
            index = indexDot;
            prepareCurrentSlide(index); // Вызываем 2 функции и передаем им параметр index
        })
    })

    next.addEventListener('click',nextSlide); // при клике на кнопку вызываем функцию nextSlide
    prev.addEventListener('click',prevSlide); // при клике на кнопку вызываем функцию prevSlide

    // Автоматическое переключение слайдов
    setInterval(nextSlide, 2500); // вызываем браузерную функцию и первый параметр это функция которую нужно выполнить, а второй параметр это время переключения, так например 2500 милисекунд, это 2.5 секунды
    