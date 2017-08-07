document.getElementById('nav').addEventListener("click",function (event) {
	var target = event.target;
	
		var s = document.getElementsByClassName('submenu');
		for (var i=0; i < s.length; i++){
			s[i].style.display = flag ? "block" : "none"
			s[i].style.backgroundColor = flag ? "#696969" : "transparent"
			s[i].style.width = flag ? "200px" : "0"
			s[i].style.height = flag ? "100%" : "0"		
		}
		var d = document.getElementsByClassName('menu-item');
		for (var i=0; i < d.length; i++){
			d[i].style.backgroundColor = flag ? "#696969" : "transparent"
		}
		flag = !flag;
	
	console.log(1);
});
var flag = true;