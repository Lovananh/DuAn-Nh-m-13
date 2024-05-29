// Khi trang đã tải xong
document.addEventListener("DOMContentLoaded", function () {
    // Xử lý sự kiện nhấn nút đăng nhập
    const loginButton = document.querySelector('.login-aff a');
    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a

        // Lấy giá trị của email và mật khẩu
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // Kiểm tra xem email và mật khẩu có trống không
        if (email === '' || password === '') {
            alert('Vui lòng nhập email và mật khẩu.');
            return;
        }

        // Nếu không trống, chuyển hướng đến trang index.html
        window.location.href = './index.html';
    });

    // Xử lý sự kiện cuộn lên đầu trang
    const goToTopButton = document.querySelector('.go-to-top');
    goToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});