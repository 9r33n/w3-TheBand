const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

// Thêm class open vào modal khi click vào nút mua vé
function showBuyTickets() {
    modal.classList.add('open')
}

// Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

// Nghe hành vi click vào nút đóng modal
modalClose.addEventListener('click', function() {
    // Xoá class open ra khỏi modal khi click nút đóng
    modal.classList.remove('open')
})

modal.addEventListener('click', function() {
    modal.classList.remove('open')
})

modalContainer.addEventListener('click', function(event) {
    
    event.stopPropagation()
})