// in mobile responsive mode, when hamburger is clicked, dropdown menu shows
document.getElementById ("hamburger").addEventListener ("click", function(){
    var x = document.getElementById('dropDownClick');
    if(x.className === 'navmenu'){
        x.className += " responsive";
    }else{
        x.className = 'navmenu'
    }
});

// change active state of menu items when one is clicked
function clickSingleA(a)
{
    var items = document.querySelectorAll('.single.active');

    if(items.length) 
    {
        items[0].className = 'single';
    }

    a.className = 'single active';
}