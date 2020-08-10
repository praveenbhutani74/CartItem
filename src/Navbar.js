import React from "react";

const Navbar =(props)=>{
return(
    <>

    
    <div style={styles.nav}>
    <img src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" style={{height:40,width:40,display:'flex',justifyContent:'flex-start',alignItems:'center'}}></img>
     <div style={styles.cartIconContainer}>
    
         <img style={styles.cartIcon}  src="https://image.flaticon.com/icons/svg/609/609496.svg" alt="cart image"/>
         
<span style={styles.cartCount}>{props.count}</span>
     </div>
    </div>



</>
);


}


const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20,
      color:"white"
    },
  
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',

    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
export default Navbar;