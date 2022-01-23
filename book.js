

const section = document.querySelector("section.book");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.9, 1000);

const renderer = new THREE.WebGLRenderer({
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
section.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0x888888); // soft white light
scene.add(light);

// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 0, 3);
scene.add(directionalLight);

const loader = new THREE.TextureLoader();

const urls = [
  "./Snacks/Asset 15.png",
  "./Snacks/Asset 16.png",
  "./Snacks/Asset 8.png",
  "./Snacks/Asset 2.png",
  "./Snacks/Asset 5.png",
  "./Snacks/Asset 6.png",
];

const materials = urls.map(url => {
  return new THREE.MeshLambertMaterial({
    map: loader.load(url)
  })
})

const geometry = new THREE.BoxGeometry(4.0, 5.5, 2.6);

// const cube1 = new THREE.Mesh(geometry, materials);
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);
// scene.add(cube1);

camera.position.z = 18;
camera.position.y = 1.0;
camera.position.x = 1.0;



let currentTimeline = window.pageYOffset / 3000;
let aimTimeline = window.pageYOffset / 3000;

function onWindowResize() {

				const canvasWidth = window.innerWidth;
				const canvasHeight = window.innerHeight;

				renderer.setSize( canvasWidth, canvasHeight );

				camera.aspect = canvasWidth / canvasHeight;
				camera.updateProjectionMatrix();

				render();

			}

function animate() {



  requestAnimationFrame(animate);
  //   cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;

  currentTimeline += (aimTimeline - currentTimeline) * 0.1;


  const rx = currentTimeline * 0.5 + 0.5 ;
  const ry = (currentTimeline * 0.9 + 0.1) * Math.PI * 30;

  cube.rotation.set(rx, ry, 0);
  // cube1.rotation.set(ry, rx, 0);

  renderer.render(scene, camera);
}
animate();

window.addEventListener("scroll", function() {
  aimTimeline = window.pageYOffset / 3000;
})

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}