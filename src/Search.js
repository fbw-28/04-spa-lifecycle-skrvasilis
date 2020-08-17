import React, { Component } from "react";
import './Search.css' 

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],


    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.lastTerm === this.props.searchFor && this.props.searchFor !=='') {
        console.log('works')
      return false;
    } else {
      return true;
    }
  }
 
  render() {
      let userFilter = this.state.data.filter(item=>{
          if (item.name.startsWith(this.props.searchFor) || this.props.searchFor === '') {
              return item
          }
      })
    return (
    

        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {userFilter.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        
        </table>
    

    );
  }
}