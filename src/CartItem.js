import React from 'react';

class CartItem extends React.Component {
  render () {
    console.log('this.props', this.props);
    const { price, title, qty,img } = this.props.product;
    const {
      product,
      onIncrease,
      onDecrease,

    } = this.props;
    return (
      <div className="cart-item">
        {this.props.jsx}
        <div className="left-block">
          <img src={img}  style={styles.image}  />
        
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              onClick={() => onIncrease(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
              onClick={() => onDecrease(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
        
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 130,
    width: 130,
    borderRadius: 4,
    background: '#ccc',
    "&:hover": {
     
    },
  },
 
}

export default CartItem;