<template>
  <div class="admin">
    <!-- nav   -->
    <div class="nav" :style="navsStyleObj">
        <!-- <el-radio-group v-model="isHideNavs" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isHideNavs" background-color="#263445" text-color="rgb(191,203,217)">
     <el-submenu index="1">
        <template slot="title">
            <i class="el-icon-house"></i>
            <span slot="title">首页</span>
        </template>
     </el-submenu>
     <el-submenu index="2">
        <template slot="title">
            <i class="el-icon-document-remove"></i>
            <span slot="title">文档</span>
        </template>
     </el-submenu>
     <el-submenu index="3">
        <template slot="title">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">引导页</span>
        </template>
     </el-submenu>
     <el-submenu index="4">
        <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">组件</span>
        </template>
        <el-menu-item index="4-1">头像上传</el-menu-item>
        <el-menu-item index="4-2">小组件</el-menu-item>
     </el-submenu>
     <el-submenu index="5">
        <template slot="title">
            <i class="el-icon-help"></i>
            <span slot="title">综合案例</span>
        </template>
        <el-menu-item index="5-1">创建文章</el-menu-item>
        <el-menu-item index="5-2">文章列表</el-menu-item>
     </el-submenu>
     <el-submenu index="6">
        <template slot="title">
            <i class="el-icon-picture-outline-round"></i>
            <span slot="title">图标</span>
        </template>
        <el-menu-item index="6-1">键盘图表</el-menu-item>
        <el-menu-item index="6-2">折线图</el-menu-item>
     </el-submenu>
    </el-menu>
    </div>
    <!-- /nav   -->
    <!-- main   -->
    <div class="main">
      <!-- 面包屑 -->
      <div class="mainHead"> 
        <div class="crumbs">
          <i class="el-icon-s-fold retract" @click="navsFn"></i>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="menuRight">
          <ul>
            <li><i class="el-icon-search"></i></li>
            <li><i class="el-icon-full-screen"></i></li>
            <li><i class="el-icon-s-promotion"></i></li>
            <li><i class="el-icon-s-custom"></i></li>
          </ul>
        </div>
      </div>
      <div class="mainNav"> 
        <span class="check">首页</span>
        <span>文档</span>
      </div>
      <router-view/>
    </div>
    <!-- /main   -->
  </div>
</template>

<script>
export default {
  data() {
      return {
        //是否隐藏导航 true是,false否
        isHideNavs: false,
        navsStyleObj:{width:'210px'}
      };
    },
    methods: {
      //导航隐藏显示
      navsFn(){
        this.isHideNavs=!this.isHideNavs;
        //真64px 假210px
        this.navsStyleObj = this.isHideNavs ? {width:'64px'} : {width:'210px'}
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped lang=scss>
    .admin{
        width: 100%;
        height: 100%;
        background: #F0F2F5;
        overflow: hidden;
        display: flex;
    }
    .nav{  
        height: 100%;
        background:#263445;
        overflow: hidden;
        float: left;
        .el-menu{
          border: 0;
        }
        
    }
    /* .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    } */
    .main{
        display: flex;
        width: 100%;   
        overflow: hidden;   
        flex-direction: column;   
        background-color: #fff;  
        .mainHead{
         height: 50px;
         line-height: 50px;
         display: flex;
         width: 100%;
         align-items: center;
         justify-content: space-between;
         box-shadow: 0 1px 4px rgba(0,21,41,.08);
         .crumbs{
           display: flex;
           align-items: center;
           .retract{
            float: left;
            font-size: 20px;
            margin-left: 15px;
            margin-right: 20px;
            }
          .el-breadcrumb{
            width: 500px;
          }
         }         
          .menuRight{
            width: 240px;
            float: right;
            ul{
              li{
                float: right;
                margin:0 20px;
                i{
                  font-size: 20px;
                }
              }
            }
          }
        }
        .mainNav{
          height: 35px;
          line-height: 35px;
          border-bottom: 1px solid #d8dce5;
          span{
            margin: 5px 0 5px 5px;
            padding: 4px 8px;
            font-size: 12px;
            border: 1px solid #d8dce5;
            vertical-align: middle;
            cursor: pointer;
            &:first-child{
              margin-left: 15px;
            }
          }
          .check{
            background-color: #42b983;
            padding: 4px 10px;
            color: #fff;
            &::before{
              content: ' ';
              display: inline-block;
              background-color: #fff;
              text-align: center;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              margin-right: 5px;
            }
          }
        }  
     }
</style>