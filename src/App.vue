<template>
  <div id="app">
  	<bar></bar>
    <!--<div class="main">
    	<router-view/>
    </div>-->
    <viewbox></viewbox>
  </div>
</template>

<script>
import viewbox from"./components/viewbox"
import bar from"./components/bar"
export default {
  name: 'App',
	methods:{
		styleChange(){
			app.style.height = getter.screenInfo.h +'px';
		}
	},
	mounted(){
		this.styleChange()
	},
	components:{
		bar,
		viewbox
	}
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  box-sizing: border-box;
  position:relative;
  /*>.main{
  	>div{
  		width:100%;
  		height:100%;
  	}
  }*/
}
</style>
