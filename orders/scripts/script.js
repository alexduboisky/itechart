document.addEventListener('DOMContentLoaded', function(){
    let btn = document.querySelector('.order-list-button');
    let list = document.querySelector('.order-list')
    btn.addEventListener('click', function(){
        list.style.top = '0'
    })
})