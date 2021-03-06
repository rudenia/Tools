// Tabs

    // Объявляем переменные

    var tabs    = document.getElementById('tabs'),
        content = document.querySelectorAll('.content');

    // Функция переключения

    function changeClass(el) {
        for (var i = 0; i < tabs.children.length; i++) {
            tabs.children[i].classList.remove('active'); // перебрали всех детей tabs            
        }
        el.classList.add('active');
    }

    // Вызывваем саму функцию

    tabs.addEventListener('click',function(e) {
        var currTab = event.target.dataset.btn; // добавляем значение dataset (data-btn)
        changeClass(event.target);
        for (var i = 0; i < content.length; i++) {
            content[i].classList.remove('active');
            if (content[i].dataset.content === currTab) {
                content[i].classList.add('active');
            }
        }
    })
