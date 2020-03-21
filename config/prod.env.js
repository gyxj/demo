'use strict'
const target = process.env.npm_lifecycle_event;
console.log("?????????????????????????????");
console.log(process.env);
if (target == 'build_prod') {
    //生产环境
    var obj = {
        NODE_ENV: '"production"',
        BASE_API:'"https://adminapi.iacecoach.cn/"',
    }
}else {
    //开发/测试环境
    var obj = {
        NODE_ENV: '"development"',
        //BASE_API:'"beta"',
        BASE_API:'"https://betaadminapi.iacecoach.cn/"',
    }
}
module.exports = obj;
// module.exports = {
//   NODE_ENV: '"production"',
//   BASE_API: '"http://120.27.63.9:8080"'
// }
