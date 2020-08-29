import React, { Component } from 'react';
import './App.css';
import './form';
import Information from './info-json';



class App extends Component {
  

  constructor(){
    super();

    this.json = {}
    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      position:'relative',
      left:'85vh',
      height:'5vh',
      width:'25vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    


    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.country.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div>
        <ul>
          <li style={{position:'relative',left:'110vh',top: '8vh'}}>
            <span style={styleInfo}>{data.name}</span>
            <span style={styleInfo}>{data.age}</span>
            <span style={styleInfo}>{data.country}</span>
          </li>
        </ul>
      </div>
      )
    })
    


    function clickMe() {
     
    }
    function clickhere() {
     alert ('published');
    }
    function Publish() {
      alert('Submitted');
    }


    return (
     
        <div >
        <div >
        <div className="col-md-5">
          <div className="form-area">  
              <form role="form">
              <br styles="clear:both" />
                <div className="form-group">
                <input type="text" placeholder="       Search" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
            <i className="fa fa-search search-icon" aria-hidden="true"></i>
             {items}
        <div className="btn1">
        <button onClick={e => this.clickMe}>
            New Post
            </button>
            </div> 
            <div className="btn2">
            <button onClick={clickhere}>
            Published
            </button>
        </div>
            <div className="form-group">
                  <input type="text" className="form-control" id="title" name="title" placeholder="Title" required />
                </div>
                
                
                <textarea className="form-control" type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
                </div>
                   
              <button onClick={Publish} id="submit" name="submit" className="btn btn-primary pull-left">Publish</button>
             
           </form>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default App;


