import * as THREE from "three";
// Set up a scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const geo2 = new THREE.SphereGeometry();
const mat2 = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(geo2, mat2);
scene.add(sphere);

const geo3 = new THREE.SphereGeometry();
const mat3 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sphere2 = new THREE.Mesh(geo3, mat3);
scene.add(sphere2);

// Camera/Light

const pointLight = new THREE.PointLight(0xffffff, 100);
pointLight.position.set(0, 0, 0);
scene.add(pointLight);

camera.position.z = 20;

let f = 0;

// Create an animation loop
const animate = function () {
  requestAnimationFrame(animate);
  f++;
  let t = f / 200;
  // Rotate the cube
  cube.rotation.z += 0.01;

  // Move the cube
  cube.position.x = 10 * Math.cos(t) + 5 * Math.cos(10 * t);
  cube.position.y = 10 * Math.sin(t) + 5 * Math.sin(10 * t);
  sphere.position.x = 10 * Math.cos(t);
  sphere.position.y = 10 * Math.sin(t);
  // Render the scene
  renderer.render(scene, camera);
};

// Start the animation loop
animate();
