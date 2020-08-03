import React from "react";

class CartItem extends React.Component{

    render(){
        return(
         
            <div className="cart-item">
            <div className="left-block">

            <img  style={Styles.image} />

            </div>
            <div className="right-block">
            <div>Phone  </div>
            <div>Rs 9999</div>
            <div>Qty: 1</div>
            <div className="cart-item-actions">
        </div>
    </div>
</div>

        );

    }
}

const Styles={
    image:{
        height:110,
        width:110,
        borderRadius:4
    }
}


export default CartItem;