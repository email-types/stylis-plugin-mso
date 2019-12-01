const isEsm = process.env.TARGET === 'esm';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: isEsm ? false : 'commonjs',
        targets: isEsm ? { esmodules: true } : { node: 'current' },
        shippedProposals: true,
      },
    ],
    '@babel/preset-typescript',
  ],
};
