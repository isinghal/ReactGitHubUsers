import React, { Component } from 'react'
class User extends Component {
    componentWillMount() {

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
                            <h4>COMPANY NAME</h4>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <br />
                            <center>
                                <h3>4890</h3>
                                <p>points</p>
                            </center>
                        </div>
                    </div>
                </div >
            </div >

        )
    }
}
export default User;