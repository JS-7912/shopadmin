<template>
  <div class="admin">
    <!-- nav   -->
    <div class="nav">
        <!-- <el-radio-group v-model="isHideNavs" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isHideNavs" background-color="#263445" text-color="rgb(191,203,217)">
     <el-submenu index="1">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">首页</span>
        </template>
     </el-submenu>
     <el-submenu index="2">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">文档</span>
        </template>
     </el-submenu>
     <el-submenu index="3">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">引导页</span>
        </template>
     </el-submenu>
     <el-submenu index="4">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">组件</span>
        </template>
        <el-menu-item index="4-1">头像上传</el-menu-item>
        <el-menu-item index="4-2">小组件</el-menu-item>
     </el-submenu>
     <el-submenu index="5">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">综合案例</span>
        </template>
        <el-menu-item index="5-1">创建文章</el-menu-item>
        <el-menu-item index="5-2">文章列表</el-menu-item>
     </el-submenu>
     <el-submenu index="6">
        <template slot="title">
            <i class="el-icon-location"></i>
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
        isHideNavs: false
      };
    },
    methods: {
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
    }
    .nav{
        width: 200px;
        height: 100%;
        background:#263445;
        overflow: hidden;
        float: left;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
     }
     .main{
         float: left;
         overflow: hidden;
     }
</style>