
module.exports={
  devServer:{
      proxy:{
          '/':{            //如果请求路径是"/"
              target:'http://127.0.0.1:9527', //代理到配置的域名
              ws:true,          //
              changeOrigin: true  //当前是否是跨域
          }
      }
  },
  lintOnSave: false, // 关闭eslint检查
    publicPath:"./"   //打包目录
};
