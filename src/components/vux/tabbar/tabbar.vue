<template>
  <div class="weui_tabbar">
    <slot></slot>
  </div>
</template>

<script>
import { parentMixin } from '../mixins/multi-items'

export default {
  mixins: [parentMixin],
  props: {
    iconClass: String
  }
}
</script>

<style lang="less">
@import './weui_tab_tabbar.less';
@import '../styles/reddot.less';

.weui_tabbar_icon {
  position: relative;
  text-align: center;
  color: #999;
  height: 16px;
}
.weui_tabbar_icon > sup {
  position: absolute;
  top: -8px;
  left: 100%;
  transform: translateX(-50%);
  z-index: 101;
}
.weui_tabbar_item.vux-tabbar-simple {
  padding: 0;
  height: 50px;
  line-height: 50px;
}
.vux-tabbar-simple .weui_tabbar_label {
  font-size: 14px;
}
</style>
