import React, { Component } from 'react';
import axios from 'axios';
import { productsEndPoint } from '../../Config';
import { token } from '../../Config';
// import { getProducts } from '../../utills/DataServices';
// import Table from './components/table';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



export default class Products extends Component {

    constructor() {
        super();
        this.state = {
            textFieldValue: '',
            productObject : '',
            product : {
                name: '',
                status: '',
                sku: '',
                regular_price: '',
                sale_price: '',
                total_sales: '',
                stock_quantity : ''
            }
        };
    }
    // componentDidMount() {
    //     //getProducts()
    //     //this.getData()
    // }

    // getData = () => {
    //     axios.get(productsEndPoint)
    //         .then(res => {
    //             debugger;
    //         });
    // }

    _handleTextFieldChange = (e) => {
        this.setState({
            textFieldValue: e.target.value
        });
    }

    changePrice = (e) => {
        this.setState({
            product : {
                regular_price : e.target.value,
                stock_quantity : this.state.product.stock_quantity,
                sale_price: this.state.product.sale_price,
            }
        })
    }

    changeQuantity = (e) => {
        this.setState({
            product : {
                stock_quantity : e.target.value,
                regular_price :  this.state.product.regular_price,
                sale_price: this.state.product.sale_price,
            }
        })
    }

    changeSalePrice = (e) => {
        if(e.target.value >= this.state.product.regular_price){
            alert('Sale price must be less than regular price')
            this.setState({
                product : {
                    sale_price:e.target.defaultValue,
                    stock_quantity : this.state.product.stock_quantity,
                    regular_price :  this.state.product.regular_price,
                }
            })
        }else{
            this.setState({
                product : {
                    sale_price: e.target.value,
                    stock_quantity : this.state.product.stock_quantity,
                    regular_price :  this.state.product.regular_price,
                }
            })
        }
        
    }

    

    getProduct = () => {
        axios.get(productsEndPoint+'/?'+token+'&sku=' + this.state.textFieldValue)
            .then(res => {
                if(res && res.data && res.data.length > 0 ){
                    this.setState({
                        productObject : res.data,
                        product : {
                            name: res.data[0].name,
                            status: res.data[0].status,
                            sku: res.data[0].sku,
                            regular_price: res.data[0].regular_price,
                            sale_price: res.data[0].sale_price,
                            total_sales: res.data[0].total_sales,
                            stock_quantity : res.data[0].stock_quantity,
                        }
                    })
                }else{
                    alert('No product found')
                }
               
               
            });
    }


    updateProduct = () => {
        //console.log(this.state.textFieldValue)
        axios.put(productsEndPoint +'/'+ this.state.productObject[0].id + '?'+token, { 
            regular_price: this.state.product.regular_price ,
            stock_quantity:this.state.product.stock_quantity,
            sale_price:this.state.product.sale_price
        })
            .then(res => {
                this.setState({
                    productObject : res.data,
                    product : {
                        name: res.data.name,
                        status: res.data.status,
                        sku: res.data.sku,
                        regular_price: res.data.regular_price,
                        sale_price: res.data.sale_price,
                        total_sales: res.data.total_sales,
                        stock_quantity : res.data.stock_quantity,
                    }
                })
                alert('PRODUCT UPDATED COMPLETE')
            });
    }

    render() {
        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Standard" value={this.state.textFieldValue} onChange={this._handleTextFieldChange} />
                    <Button variant="contained" color="primary" onClick={this.getProduct}>
                        Search
                    </Button>
                </form>
                {this.state.productObject ? 
                <div>
                    <div className="product">
                        <div><span>Name:</span> {this.state.product.name}</div>
                        <div><span>Sku:</span> {this.state.product.sku}</div>
                    </div>
                    <TextField id="standard-basic" label="Price" variant="outlined" value={this.state.product.regular_price} onChange={this.changePrice} />
                    <TextField id="standard-basic" label="Sale Price" variant="outlined" value={this.state.product.sale_price} onChange={this.changeSalePrice} />
                    <TextField id="standard-basic" label="Stock" variant="outlined" value={this.state.product.stock_quantity} onChange={this.changeQuantity} />
                    <Button variant="contained" color="primary" onClick={this.updateProduct}>
                            Update
                    </Button>
                </div>
                 : 'Search product'}
            </div>
            //3389
            )
    }
}

