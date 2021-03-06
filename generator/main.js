// Css Generator

    // Определяем все переменные с которыми будем работать

    const rangeTl = document.getElementById('tlr'), // получем все input
          rangeTr = document.getElementById('trr'),
          rangeBl = document.getElementById('blr'),
          rangeBr = document.getElementById('brr');

    const resultTl = document.getElementById('result-tlr'), // получем все div result
          resultTr = document.getElementById('result-trr'),
          resultBl = document.getElementById('result-blr'),
          resultBr = document.getElementById('result-brr');

    const input = document.querySelectorAll('.input'), // выбираем все input по классу
          cube  = document.getElementById('cube'), // получаем cube
          total  = document.getElementById('totalResult'), // получаем строку ввывода результата
          btn  = document.getElementById('btn'), // получаем кнопку
          btnCopy  = document.getElementById('btnCopy'); // получаем кнопку для копирования кода


    // Функция которая свяжет result с input и передаст данные в cube

    function changeRadius() {
        resultTl.innerHTML = rangeTl.value; // приравнивание input.value к result
        resultTr.innerHTML = rangeTr.value;
        resultBl.innerHTML = rangeBl.value;
        resultBr.innerHTML = rangeBr.value;

        cube.style.borderRadius = rangeTl.value +  'px ' + rangeTr.value +  'px ' + rangeBr.value +  'px ' + rangeBl.value +  'px';
        // добавляем к cube стиль border-radius и в его параметры прокидываем значение из input.value 
    }

    // Вызываем функцию

    for (let node of input) {
        node.addEventListener('input', changeRadius); // изменение любого input приводит к изменению стиля cube
    }
    
    // Выввод результата при нажатии на кнопку

    function totalResult() {
        total.innerHTML = rangeTl.value +  'px ' + rangeTr.value +  'px ' + rangeBr.value +  'px ' + rangeBl.value +  'px';
    }

    btn.addEventListener('click', totalResult);

    
