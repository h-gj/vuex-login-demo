module.exports = {
  devServer: {
    proxy: {
      '/login': {
        target: 'http://127.0.0.1:8000/login',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}