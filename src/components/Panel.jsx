  var React = require('react');
  var Button = require('./Button.jsx');

  var Panel = React.createClass({

    
    render:function(){
      return (
        <div className="container">
          <Button title="1" type="number"  />
          <Button title="2" type="number" />
          <Button title="3" type="number" />
          <Button title="+" type="operation" />
          <Button title="4" type="number" />
          <Button title="5" type="number" />
          <Button title="6" type="number" />
          <Button title="-" type="operation" />
          <Button title="7" type="number" />
          <Button title="8" type="number" />
          <Button title="9" type="number" />
          <Button title="X" type="operation" />
          <Button title="C" type="clear" />
          <Button title="0" type="number" />
          <Button title="=" type="equal" />
          <Button title="/" type="operation" />
        </div>
      );
    }
  });

  module.exports = Panel;
