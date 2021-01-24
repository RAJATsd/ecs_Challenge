import { createGenerateClassName } from '@material-ui/core';
import React from 'react';

import './order-placed.styles.css';

const OrderPlaced = ({hidden}) => {
    return (
        <div className={`order-placed ${hidden?'order-placed-hidden':''}`}>
            <img src="https://cdn.dribbble.com/users/335541/screenshots/7102045/media/5b7237fe7bbfa31531d6e765576f1bc4.jpg" alt="order-placed"/>
            <h1>Order Placed Successfully</h1>
        </div>
    )
}

export default OrderPlaced;