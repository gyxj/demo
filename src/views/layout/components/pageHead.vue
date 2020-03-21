<template>
  <section class="headWrapper">
    <section class="lineTop">
    	<section class="lineTopLeft">
    		<span>欢迎来到中国服装辅料网</span>
    		<a href="#">请登录</a>
    		<a href="#">免费注册</a>
    	</section>
    	<section class="lineTopRight">
    		<a href="#">个人中心</a>
    		<span>客服热线：</span><span class="tel">0571-86398600</span>
    	</section>
    </section>
    <section class="lineMiddle">
    	<section class="logo">
    		<img class="logoImg" src="../../../assets/images/logo.png" alt="logo">
    	</section>
    	<section class="search">
    		<el-input class="searchInput" placeholder="请输入搜索关键词" v-model="keyWOrds" size="small">
			    <el-select class="typeSelect" v-model="keyType" slot="prepend" placeholder="请选择">
			      <el-option 
			      	v-for="item in typeList"
			      	:key="item.value"
			      	:label="item.label"
			      	:value="item.value"
			      ></el-option>
			    </el-select>
			    <el-button class="searchBtn" slot="append" icon="el-icon-search"></el-button>
			</el-input>
    	</section>
    </section>
    <nav class="nav">
    	<el-menu
			class="el-menu-demo"
			mode="horizontal"
			@select="handleSelect"
			background-color="rgba(255,157,7,1)"
			text-color="#fff"
			>
			  <el-menu-item index="1"><a href="#">首页</a></el-menu-item>
			  <el-submenu index="2">
			    <template slot="title">辅料</template>
			    <el-menu-item index="2-1">辅料供应商</el-menu-item>
			    <el-menu-item index="2-2">辅料产品供应</el-menu-item>
			    <el-menu-item index="2-3">辅料采购商</el-menu-item>
			    <el-menu-item index="2-4">辅料产品采购</el-menu-item>
			  </el-submenu>
			  <el-submenu index="3">
			    <template slot="title">行业信息</template>
			    <el-menu-item index="3-1">行业资讯</el-menu-item>
			    <el-menu-item index="3-2">展会信息</el-menu-item>
			  </el-submenu>
			  <el-menu-item index="4"><a href="#">设计师</a></el-menu-item>
			  <el-menu-item index="5"><a href="#">智能科技服务</a></el-menu-item>
		</el-menu>
    </nav>
  </section>
</template>

<script>
	export default {
	  name: 'pageHead',
	  data() {
	  	return {
	  		keyType: '',
	  		keyWOrds: '',
	  		typeList: [
	  			{value: '1', label: '供应'},
	  			{value: '2', label: '求购'},
	  			{value: '3', label: '资讯'},
	  			{value: '4', label: '展会'},
	  			{value: '5', label: '企业'},
	  		],
	  	}
	  },
	  methods: {
	  	handleSelect(key, keyPath) {
	  		console.log('key:', key, '-----', 'keyPaty:', keyPath);
	  	}
	  }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import 'src/styles/index.scss';
	.headWrapper {
		width: 100%;
		padding: 0 80px;
		.lineTop {
			width: 100%;
			height: 30px;
			line-height: 30px;
			.lineTopLeft {
				float: left;
				font-size: 12px;
				a {
					margin-left: 10px;
					color: $fontColor;
				}
			}
			.lineTopRight {
				font-size: 12px;
				float: right;
				a {
					margin-right: 10px;
				}
				a:hover, .tel {
					color: $fontColor;
				}
				.tel {
					font-size: 14px;
				}
			}
		}
		.lineMiddle {
			position: relative;
			margin-top: 20px;
			.logo {
				.logoImg {
					width: 175px;
				}
			}
			.search {
				position: absolute;
				left: 200px;
				top: 15px;
				text-align: center;
				.searchInput {
					width: 700px;
					margin-left: 200px;
					border: 2px solid $fontColor;
					.typeSelect {
						width: 86px;
						background-color: #fff;
					}
					.searchBtn {
						color: #fff;
						border-radius: 0;
					}
				}
			}
		}
		.nav {
			position: fixed;
			top: 130px;
			left: 0;
			width: 100%;
			.el-menu-demo {
				padding-left: 300px;
				.el-menu-item,.el-submenu {
					width: 150px;
					height: 40px;
					line-height: 40px;
					text-align: center;
				}
			}
		}
	}
	.el-menu--horizontal /deep/ .el-submenu .el-submenu__title {
		height: 40px;
		line-height: 40px;
	}
	/deep/ .el-input-group__append, .el-input-group__prepend {
		background-color: $fontColor;
		border: 2px solid $fontColor;
		border-radius: 0;
	}
	/deep/ .el-input__inner {
		border: 0;
		border-left: 2px solid $fontColor;
	}
	/deep/ .el-input-group__prepend {
		border-left: 0;
	}
</style>
