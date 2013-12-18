    /*В input я беру value при клике на label значение при клике равно от 1 до 5*/
    var zna4=0; /*Если клика не было, то по умолчанию value равен 0*/


    /*Функция, которая срабатывает при наведении на первую звезду*/
    function overOne() {
        if(zna4==0){
            document.body.getElementsByTagName('label')[0].style.backgroundImage = 'url(img/star_act.png)';
            document.getElementById('text').innerText = 'ужасно';

        }
        else{
            window.event.returnValue=false;
        }
    }
    /*-------------------------------Конец----------------------------------------*/

    /*Функция, которая срабатывает при наведении на вторую звезду*/
    function overTwo(){
        if(zna4==0){
            alert(document.activeElement.htmlFor.value);
            document.getElementById('text').innerText = 'плохо';
            var c = document.getElementsByTagName('input')[1].value;
            for(i=0; i<c; i++){
                document.body.getElementsByTagName('label')[i].style.backgroundImage = 'url(img/star_act.png)';
                if(i<(c-1)){
                    document.body.getElementsByTagName('input')[i].checked = true;
                }
            }
        }
        else{
            window.event.returnValue=false;
        }
    }
    /*-------------------------------Конец----------------------------------------*/

    /*Функция, которая срабатывает при наведении на третью звезду*/
    function overThree() {
        if(zna4==0){
            document.getElementById('text').innerText = 'удовлетворительно';
            var c = document.getElementsByTagName('input')[2].value;
            for(i=0; i<c; i++){
                document.body.getElementsByTagName('label')[i].style.backgroundImage = 'url(img/star_act.png)';
                if(i<(c-1)){
                    document.body.getElementsByTagName('input')[i].checked = true;
                }
            }
        }else{
            window.event.returnValue=false;}
    }
    /*-------------------------------Конец----------------------------------------*/


    /*Функция, которая срабатывает при наведении на четвертую звезду*/
    function overFour() {
        if(zna4==0){
            document.getElementById('text').innerText = 'хорошо';
            var c = document.getElementsByTagName('input')[3].value;
            for(i=0; i<c; i++){
                document.body.getElementsByTagName('label')[i].style.backgroundImage = 'url(img/star_act.png)';
                if(i<(c-1)){
                    document.body.getElementsByTagName('input')[i].checked = true;
                }
            }
        }else{
            window.event.returnValue=false;}
    }
    /*-------------------------------Конец----------------------------------------*/


    /*Функция, которая срабатывает при наведении на пятую звезду*/
    function overFive(){
        if(zna4==0){
            document.getElementById('text').innerText = 'отлично';
            var c = document.getElementsByTagName('input')[4].value;
            for(i=0; i<c; i++){
                document.body.getElementsByTagName('label')[i].style.backgroundImage = 'url(img/star_act.png)';
                if(i<(c-1)){
                    document.body.getElementsByTagName('input')[i].checked = true;
                }
            }
        }else{
            window.event.returnValue=false;
        }
    }
    /*-------------------------------Конец----------------------------------------*/


    /*Функция удаления курсора*/
    /*При удалении курсора с области в которой находятся все звезды я возвращаю
     картинку звезд по умолчанию*/
    function deletecursor() {
        if(zna4==0){//Делаю проверку на значение value
            var c = document.body.getElementsByTagName('label').length;
            for(var i=0;i<c;i++){
                document.body.getElementsByTagName('label')[i].style.backgroundImage = 'url(img/star_clean.png)';
                document.body.getElementsByTagName('input')[i].checked = false;
            }
            document.body.bgColor="lavender";
            document.getElementById('text').innerText = 'оценить';
        }

    }
    /*-------------------------------Конец----------------------------------------*/


    /*Тут я пишу кучу функций, которые будут вызываться при клике на звезду*/
    function clickOne() {
        document.body.getElementsByTagName('input')[0].checked = true;
        if(zna4==0){
            window.event.returnValue=false;
            //document.body.getElementsByTagName('label')[0].style.backgroundImage = 'url(img/star_clean.png)';
            // alert("Вы оценили на 20%!");

            zna4 = document.getElementsByTagName('input')[0].value;
            //alert(document.getElementsByTagName('input')[0].value);
            return zna4;
        }else {
            window.event.returnValue=false;
        }
    }
    /*-------------------------------Конец----------------------------------------*/

    function clickTwo() {
        if(zna4==0){
            window.event.returnValue=false;
            document.body.getElementsByTagName('input')[0].checked = true;
            document.body.getElementsByTagName('input')[1].checked = true;


            zna4 = document.getElementsByTagName('input')[1].value;
            //alert(document.getElementsByTagName('input')[1].value);
            return zna4;
        }else {
            window.event.returnValue=false;
        }
    }
    /*-------------------------------Конец----------------------------------------*/

    function clickThree() {
        if(zna4==0){
            window.event.returnValue=false;
            zna4 = document.getElementsByTagName('input')[2].value;
            for(var i=0;i<(zna4-1);i++){
                document.body.getElementsByTagName('input')[i].checked = true;
            }
        }else {
            window.event.returnValue=false;
        }
    }
    /*-------------------------------Конец----------------------------------------*/

    function clickFour() {
        if(zna4==0){
            window.event.returnValue=false;
            zna4 = document.getElementsByTagName('input')[3].value;
            for(var i=0;i<(zna4-1);i++){
             document.body.getElementsByTagName('input')[i].checked = true;
            }
            return zna4;}
        else {
            window.event.returnValue=false;
        }
    }
    /*-------------------------------Конец----------------------------------------*/

    function clickFive() {
        /*Запрещает повторно передавать значение*/
        window.event.returnValue=false;
        if(zna4==0){
            zna4 = document.getElementsByTagName('input')[4].value;

            for(var i=0;i<(zna4-1);i++){
                document.body.getElementsByTagName('input')[i].checked = true;
            }
            //alert(document.getElementsByTagName('input')[4].value);
            return zna4;
        } else {
            window.event.returnValue=false;

        }

    }
    /*-------------------------------Конец----------------------------------------*/
