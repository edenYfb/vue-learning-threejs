<template>
  <div id="viewbox">
		<router-view/>
  </div>
</template>

<script>
export default {
  name: 'viewbox',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#viewbox{
	height:100%;
	>div{
		height:100%;
		width:100%;
	}
	h1, h2 {
  	font-weight: normal;
	}
	ul {
	  list-style-type: none;
	  padding: 0;
	}
	li {
	  display: inline-block;
	  margin: 0 10px;
	}
	a {
	  color: #42b983;
	}
}
</style>
