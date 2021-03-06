// Css Generator

    // Определяем все переменные с которыми будем работать

    const accordions = document.querySelectorAll('.accordion-item');

    for (item of accordions) {
        item.addEventListener('click', function () {
            if (this.classList.contains('active')) { // удаляем active при нажатии у выбраного нажатого item
                this.classList.remove('active');
            } else {
                for (el of accordions) {
                    el.classList.remove('active'); // удаляем active у всех остальных item
                }
                this.classList.add('active'); // добавляем active при нажатии на item
            }
        })
    }