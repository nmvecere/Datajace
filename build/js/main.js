function pageSetup() {
	var a=document.getElementsByTagName("a");
	for(var i=0;i<a.length;i++)
	{
		 a[i].onclick=function()
		 {
			  window.location=this.getAttribute("href");
			  return false
		 }
	}
}

function changePage(whichPage) {
	location.href = whichPage;
}