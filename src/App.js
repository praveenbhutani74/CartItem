import React from 'react';
import Cart from "./Cart"
import Navbar from "./Navbar";

class App extends React.Component {
  
  constructor() {

    super();
    this.state = {
       products:[

        { 
                id:1,
                price: 9991,
                title: 'Phone',
                qty: 1,
                img: 'https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg'
        },
        {       id:2,
                price: 9992,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
        },
        {       id:3,
                price: 9993,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        },

       ]
    }
}
handleincrease=(product)=>{
    const{products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products
    });
   
}

handledecrease=(product) =>{
    const{products}=this.state;
    const index=products.indexOf(product);
    if( products[index].qty===0){
        return;
    }
    products[index].qty-=1;
    this.setState({
        products
    })
   
}
getCartCount=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach((product)=>{
    count+=product.qty;
  })
  return count;
}
totalprice=()=>{
  const{products}=this.state;
  let cartTotal=0;
  products.map((producttt)=> {
cartTotal= cartTotal+producttt.qty*producttt.price
  })
  return cartTotal;
}
  render(){
    const {products}=this.state;
  return (
    <div className="App">
    <Navbar 
    count={this.getCartCount()} 
    />
     <Cart
     products={products}
        onIncrease={this.handleincrease }
        onDecrease={this.handledecrease}

     />
     <div style={{padding:10,fontSize:"24px",lineHeight:"30px",fontFamily:"monospace",marginLeft:"20px"}}> Total:{this.totalprice()}</div>
    </div>
  
  );
  }
}

export default App;
