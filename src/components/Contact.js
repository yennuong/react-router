import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked :true
        }
    }
    onClick = (isChecked)=>{
        this.setState({
            isChecked: isChecked
        })
    }
    render() {
        let {isChecked} = this.state;
        return (
            <div className="row">
                <button type="button" className="btn btn-info" onClick={()=>this.onClick(false)}>add</button> <br/>
                <button type="button" className="btn btn-danger" onClick={()=>this.onClick(true)}>cancel</button>
                <Prompt
                    when={isChecked}
                    message = {location => (`ban chac chan muon den trang san pham${location.pathname}`)}
                />
            </div>
        );
    }
}

export default Contact;
