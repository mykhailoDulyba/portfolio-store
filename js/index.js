const cart = new Cart($('#cartModal'));
const productList = new ProductList('products.json', $('.products-container'), cart);

(function() {

    document.getElementById("burger-menu")
        .addEventListener('click', clickBurger);
    function clickBurger(el) {
        const nav = document.getElementById("nav");
        nav.classList.toggle('menu-active');
    }
   
    window.onscroll = function() { stickyMenu() };
    function stickyMenu() {
        const menu = document.getElementById('menu');
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            menu.classList.add('stick');
        }
        else {
            menu.classList.remove('stick');
        }
    }

    document.getElementById("skills").onmouseover = function() { activeSkills() };
    function activeSkills() {
        const htmlSkill = document.getElementById('htmlSkill');
        const cssSkill = document.getElementById('cssSkill');
        const jsSkill = document.getElementById('jsSkill');
        const javaSkill = document.getElementById('javaSkill');
        htmlSkill.classList.remove('html');
        htmlSkill.classList.add('actionHtml');
        cssSkill.classList.remove('css');
        cssSkill.classList.add('actionCss');
        jsSkill.classList.remove('js');
        jsSkill.classList.add('actionJs');
        javaSkill.classList.remove('java');
        javaSkill.classList.add('actionJava');
    }
})();



    
    
    
