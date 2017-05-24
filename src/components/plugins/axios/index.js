import axios from 'axios'

let options = {}
options.baseURL = `http://119.23.245.101:8080`

let $axios

export default {
  install (vue) {
    if (!vue.$axios) {
      vue.$axios = axios.create(options)
    }

    vue.mixin({
      created: function () {
        this.$axios = vue.$axios
      }
    })
  }
}

