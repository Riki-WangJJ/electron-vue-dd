// 读取当前文件夹下的所有js文件
const files = require.context('.', false, /\.js$/)

const modules = {}
// files.keys()返回文件名  files(url)指定文件
files.keys().forEach(key => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default modules
