import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'
import {ProductConsumer} from '../../context'



export default class Cart extends Component{
 render() {
     return(
        <section>
            <ProductConsumer>
                {value => {
                    const {cart} =  value;
                    if(cart.length>0){
                        return (
                            <React.Fragment>
                                <div className = "my-5">
                                <Title name = "Products in your " title = "cart"/>
                                </div>
                                <CartColumns />
                                <CartList value = {value} />
                                <CartTotals value = {value} history = {this.props.history} />
                            </React.Fragment>
                        );
                    } else {
                        return <EmptyCart />
                    }
                }}
            </ProductConsumer>
        </section>
     )
 }   
}