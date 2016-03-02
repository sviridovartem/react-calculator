var React = require ('react');
var Button = require('./Button.jsx');


var MainPanel=React.createClass({
  getInitialState:function(){
    return{value:""}
  },

  onClick:function(val,e){
    var val1=this.state.value;
    val1 +=val;
    this.setState({value:val1});

    console.log(val1);
  },
  onClear:function(e){
    this.setState({value:""});
  },
  onEvaluate:function(){
    var val=this.state.value;
    if(val.indexOf("+")!==-1 && val.indexOf("–")===-1 && val.indexOf("X")===-1 && val.indexOf("÷")===-1){
      var pos=val.indexOf("+");
      if(pos===0 || pos===val.length-1){
        this.setState({value:""});
      }else{
        var first=val.substring(0,pos);
        var second=val.substring(pos+1);
        var fN=parseInt(first);
        var sN=parseInt(second);
        this.setState({value:fN+sN});
      }

    }else if(val.indexOf("+")===-1 && val.indexOf("–")!==-1 && val.indexOf("X")===-1 && val.indexOf("÷")===-1){
      var pos=val.indexOf("–");
      if(pos===0 || pos===val.length-1){
        this.setState({value:""});
      }else{
        var first=val.substring(0,pos);
        var second=val.substring(pos+1);
        var fN=parseInt(first);
        var sN=parseInt(second);
        this.setState({value:fN-sN});
      }
    }else if(val.indexOf("+")===-1 && val.indexOf("–")===-1 && val.indexOf("X")!==-1 && val.indexOf("÷")===-1){
      var pos=val.indexOf("X");
      if(pos===0 || pos===val.length-1){
        this.setState({value:""});
      }else{
        var first=val.substring(0,pos);
        var second=val.substring(pos+1);
        var fN=parseInt(first);
        var sN=parseInt(second);
        this.setState({value:fN*sN});
      }
    }else if(val.indexOf("+")===-1 && val.indexOf("–")===-1 && val.indexOf("X")===-1 && val.indexOf("÷")!==-1){
      var pos=val.indexOf("÷");
      if(pos===0 || pos===val.length-1){
        this.setState({value:""});
      }else{
        var first=val.substring(0,pos);
        var second=val.substring(pos+1);
        var fN=parseInt(first);
        var sN=parseInt(second);
        this.setState({value:fN/sN});
      }
    }else{
      this.setState({value:""});
    }
  },
  render:function(){
    return(
      <div className="panel panel-primary"style={{background: 'whitesmoke',borderColor: '#B3E2FD'}}>
        <div className="panel-body"style={{background: 'whitesmoke'}}>
          <div className="col-xs-12">
            <div className="form-group"  style={{background: 'whitesmoke'}}>
              <input type="text" className="form-control" value={this.state.value} disabled/>
            </div>
          </div>
          <Button title="1" type="number" onClick={this.onClick.bind(this,"1")}  />
          <Button title="2" type="number" onClick={this.onClick.bind(this,"2")} />
          <Button title="3" type="number" onClick={this.onClick.bind(this,"3")} />
          <Button title="+" type="operation" onClick={this.onClick.bind(this,"+")} />
          <Button title="4" type="number" onClick={this.onClick.bind(this,"4")} />
          <Button title="5" type="number" onClick={this.onClick.bind(this,"5")} />
          <Button title="6" type="number" onClick={this.onClick.bind(this,"6")} />
          <Button title="-" type="operation" onClick={this.onClick.bind(this,"-")} />
          <Button title="7" type="number" onClick={this.onClick.bind(this,"7")} />
          <Button title="8" type="number" onClick={this.onClick.bind(this,"8")} />
          <Button title="9" type="number" onClick={this.onClick.bind(this,"9")} />
          <Button title="X" type="operation" onClick={this.onClick.bind(this,"X")} />
          <Button title="C" type="clear" onClick={this.onClear} />
          <Button title="0" type="number" onClick={this.onClick.bind(this,"0")} />
          <Button title="=" type="equal"onClick={this.onEvaluate} />
          <Button title="/" type="operation" onClick={this.onClick.bind(this,"/")}/>
        </div>
      </div>
    );
  }
});
module.exports=MainPanel;
