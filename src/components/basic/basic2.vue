<template>
	<div id="basic2">
		
	</div>
</template>

<script>
export default{
	name:'basic2',
	data(){
		return{
			scene:null,
			camera:null,
			renderer:null,
			plane:null,
			axes:null,
			cube:null,
			sphere:null,
			spotLight:null
		}
	},
	methods:{
		ready(){
			var _this = this;
			this.scene = new t.Scene();
			this.camera = new t.PerspectiveCamera( 45, this.$el.offsetWidth/ this.$el.offsetHeight, 0.1, 1000 );
			this.camera.position.x = -30;
			this.camera.position.y = 40;
			this.camera.position.z = 30;
			this.camera.lookAt( _this.scene.position );
			this.renderer = new t.WebGLRenderer();
			this.renderer.setSize( this.$el.offsetWidth, this.$el.offsetHeight-5 );
		},
		drawAxes(){
			this.axes = new t.AxesHelper(20);
			this.scene.add(this.axes);
		},
		drawPlane(){
			var planeGeometry = new t.PlaneGeometry(60, 20);
			var planeMaterial = new t.MeshLambertMaterial({color:0xffffff});
			this.plane = new t.Mesh( planeGeometry, planeMaterial );
			this.plane.rotation.x = -0.5*Math.PI;
			this.plane.position.x = 15;
			this.plane.position.y = 0;
			this.plane.position.z = 0;
			this.scene.add(this.plane);
		},
		drawCube(){
			var geometry = new t.CubeGeometry(4,4,4);
			var material = new t.MeshLambertMaterial({color:0xff0000});
			this.cube = new t.Mesh(geometry, material);
			this.cube.position.x = -4;
			this.cube.position.y = 3;
			this.cube.position.z = 0;
			this.scene.add(this.cube);
		},
		drawSphere(){
			var geometry = new t.SphereGeometry(4,20,20);
			var metrial = new t.MeshLambertMaterial({
				color: 0x7777ff
			});
			this.sphere = new t.Mesh( geometry, metrial );
			this.sphere.position.x = 20;
			this.sphere.position.y = 4;
			this.sphere.position.z = 2;
			this.scene.add(this.sphere);
		},
		drawLight(){
			this.spotLight = new t.SpotLight( 0xffffff );
			this.spotLight.position.set( -40, 60, -10 );
			this.scene.add(this.spotLight);
		},
		action(){
			this.$el.appendChild( this.renderer.domElement );
			this.renderer.render( this.scene, this.camera );
		}
	},
	mounted(){
		this.ready();
		this.drawAxes();
		this.drawPlane();
		this.drawCube();
		this.drawSphere();
		this.drawLight();
		this.action();
	}
}
</script>

<style>
</style>