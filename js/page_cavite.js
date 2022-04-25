document.getElementById('mapbar').addEventListener('click', function() {
	if(mapbar.style.width == '5%'){
		document.querySelector('#map').style.width = '70%';
    document.querySelector('#mapbar').style.width = '30%';
	}
	else{
		document.querySelector('#map').style.width = '95%';	
    document.querySelector('#mapbar').style.width = '5%';	
	}
});