export default{
	screenInfo:(()=>{
		var w = document.documentElement.clientWidth || document.body.clientWidth;
		var h = document.documentElement.clientHeight || document.body.clientHeight;
		var view = {
			w:w,
			h:h-60
		};
		return {
			w, h, view
		}
	})()
}
