import * as THREE from 'three';

// Creating a scene
const scene = new THREE.Scene();

// Creating a mesh
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({
    color:'cyan',
});
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

// Creating a camera
const sizes = {
    width:800,
    height:600,
}
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height);

// Moving the camera back by 3 units to see the mesh
camera.position.z = 3;

scene.add(camera)

// Creating a renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene, camera);

