<template>
	<div id="bar">
		<ul class="nav1"  @mouseleave="change(101, false)">
			<li v-for="(item,index) in bars" @mouseover="change(index, false)" :key="index">
				<span @click="jump(item.src)">{{item.title}}</span>
				<ul class="nav2" v-show="item.show">
					<li v-for="(item1,index1) in item.list" :key="index1"  @mouseleave="change(index, true)">
						<span @click="jump(item1.src)">{{item1.title}}</span>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name:'bar',
	data(){
		return{
			show:[false, false],
			bars: [
				{
					title:'第一个三维场景',
					src: 'basic1',
					show: false,
					list:[
						{title:'基本', src:'basic1'},
						{title:'材质灯光阴影', src:'basic2'}
					],
				},
				{
					title:'基本',
					src: 'basic',
					show: false,
					list:[
						{title:'basic1', src:'basic1'}
					],
				},
				{
					title:'基本',
					src: 'basic',
					show: false,
					list:[
						{title:'basic1', src:'basic1'}
					],
				}
			]
		}
	},
	methods:{
		jump(path){
			this.$router.push(path);
		},
		change(index, childLeave){
			var _this = this;
			var activeItem;
			var length = this.bars.length;
			//子列表离开
			if(childLeave){
				this.$set(this.bars[index], "show", false);
				return
			}
			//主列表离开
			activeItem = this.bars.find(item=>item.show);
			if(activeItem){
				this.$set( activeItem, "show", false);
			}
			if(index<length){
				this.$set(_this.bars[index], "show", true);
			}
		}
	}
}
</script>

<style lang="less">
#bar{
	width:100%;
	height:60px;
	background: #303133;
	position:absolute;
	left:0;
	top:0;
	>ul.nav1{
		/*width: 100%;*/
		/*display: inline-block;*/
		float:left;
		height:100%;
		margin-left:20px;
		>li{
			text-decoration: none;
			float: left;
			min-width:100px;
			max-width:150px;
			height:100%;
			line-height: 60px;
			text-align: center;
			
			&:hover{
				/*background: orchid;*/
			}
			>span{
				font-size: 16px;
				font-weight: 600;
				cursor: pointer;
				color:#E6A23C;
				transition:all .3s;
				&:hover{
					color:#fff;
					font-weight: 600;
				}
				
			}
			>ul.nav2{
				>li{
					background:#606266;
					cursor: pointer;
					>span{
						color:#E6A23C;
						transition:all .3s;
					}
					&:hover{
						/*background-color: #DA70D6;*/
						>span{
							color:#fff;
							font-weight: 600;
							
						}
					}
				}
			}
		}
	}
}
</style>