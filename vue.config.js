module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/scss/main.scss")]
    }
  }
 
}
