exports.modifyWebpackConfig = ({ config, stage }) => {
  return config.merge({
    resolve: {
      alias: {
        'react': __dirname + '/node_modules/gatsby/node_modules/react',
      }
    }
  });
};
