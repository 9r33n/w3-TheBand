// var navbar = document.getElementsByClassName('navbar')
// var searchMoblieBtn = document.getElementsByClassName('search-moblie-btn')

var navbar = document.getElementById('navbar')
var searchMoblieBtn = document.getElementById('search-mobile-btn')
var navbarHeight = navbar.clientHeight

// Đóng mở moblie menu
searchMoblieBtn.onclick = function() {
    var isClose = navbar.clientHeight === navbarHeight;
    if (isClose) {
        navbar.style.height = 'auto';
    } else {
        // 
        navbar.style.height = null;
    }
}

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('.nav-content li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling &&  this.nextElementSibling.classList.contains('sub-menu');
        
        if (isParentMenu) {
            // bỏ qua sự kiện click (hành vi mặc định)
            event.preventDefault();
        } else {
            navbar.style.height = null;
        }
    }
}