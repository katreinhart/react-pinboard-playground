var React =  require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

const ReactPinboard = require('react-pinboard');

const cols = [
  { media: '(max-width: 1000px)', cols: 4 },
  { media: '(max-width: 500px)', cols: 3 },
  { media: '', cols: 2 }
];

// load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <ReactPinboard cols={cols} spacing="2em">
    <img src="..." />
    <div>
      <h3>Heading</h3>
      <p>...</p>
    </div>
    <SomeOtherReactComponent />
    ...
  </ReactPinboard>,
  document.querySelector('pinboard-container');
);
