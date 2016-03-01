var React = require('react');

var Button = React.createClass({
  getInitialState:function(){
    return{
      value:this.props.title,
      type:this.props.type
    }
  },
  onSubmit:function(e){
    console.log(this.state.value);

    return (this.state.value);

  },

  render:function(){
    var buttonStyle;
    if (this.state.type == "number"){
      buttonStyle={background:'#33CC66', color: 'white', minHeight: '60px',
        minWidth: '120px'}
      }else if(this.state.type == "operation"){
        buttonStyle={background:'#00CCFF', color: 'white', minHeight: '60px',
          minWidth: '120px'}
        }else if(this.state.type == "clear"){
          buttonStyle={background:'#990000', color: 'white', minHeight: '60px',
            minWidth: '120px'}
          }else{
            buttonStyle={background:'#6600CC', color: 'white', minHeight: '60px',
              minWidth: '120px'}
            }

          return(
            <div className="col-sm-3">
              <button type="button" style={buttonStyle} type={this.state.type} onClick={this.onSubmit} className="btn btn-default">{this.state.value}</button>
            </div>
          );
        }
      });

      module.exports = Button;
