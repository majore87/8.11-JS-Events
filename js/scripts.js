function checkOnclickEvent(param) {
	console.log(param);
}

var buttonElem = document.getElementById('addElem');

var itemLength = 0;

buttonElem.addEventListener('click', function(e) {

	var unorderedList = document.getElementById('list');
	var newElem = document.createElement('li');

	itemLength ++;
	newElem.innerHTML += '<li>item ' + itemLength + ' </li>';

	unorderedList.appendChild(newElem);

	checkOnclickEvent("Item added!");
});

