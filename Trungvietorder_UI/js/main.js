// search features
var searchTab = document.querySelector('.search-tab');
var searchTrackingTab = document.querySelector('.search-tracking-tab');
var searchLinkLeft = document.querySelector('.search-link-left');
var searchLinkRight = document.querySelector('.search-link-right');

searchLinkLeft.onclick = function () {
  searchLinkLeft.classList.add('current');
  searchLinkRight.classList.remove('current');
  searchTab.style.display = 'flex';
  searchTrackingTab.style.display = 'none';
};

searchLinkRight.onclick = function () {
  searchLinkRight.classList.add('current');
  searchLinkLeft.classList.remove('current');
  searchTrackingTab.style.display = 'block';
  searchTab.style.display = 'none';
};

var selectForm = document.querySelector('.search-form');
var searchListSelect = document.querySelector('.search-list-selection');
console.log(searchListSelect);
selectForm.onclick = function (e) {
  if (searchListSelect.style.display === 'none') {
    searchListSelect.style.display = 'block';
  }
  searchListSelect.style.display = 'none';
};

// register event
var itemSelected = document.querySelectorAll('.register-item p');
var wrapContentItem = document.querySelector('.register-wrap-content');
var registerTitle = document.querySelector('.register-title');
var registerDesc = document.querySelector('.register-desc');

for (var i = 0; i < itemSelected.length; i++) {
  // onmousedown
  itemSelected[i].onmousedown = (e) => {
    for (var j = 0; j < itemSelected.length; j++) {
      wrapContentItem.classList.remove('selected');
      itemSelected[j].style.color = '#ffffff';
    }
  };
  // onmouseup
  itemSelected[i].onmouseup = (e) => {
    e.target.style.color = '#d81324';
    wrapContentItem.classList.add('selected');
    switch (e.target.innerHTML) {
      case 'ĐĂNG KÝ TÀI KHOẢN':
        registerTitle.textContent = 'ĐĂNG KÝ TÀI KHOẢN';
        registerDesc.textContent =
          'Nhập các thông tin cá nhân bắt buộc vào ô, lưu ý nhập chính xác các thông tin để đảm bảo cho việc quản lí đơn hàng và nhận hàng của bạn.';
        break;
      case 'CÀI ĐẶT CÔNG CỤ':
        registerTitle.textContent = 'CÀI ĐẶT CÔNG CỤ';
        registerDesc.textContent =
          'Click vào cài đặt công cụ đặt hàng của Trung Việt Order. Công cụ hỗ trợ đặt hàng các website taobao, tmall, 1688.';
        break;
      case 'CHỌN &amp; THÊM VÀO GIỎ HÀNG':
        registerTitle.textContent = 'CHỌN & THÊM VÀO GIỎ HÀNG';
        registerDesc.textContent =
          'Truy cập vào các trang mua sắm Taobao.com, Tmall.com, 1688.com … chọn hàng và thêm hàng vào giỏ.';
        break;
      case 'GỬI ĐƠN ĐẶT HÀNG':
        registerTitle.textContent = 'GỬI ĐƠN ĐẶT HÀNG';
        registerDesc.textContent =
          'Quay lại website Trung Việt Order và kiểm tra giỏ hàng Click vào “Gửi đơn hàng” để tạo đơn hàng,chờ xác nhận đặt hàng thành công.';
        break;
      case 'ĐẶT CỌC ĐƠN HÀNG':
        registerTitle.textContent = 'ĐẶT CỌC ĐƠN HÀNG';
        registerDesc.textContent =
          'Kiểm tra đơn hàng và đặt cọc tiền hàng qua hình thức chuyển khoản hoặc trực tiếp tại các văn phòng giao dịch gần nhất của Trung Việt Order.';
        break;
      case 'NHẬN HÀNG &amp; THANH TOÁN':
        registerTitle.textContent = 'NHẬN HÀNG & THANH TOÁN';
        registerDesc.textContent =
          'Quý khách nhận được thông báo hàng về Việt Nam. Quý khách thanh toán số tiền còn thiếu qua hình thức chuyển khoản hoặc trực tiếp. Sau khi thanh toán quý khách hàng có thể yêu cầu ship hàng hoặc trực tiếp nhận hàng tại kho của Trung Việt Order.';
    }
  };
}

// event
var searchListSelection = document.querySelector('.search-form');
var searchItemSelection = document.querySelector('.search-list-selection');
var searchWrap = document.querySelector('.search-list');

searchListSelection.onclick = function () {
  searchItemSelection.style.display = 'block';
};

var itemSelected = document.querySelectorAll('.search-list li span');
var wrapContentItem = document.querySelector('.search-filter');
var searchImg = document.querySelector('.search-filter li img');
var searchTitle = document.querySelector('.search-filter li span');

for (var i = 0; i < itemSelected.length; i++) {
  // onmousedown
  itemSelected[i].onmousedown = (e) => {
    for (var j = 0; j < itemSelected.length; j++) {
      wrapContentItem.classList.remove('selection');
    }
  };
  // onmouseup
  itemSelected[i].onmouseup = (e) => {
    wrapContentItem.classList.add('selection');
    switch (e.target.innerHTML) {
      case 'Taobao':
        searchImg.src = '../images/taobao.png';
        searchTitle.textContent = 'Taobao';
        searchWrap.style.display = 'none';
        break;
      case 'Tmall':
        searchImg.src = '../images/tmall.png';
        searchTitle.textContent = 'Tmall';
        searchWrap.style.display = 'none';
        break;
      case '1668':
        searchImg.src = '../images/1668.png';
        searchTitle.textContent = '1668';
        searchWrap.style.display = 'none';
        break;
    }
  };
}

var menuItem = document.querySelector('.header-menu');
var mobileMenu = document.querySelector('.header-icon');
var items = document.querySelector('.header-menu-nav');

mobileMenu.onclick = function (e) {
  menuItem.style.left = '0%';
  Object.assign(mobileMenu.querySelector('.header-icon-top').style, {
    transform: 'rotatez(45deg)',
    top: '33%',
  });
  mobileMenu.querySelector('.header-icon-center').style.width = '0%';
  Object.assign(mobileMenu.querySelector('.header-icon-bottom').style, {
    transform: 'rotatez(-45deg)',
    top: '33%',
  });
};
menuItem.onclick = function (e) {
  menuItem.style.left = '-100%';
  Object.assign(mobileMenu.querySelector('.header-icon-top').style, {
    transform: 'rotatez(0deg)',
    top: '0',
  });
  mobileMenu.querySelector('.header-icon-center').style.width = '100%';
  Object.assign(mobileMenu.querySelector('.header-icon-bottom').style, {
    transform: 'rotatez(0deg)',
    bottom: '0',
    top: 'auto',
  });
};

items.onclick = function (e) {
  e.stopPropagation();
};
