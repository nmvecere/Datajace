function pageSetup() {
    console.log('Page setup.');
}

function changePage(page) {
	location.href = page;
}

// Switchery test
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

elems.forEach(function(html) {
  var switchery = new Switchery(html, {color: '#41b7f1'});
});