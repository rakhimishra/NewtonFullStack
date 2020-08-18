// ** create-user.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserDesc = this.onChangeUserDesc.bind(this);
        this.onChangeUserPrice = this.onChangeUserPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product_name: '',
            product_desc: '',
            product_price:''
        }
    }

    onChangeUserName(e) {
        //validation that product name should be string
        if (e.target.value.match("^[a-zA-Z]*$")!=null){
            this.setState({ product_name: e.target.value })
        }
        
    }
    onChangeUserDesc(e) {
        this.setState({ product_desc: e.target.value })
    }

    onChangeUserPrice(e) {
        if(e.target.value.match("^[0-9 ]")!=null)
            this.setState({ product_price: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            product_name: this.state.product_name,
            product_desc: this.state.product_desc,
            product_price: this.state.product_price
        };

        axios.post('http://localhost:4000/users/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ product_name: '', product_desc: '' ,product_price:'' })
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" value={this.state.product_name} onChange={this.onChangeUserName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Product Descriptionl</label>
                        <input type="text" value={this.state.product_desc} onChange={this.onChangeUserDesc} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input type="text" value={this.state.product_price} onChange={this.onChangeUserPrice} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Products" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}