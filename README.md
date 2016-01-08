[![Code Climate](https://codeclimate.com/github/foliveira/bbeight-discovery/badges/gpa.svg)](https://codeclimate.com/github/foliveira/bbeight-discovery)
[![Build Status](https://travis-ci.org/foliveira/bbeight-discovery.svg?branch=master)](https://travis-ci.org/foliveira/bbeight-discovery)  
[![NPM](https://nodei.co/npm/bbeight-discovery?downloads=true)](https://nodei.co/npm/bbeight-discovery/)

# Install

```
npm install bbeight-discovery
```

# bbeight-discovery

This module allows you to discover your Sphero BB-8 droid address using your device Bluetooth LE adaptor.

## How?

```javascript
var discovery = require('bbeight-discovery')(theDroidYouReLookingFor);

function theDroidYouReLookingFor(droid) {
  console.log(droid.address); //'ca:28:c6:48:cf:26'
}
```

## Hey, did you found an issue?

The best way to get in touch is using the [GitHub issues section](https://github.com/foliveira/bbeight-discovery).  
If you can't find someone with the problem you are facing open a [new issue](https://github.com/foliveira/bbeight-discovery/issues/new) and let me know.  
If you manage to find a solution for your problem, you can submit a new [PR](https://github.com/foliveira/bbeight-discovery/pulls) :)

# License
[MIT](https://github.com/foliveira/bbeight-discovery/blob/master/LICENSE)
