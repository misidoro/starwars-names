import {join} from 'path'

const include = join(__dirname, 'src')

export default {
  entry: './src/index',
  mode: 'none',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'starWarsNames'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', 
        }
      }
    ]
  }
}