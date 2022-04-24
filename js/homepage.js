document.getElementById('cavite_poly').addEventListener('click', function() {
	document.querySelector('#cavite_bg').style.display = 'block';
	document.querySelector('#laguna_bg').style.display = 'none';
    document.querySelector('#batangas_bg').style.display = 'none';
    document.querySelector('#rizal_bg').style.display = 'none';
    document.querySelector('#quezon_bg').style.display = 'none';

    document.querySelector('#default_info').style.display = 'none';
    document.querySelector('#cavite_info').style.display = 'block';
	document.querySelector('#laguna_info').style.display = 'none';
    document.querySelector('#batangas_info').style.display = 'none';
    document.querySelector('#rizal_info').style.display = 'none';
    document.querySelector('#quezon_info').style.display = 'none';

    document.querySelector('#cavite_map').style.opacity = 1;
    document.querySelector('#laguna_map').style.opacity = null;
    document.querySelector('#batangas_map').style.opacity = null;
    document.querySelector('#rizal_map').style.opacity = null;
    document.querySelector('#quezon_map').style.opacity = null;
});

document.getElementById('laguna_poly').addEventListener('click', function() {
    document.querySelector('#cavite_bg').style.display = 'none';
    document.querySelector('#laguna_bg').style.display = 'block';
    document.querySelector('#batangas_bg').style.display = 'none';
    document.querySelector('#rizal_bg').style.display = 'none';
    document.querySelector('#quezon_bg').style.display = 'none';

    document.querySelector('#default_info').style.display = 'none';
    document.querySelector('#cavite_info').style.display = 'none';
	document.querySelector('#laguna_info').style.display = 'block';
    document.querySelector('#batangas_info').style.display = 'none';
    document.querySelector('#rizal_info').style.display = 'none';
    document.querySelector('#quezon_info').style.display = 'none';

    document.querySelector('#cavite_map').style.opacity = null;
    document.querySelector('#laguna_map').style.opacity = 1;
    document.querySelector('#batangas_map').style.opacity = null;
    document.querySelector('#rizal_map').style.opacity = null;
    document.querySelector('#quezon_map').style.opacity = null;
});

document.getElementById('batangas_poly').addEventListener('click', function() {
    document.querySelector('#cavite_bg').style.display = 'none';
    document.querySelector('#laguna_bg').style.display = 'none';
    document.querySelector('#batangas_bg').style.display = 'block';
    document.querySelector('#rizal_bg').style.display = 'none';
    document.querySelector('#quezon_bg').style.display = 'none';

    document.querySelector('#default_info').style.display = 'none';
    document.querySelector('#cavite_info').style.display = 'none';
	document.querySelector('#laguna_info').style.display = 'none';
    document.querySelector('#batangas_info').style.display = 'block';
    document.querySelector('#rizal_info').style.display = 'none';
    document.querySelector('#quezon_info').style.display = 'none';

    document.querySelector('#cavite_map').style.opacity = null;
    document.querySelector('#laguna_map').style.opacity = null;
    document.querySelector('#batangas_map').style.opacity = 1;
    document.querySelector('#rizal_map').style.opacity = null;
    document.querySelector('#quezon_map').style.opacity = null;
});

document.getElementById('rizal_poly').addEventListener('click', function() {
    document.querySelector('#cavite_bg').style.display = 'none';
    document.querySelector('#laguna_bg').style.display = 'none';
    document.querySelector('#batangas_bg').style.display = 'none';
    document.querySelector('#rizal_bg').style.display = 'block';
    document.querySelector('#quezon_bg').style.display = 'none';

    document.querySelector('#default_info').style.display = 'none';
    document.querySelector('#cavite_info').style.display = 'none';
	document.querySelector('#laguna_info').style.display = 'none';
    document.querySelector('#batangas_info').style.display = 'none';
    document.querySelector('#rizal_info').style.display = 'block';
    document.querySelector('#quezon_info').style.display = 'none';

    document.querySelector('#cavite_map').style.opacity = null;
    document.querySelector('#laguna_map').style.opacity = null;
    document.querySelector('#batangas_map').style.opacity = null;
    document.querySelector('#rizal_map').style.opacity = 1;
    document.querySelector('#quezon_map').style.opacity = null;
});

document.getElementById('quezon_poly').addEventListener('click', function() {
    document.querySelector('#cavite_bg').style.display = 'none';
    document.querySelector('#laguna_bg').style.display = 'none';
    document.querySelector('#batangas_bg').style.display = 'none';
    document.querySelector('#rizal_bg').style.display = 'none';
    document.querySelector('#quezon_bg').style.display = 'block';

    document.querySelector('#default_info').style.display = 'none';
    document.querySelector('#cavite_info').style.display = 'none';
	document.querySelector('#laguna_info').style.display = 'none';
    document.querySelector('#batangas_info').style.display = 'none';
    document.querySelector('#rizal_info').style.display = 'none';
    document.querySelector('#quezon_info').style.display = 'block';

    document.querySelector('#cavite_map').style.opacity = null;
    document.querySelector('#laguna_map').style.opacity = null;
    document.querySelector('#batangas_map').style.opacity = null;
    document.querySelector('#rizal_map').style.opacity = null;
    document.querySelector('#quezon_map').style.opacity = 1;
});