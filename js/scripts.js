function checkOnclickEvent(param) {
	console.log(param);
}

var buttonElem = document.getElementById('addElem');

buttonElem.addEventListener('click', function(e) {

	var unorderedList = document.getElementById('list');
	var newElem = document.createElement('li');
	newElem.innerHTML += '<li>item</li>';
	var childrenUl = unorderedList.length;

	unorderedList.appendChild(newElem);

	// var ulByTagName = document.getElementsByTagName('li');
	// var numbersOfUl = ulByTagName.length;
	// console.log(numbersOfUl);

	checkOnclickEvent("Item added!");
});

