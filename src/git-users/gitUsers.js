import React, { Component } from 'react'
import User from './user';
class GitUsers extends Component {
 
  users = [];
  currentPage = 1;
  constructor(){
    super();
    this.state = {
      gitusers: [],
    };
    this.loadMore = this.loadMore.bind(this);
  }
  fetchData(){
    fetch(`https://api.github.com/search/users?q=+location:india+language:javascript&page=${this.currentPage}&per_page=20&sort=followers`).then((data) => {
      data.json().then((data) => {
       
        if (data.items) {
          this.users = this.users.concat(data.items);
          this.setState({
            gitusers: this.users
          })
        }

      });
    });
  }

  loadMore(){
    this.currentPage++;
    this.fetchData();
  }

  componentWillMount() {
   this.fetchData();
  };
  render() {
    return (<div>
      {this.state.gitusers.map((data) => {
        return (<div className='user'>
          <User data={data}/>
        </div>
        )
      })}
        <div className="textalign-center">
         <button className="loadMore-btn" onClick={this.loadMore}>Load More</button>
        </div>
      </div>
    ) 
  }
}
export default GitUsers;