(function(){
	function* f(prev = null, current = 0, next = 1) { 
	  //if(prev !== null){m=prev-1}else{m=null};
  		yield current;
  		yield *f(prev-1, next, current + next);
	}

	b = f();
	var a = function(){
		document.getElementById("result").append(b.next().value+", ");
	}
	window.a=a;
})();