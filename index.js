const noble = require('noble')

module.exports = (callback) => {
  noble.on('stateChange', (state) => {
    if (state === 'poweredOn') {
      noble.startScanning()
    } else {
      noble.stopScanning()
    }
  })

  noble.on('discover', callback)
}
