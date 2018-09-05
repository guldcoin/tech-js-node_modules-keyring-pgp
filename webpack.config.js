module.exports = [
  {
    target: 'web',
    entry: {
      index: './index.js'
    },
    output: {
      filename: 'keyring-pgp.min.js',
      path: __dirname,
      library: 'keyringPGP',
      libraryTarget: 'var'
    }
  }
]
