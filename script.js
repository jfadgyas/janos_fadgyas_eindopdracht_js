//get dom elements
//get menu class
const menuItems = document.querySelector('.menu');

//get the icon
const icontje = document.querySelector('.icon');

//get radio buttons
const radioItems = document.querySelector('.radio');
const radioButtons = document.getElementsByName('colour');

//click listener function
const isClicked = function(){
    menuItems.addEventListener('click', function(e){
        document.body.style.background = e.target.className;
        document.getElementById('kleurText').innerHTML = e.target.className;
        //set radiobutton active
        for (i=0; i<radioButtons.length; i++){
            if (radioButtons[i].className == e.target.className){
                radioButtons[i].checked = true;
            }
        }
        menuItems.style.top = '-200px';
    });

    radioItems.addEventListener('click', function(e){
        document.body.style.background = e.target.className;
        document.getElementById('kleurText').innerHTML = e.target.className;
    });

    icontje.addEventListener('mouseover', function(){
        menuItems.style.top = '100px';
    });    

    //mouse out function
    //uncomment deze sectie om de menu
    //te verdjiwnen
    /*
    icontje.addEventListener('mouseout', function(){
        menuItems.style.top = '-200px';
    });
    */

    //keypressed listener
    document.addEventListener('keydown', function(e){
        console.log(e);
        switch (e.key){
            case '1': document.body.style.background = 'grey';
            break;
            case '2': document.body.style.background = 'orangered';
            break;
            case '3': document.body.style.background = 'lime';
        }
    });
}

isClicked()