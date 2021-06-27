const menuIcon = document.querySelector("#menu-icon");
const links = document.querySelectorAll('.link-text');
const sidebar = document.querySelector('.layout-sidebar');
const headerTitle = document.querySelector('.sidebar__header__title');
const headerTitleMenu = document.querySelector('.navigation__categorias_title');
const linkItems = document.querySelectorAll('.sidebar li a');

function showSidebar(){
    links.forEach(link=>link.classList.toggle('is-text-contracted'));
    sidebar.classList.toggle('is-layout-contracted');
    headerTitle.classList.toggle('is-headers-contracted');
    headerTitleMenu.classList.toggle('is-title-hidden');
}

function activeItem(){
    linkItems.forEach(item=>item.classList.remove('is-active'));
    this.classList.add('is-active');
}

menuIcon.addEventListener("click",showSidebar);
linkItems.forEach(item => item.addEventListener("click",activeItem))