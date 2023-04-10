var container = document.querySelector('#container');
var panorama1 = new PANOLENS.ImagePanorama('img/1.jpeg');
var panorama2 = new PANOLENS.ImagePanorama('img/2.jpeg');
var panorama3 = new PANOLENS.ImagePanorama('img/3.jpeg');
var panorama4 = new PANOLENS.ImagePanorama('img/4.jpeg');
var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama1, panorama2, panorama3, panorama4);

var bar = document.querySelector('#bar');

function onProgressUpdate(event) {
    var percentage = event.progress.loaded / event.progress.total * 100;
    bar.style.width = percentage + "%";
    if (percentage >= 100) {
        bar.classList.add('hide');
        setTimeout(function() {
            bar.style.width = 0;
        }, 1000);
    }
}

var textureLoader = new THREE.TextureLoader();
var customInfospot = textureLoader.load('img/1.jpeg', function() {
    var infospot = new PANOLENS.Infospot(500, 'img/infospot.png');
    infospot.position.set(0, -2000, -5000);
    infospot.addEventListener('click', function() {
        bar.classList.remove('hide');
        viewer.setPanorama(panorama2);
    });
    panorama1.add(infospot);
});

var textureLoader2 = new THREE.TextureLoader();
var customInfospot2 = textureLoader.load('img/2.jpeg', function() {
    var infospot = new PANOLENS.Infospot(500, 'img/infospot.png');
    infospot.position.set(0, -2000, -5000);
    infospot.addEventListener('click', function() {
        bar.classList.remove('hide');
        viewer.setPanorama(panorama3);
    });
    panorama2.add(infospot);
});

var textureLoader3 = new THREE.TextureLoader();
var customInfospot3 = textureLoader.load('img/3.jpeg', function() {
    var infospot = new PANOLENS.Infospot(500, 'img/infospot.png');
    infospot.position.set(0, -2000, -5000);
    infospot.addEventListener('click', function() {
        bar.classList.remove('hide');
        viewer.setPanorama(panorama4);
    });
    panorama3.add(infospot);
});

var textureLoader4 = new THREE.TextureLoader();
var customInfospot4 = textureLoader.load('img/4.jpeg', function() {
    var infospot = new PANOLENS.Infospot(500, 'img/infospot.png');
    infospot.position.set(0, -2000, -5000);
    infospot.addEventListener('click', function() {
        bar.classList.remove('hide');
        viewer.setPanorama(panorama1);
    });
    panorama4.add(infospot);
});

panorama1.addEventListener('progress', onProgressUpdate);
panorama2.addEventListener('progress', onProgressUpdate);
panorama3.addEventListener('progress', onProgressUpdate);
panorama4.addEventListener('progress', onProgressUpdate);