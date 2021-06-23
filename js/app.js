const menuIcon = document.querySelector("#menu-icon");
const links = document.querySelectorAll('.link-text');
const sidebar = document.querySelector('.layout-sidebar');
const headers = document.querySelectorAll('.headers');
const linkItems = document.querySelectorAll('.sidebar li a');

function showSidebar(){
    links.forEach(link=>link.classList.toggle('is-text-contracted'));
    sidebar.classList.toggle('is-layout-contracted');
    headers.forEach(header=>header.classList.toggle('is-headers-contracted'))
    
}

function activeItem(){
    linkItems.forEach(item=>item.classList.remove('is-active'));
    this.classList.add('is-active');
}

menuIcon.addEventListener("click",showSidebar);
linkItems.forEach(item => item.addEventListener("click",activeItem))