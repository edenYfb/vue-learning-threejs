export default{
	screenInfo:()=>{
		return {
			w: document.documentElement.clientWidth || document.body.clientWidth,
		    h: document.documentElement.clientHeight || document.body.clientHeight
		}
	},
	//组件地图映射，组件里是mounted时用
	vueMapRegister(component){
		if(typeof window.vueMap == "undefined"){
			window.vueMap = {};
		}
		window.vueMap[component.$el.id] = component
	},
	clone(obj){
		return JSON.parse( JSON.stringify(obj) )
	}
}
