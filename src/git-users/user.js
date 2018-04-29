import React, { Component } from 'react'
class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            followersCount : null,
            followingCount:null,
            company : null
        };
    }
    componentWillMount() {
        console.log(this.props.data.login , '=>',this.props);
        if(this.props.data.followers_url){
            fetch(this.props.data.url).then((res)=>{
                res.json().then((resJson)=>{
                    console.log(this.props.data.login,'=>',resJson);
                    this.setState({
                        followersCount:resJson.followers,
                        followingCount:resJson.following,
                        company:resJson.company
                    })
                })
               
            })
        }
    }
    render() {
        return (

            <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="well well-sm">
                    <div className="row">
                        <div className="col-sm-4 col-md-4">
                            <img src={this.props.data.avatar_url} alt="" className="img-circle img-responsive" />
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <br />
                            <h3><b><strong>{this.props.data.login}</strong></b></h3>
                            <p> {this.state.company} </p>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <br />
                            <center>
                                <h3>{this.state.followersCount}</h3>
                                <p>followers</p> 
                            </center>
                            <br />
                            <center>
                                <h3>{this.state.followingCount}</h3>
                                <p>following</p> 
                            </center>
                        </div>
                    </div>
                </div >
            </div >

        )
    }
}
export default User;