import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import * as THREE from 'three';

console.log("three loaded");

const [canvas] = document.getElementsByTagName("canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// camera.translateY(-0.5);

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor("#000000");
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const loader = new GLTFLoader();

let globe;

loader.load('globe.glb', function (gltf) {
  console.log("loaded");
  const geometry = gltf.scene.children[0].geometry;

  const wireframeMesh = new THREE.MeshBasicMaterial({
    // color: 0xec833e,
    color: 0xD91A02,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  });

  const mesh = new THREE.Mesh(geometry, wireframeMesh);
  globe = mesh;
  mesh.translateZ(-2);
  mesh.rotateZ(-0.2);

  scene.add(mesh);
});

function animate(){
  requestAnimationFrame(animate);

  globe.rotateY(0.003);

  renderer.render(scene, camera);
}

animate();