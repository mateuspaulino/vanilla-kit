import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import configs from './config';

const env = process.env.NODE_ENV || 'development';

let URL_SERVER;

if (env === 'production') {
  URL_SERVER = configs.s3URL;
} else {
  URL_SERVER = '';
}

const config = {
  entry: ['babel-polyfill','./src/index.js'],
  output: {
    filename: 'bundle.js?[hash]',
    path: path.resolve(__dirname, 'public'),
    publicPath: URL_SERVER,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]?[hash]',
              context: path.resolve(__dirname, 'app/src/'),
            },
          },
        ],
      },
      {
        test: /\.(pug)$/,
        use: [
          'html-loader', {
            loader: 'pug-html-loader',
            options: {
              data: {},
              pretty: true,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.json', '.css'],
  },

  plugins: [
    new ExtractTextPlugin('style.css?[hash]'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './static/views/index.pug'),
      minify: {
        removeComments: true,
      },
      inject: true,
    }),
  ],
  devtool: 'source-map',
  devServer: {
    noInfo: true,
    contentBase: path.resolve(__dirname, '/'),
    port: 3000,
    // host: '0.0.0.0',
    open: true,
  },
};

export default config;
