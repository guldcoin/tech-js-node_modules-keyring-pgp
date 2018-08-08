module.exports = [
  {
    target: 'web',
    entry: {
      index: './keyring.js'
    },
    output: {
      filename: 'keyring-pgp.min.js',
      path: __dirname,
      library: 'keyringPGP',
      libraryTarget: 'var'
    }
  }
]
