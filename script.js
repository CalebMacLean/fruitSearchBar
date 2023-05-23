const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	// Creating a variable that will make the value of input case insensitive
	const inputVal = input.value.toLowerCase();
	// Creating a result array that will contain all the fruit that include the input value
	const results = fruit.filter((element) => {
		// This variable makes the function case insensitive
		let lowerCaseEl = element.toLowerCase();
		// Logic for filtering fruit array based on elements containing input value
		if(lowerCaseEl.includes(inputVal)) {
			return true;
		} else {
			return false;
		}
	});
	
	return results;
};

function clearDiv() {
	while(suggestions.firstChild) {
		suggestions.removeChild(suggestions.firstChild);
	}
};

function searchHandler(e) {
	// creating an array using the search function and using set to avoid duplicates as a precaution
	const filteredArr = [...new Set(search())].splice(0,7);
	// Going to clear the suggestions div each time and replace it with new results
	clearDiv();
	// Populating suggestions div with elements in filterdArr
	for(let fruit of filteredArr) {
		let newLi = document.createElement('li');
		newLi.innerText = fruit;
		suggestions.append(newLi);
	};
	// Clearing Suggestions if you have nothing in the input field
	if(input.value === '') {
		clearDiv();
	}
}

function highlightSuggestions(e) {
	const eOrigin = e.target;
	
	
	if(eOrigin.tagName === 'LI') {
		eOrigin.style.backgroundColor = 'orangered';
	}
};

function removeHighlight(e) {
	const eOrigin = e.target;
	
	
	if(eOrigin.tagName === 'LI') {
		eOrigin.style.backgroundColor = 'transparent';
	}
};

function useSuggestion(e) {
	const eOrigin = e.target;
	
	if(eOrigin.tagName === 'LI') {
		input.value = eOrigin.innerText;
	}
};

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('mouseover', highlightSuggestions);
suggestions.addEventListener('mouseout', removeHighlight);
suggestions.addEventListener('click', useSuggestion);