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
      buttonStyle={background:'#33CC66', color: 'white',minWidth: '60px'}
      }else if(this.state.type == "operation"){
        buttonStyle={background:'#32ABCA', color: 'white',minWidth: '60px'}
        }else if(this.state.type == "clear"){
          buttonStyle={background:'#F57B7B', color: 'white',minWidth: '60px'}
          }else{
            buttonStyle={background:'#057BF5', color: 'white',minWidth: '60px'}
            }

          return(
            <div className="col-xs-3">
              <button type="button" style={buttonStyle} type={this.state.type} onClick={this.props.onClick} className="btn btn-default btn-circle">{this.state.value}</button>
            </div>
          );
        }
      });

      module.exports = Button;
