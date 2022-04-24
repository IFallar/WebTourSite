document.getElementById('about_webtour').addEventListener('click', function() {
	document.querySelector('#overdiv').style.marginLeft = '0%';
    document.querySelector('#about_webtour').style.backgroundColor = 'rgb(9, 11, 44)';
    document.querySelector('#about_webtour').style.color = 'whitesmoke';
    document.querySelector('#who').style.backgroundColor = 'whitesmoke';
    document.querySelector('#who').style.color = '#19171d';


});

document.getElementById('who').addEventListener('click', function() {
	document.querySelector('#overdiv').style.marginLeft = '-100%';
    document.querySelector('#who').style.backgroundColor = 'rgb(9, 11, 44)';
    document.querySelector('#who').style.color = 'whitesmoke';
    document.querySelector('#about_webtour').style.backgroundColor = 'whitesmoke';
    document.querySelector('#about_webtour').style.color = '#19171d';
});