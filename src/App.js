
import React, { Component } from 'react'
import './App.css'
import Search from './Search.js'
import Header from './Header'
import About from './About'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      searchTerm : '',
      lastSearchTerm : '',
      lastSearch : '',
      currentPage : 'search'
    }
  }
  setLastSearch=(e)=>{
   e.preventDefault() 
    this.setState({
      lastSearchTerm: this.state.searchTerm,
      lastSearch: this.state.searchTerm
    })
  }
  changeSearch = () =>{
    this.setState({
      currentPage : 'search'
    })
  }
  changeAbout = () =>{
    this.setState({
      currentPage : 'About'
    })
  }
  render() {
    return (
      <div>
         <div className="App">
      <div className='userBox'>
        <h1>UserSearch</h1>
        <div className='buttons'>
          <button className='headBut' onClick={this.changeSearch}>Search</button>
          <button className='headbut'
        onClick={this.changeAbout}>About</button>
        {/* <Header/> */}
        </div>
        </div>
        <div className='search' style={{display:this.state.currentPage==='About'? "none":'block'}}>
          <form onSubmit={this.setLastSearch}>
      <input type='text' name='search' placeholder='Enter Searchterm' onChange={(e)=>this.setState({searchTerm: e.target.value})}></input>
        <button type='submit' className='searchBut'>Search</button>
        </form>
        <Search searchFor={this.state.lastSearchTerm} lastTerm = {this.state.lastSearch}/>
    </div>
    <div
    style={{display:this.state.currentPage==='search'? 'none':'block'}}>
      <About/>
    </div>
    </div>
      </div>
    )
  }
}
