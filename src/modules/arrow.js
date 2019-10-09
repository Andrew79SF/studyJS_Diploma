function arrow() {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	  anchor.addEventListener('click', function (e) {
			console.log(e.target);
			if (e.target.closest('a').getAttribute('href').length < 2) {
				return;
			}
	    e.preventDefault();

	    document.querySelector(this.getAttribute('href')).scrollIntoView({
	      behavior: 'smooth'
	    });
	  });
	});
	
	const elem = document.getElementById('totop');

	getCoords(elem);


	function getCoords(elem) { // кроме IE8-
	  var box = elem.getBoundingClientRect();
		console.log(box.top);
		console.log(pageYOffset);
	  // return {
	    const top = box.top + box.pageYOffset;
			const left = box.left + box.pageXOffset;
			
			console.log(top, left);
	  // };

	}
}

export default arrow;