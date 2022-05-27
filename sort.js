/*------ sorting init start-----------*/
(() => {
    var sort = document.querySelector('.sorting_promotion_box')
    sort.addEventListener('click', sortFunc);
    
    function sortFunc(){
        sort.classList.toggle('sorting_promotion_box_active');
    }; 
})();