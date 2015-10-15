# web-socket-polymer

A polymer wrapper for the websocket API, including databinding!


## Dependencies

Element dependencies are managed via [Bower](http://bower.io/) and [NPM](https://www.npmjs.com/). You can
install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    npm install
    bower install


## Playing With The Element

We've included a demo websocket server, that leverages [Polyserve](https://github.com/PolymerLabs/polyserve). You can install it via:

    npm install -g polyserve

And you can run it via:

    node server.js

Once running, you can preview the element at
`http://localhost:8080/components/web-socket/`


## Testing The Element

Simply navigate to the `/test` directory of the element to run its tests. If
you are using Polyserve: `http://localhost:8080/components/web-socket/test/`

### web-component-tester

The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).
Install it via:

    npm install -g web-component-tester

Then, you can run your tests on _all_ of your local browsers via:

    wct

#### WCT Tips

`wct -l chrome` will only run tests in chrome.

`wct -p` will keep the browsers alive after test runs (refresh to re-run).

`wct test/some-file.html` will test only the files you specify.
