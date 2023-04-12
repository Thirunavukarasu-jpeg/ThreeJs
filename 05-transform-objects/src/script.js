import * as THREE from 'three';

// Creating a scene
const scene = new THREE.Scene();

const group = new THREE.Group();
scene.add(group);
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({
    color:'red',
}));
group.add(cube1);
cube1.position.x = -2
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({
    color:'green',
}));
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({
    color:'blue',
}));
group.add(cube3);
group.position.y = 1;
group.rotation.y = 2;
group.scale.y = 1.5;
cube3.position.x = 2

// Position
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// mesh.position.set(0.7,-0.6,1)

// mesh.scale.set(2,0.25,0.5);

// mesh.rotation.reorder('YXZ');
// mesh.rotation.x = 2;
// mesh.rotation.y = Math.PI * 0.25;
// Creating a camera
const sizes = {
    width:800,
    height:600,
}
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height);

// Moving the camera back by 3 units to see the mesh
camera.position.z = 3;

scene.add(camera)

// Axes Helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Creating a renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene, camera);
