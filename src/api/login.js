import request from '@/utils/request'

export function login(userInfo) {
  return request({
    //url: '/admin/login',
    url: '/system/login',
    method: 'post',
    data: userInfo
  })
}

export function getInfo() {
  return request({
    url: '/admin/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}
// 获取当前用户展示的权限
export function getMenu(userId) {
  return request({
    url: '/system/menuSystem/' + userId,
    method: 'get',
  })
}

// 修改密码
export function changePwd(data) {
  return request({
    url: '/system/edituserpwd',
    method: 'post',
    data: data,
  })
}

