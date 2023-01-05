import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, Color} from 'three'
import {Pane} from "tweakpane";
const pane = new Pane()
const PARAMS = {
  speed: 0.01,
  color: '#ff0055'
};
pane.addInput(PARAMS,'speed',{min: 0, max: 0.1, step: 0.01})
pane.addInput(PARAMS,'color')


const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new BoxGeometry( 1, 1, 1 );
const material = new MeshBasicMaterial( { color: PARAMS.color } );
const cube = new Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += PARAMS.speed;
  cube.rotation.y += PARAMS.speed;
  cube.material.color =new Color(PARAMS.color )
  renderer.render( scene, camera );
}

animate();
