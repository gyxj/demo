import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import storage from '@/utils/storage'

const user = {
  state: {
    token: getToken(),
    userName: '',
    loginCode:'',
    avatar: '',
    roles: [],
    userId: '',
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.userName = name
    },
    SET_ID: (state, userId) => {
      state.userId = userId
    },
    SET_CODE: (state, code) => {
      state.loginCode = code
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      //const logincode = userInfo.logincode.trim()
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {          
          if(response.code==='001'){          
            const data   = response.data
            const tokenStr =data.authorization // data.tokenHead+data.token          
            setToken(tokenStr)
            commit('SET_CODE', data.loginCode)
            commit('SET_TOKEN', tokenStr)
            storage.set('userInfo', response.data)   

            commit('SET_ID', data.userId)
            // console.log("111111111", data.userId)
            resolve()         
          }else{
            setToken("")
            commit('SET_CODE', "")
            commit('SET_TOKEN', "")
            storage.set('userInfo', "")
            reject(response.info)
          }
          
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const data = response.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.userName)

          //commit('SET_AVATAR', data.icon)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        //logout(state.token).then(() => {
          commit('SET_CODE', '')
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        //}).catch(error => {
        //  reject(error)
        //})
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_CODE', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
