function search(){

	var searchBox = document.getElementById('search-box');

	if(searchBox.value != ''){
		location.href = '/search?q='+searchBox.value;	
	}else {
		alert('Tu búsqueda está viacia.');	
	}
	
}


