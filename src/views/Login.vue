<template>
  <div>
    <div class="login-box" :style="{minHeight: minHeight + 'px'}">
      <div class="login-logo" style="text-align:center;">
        <img src="../assets/images/ionic.png" alt="" style="max-height:100%;width:auto;">
      </div>
      <div class="login-title">
        登录到frontender.club
      </div>
      <group>
        <x-input title='账号' v-model="loginid"></x-input>
        <x-input title='密码' v-model="password"></x-input>
      </group>
      <flexbox style="margin-top: 20px" @click="onLogin">
        <flexbox-item>
          <router-link to="/">
            <x-button type="default">随便逛逛</x-button>
          </router-link>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary" @click.native="onLogin">立即登录</x-button>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      accessToken: 'f24da430-fbcd-4710-880c-f53bb289924f',
      loginid: '',
      password: '',
      currTab: '最近回复',
      userData: {},
      isLogin: false
    }
  },
  activated() {
    this.$loading.hide()
  },
  methods: {
    onLogin() {
      let self = this;
      if (!this.loginid) {
        this.$vux.toast.show({
          text: '请输入用户名'
        })
        return false
      } else if (!this.loginid) {
        this.$vux.toast.show({
          text: '请输入密码'
        })
        return false
      } else {
        this.$loading.show()
        this.$axios.post('/User/login', {
          loginid: this.loginid,
          password: this.password
        })
          .then(result => {
            result = result.data;
            localStorage.setItem('loginid', self.loginid);
            localStorage.setItem('password', self.password)
            this.$store.commit('SET_LOGININFO', {
              avatarUrl: result.data.avatar_url,
              id: result.data.id,
              loginname: result.data.username,
              loginid: result.data.loginid
            })
            this.$vux.toast.show({
              text: '登录成功'
            })
            this.$loading.hide()
            this.$router.push('/')
          })
          .catch(() => {
            localStorage.setItem('loginid', null)
            this.$vux.toast.show({
              text: '密码错误'
            })
            this.$loading.hide()
          })
      }
    }
  },
  computed: {
    minHeight: () => {
      return (document.body.clientHeight >= 400 && document.body.clientHeight <= 736) ? document.body.clientHeight : window.screen.height
    }
  }
}
</script>
