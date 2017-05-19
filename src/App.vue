<template>
  <div>
    <transition :name="$store.getters.direction === 'forward' ? 'vux-pop-in' : 'vux-pop-out'">
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
    <tabbar :class="{'hide': !$store.getters.isShowTabbar}">
      <tabbar-item :selected="$route.name === 'index'" link="/">
        <i slot="icon" class="icon-bookmark"></i>
        <span slot="label" v-text="'首页'"></span>
      </tabbar-item>
      <!--<tabbar-item :selected="$route.name === 'create'" :show-dot="!$store.getters.isAgainLoading" link="/create">
                <i slot="icon" class="icon-edit"></i>
                <span slot="label" v-text="'发布'"></span>
              </tabbar-item>-->
      <tabbar-item :selected="$route.name === 'message'" link="/message">
        <i slot="icon" class="icon-comment"></i>
        <span slot="label" v-text="'消息'"></span>
      </tabbar-item>
      <tabbar-item :selected="$route.name === 'me'" link="/me">
        <i slot="icon" class="icon-user"></i>
        <span slot="label" v-text="'我的'"></span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<style>
.weui_tabbar_icon {
  font-size: 20px;
  height: 24px!important;
}

.weui_tabbar_label {
  font-size: 17px!important;
}

.weui_tabbar.hide {
    -webkit-transform: translateY(65px)!important;
    transform: translateY(65px)!important;
}
</style>

