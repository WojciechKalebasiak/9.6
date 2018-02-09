
var list = document.getElementById('list'),
	button = document.getElementById('addElem');
function addListItem () {
 var element = document.createElement('li');
 list.appendChild(element);
 element.innerHTML="item " + (list.getElementsByTagName('li').length-1);
}
button.addEventListener('click',addListItem);
