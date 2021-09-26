import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { addedMembers } = props;

    let total = 0;

    for (const member of addedMembers) {
        total = total + parseInt(member.donate_amount);
    }

    return (
        <div>
            <h1>Member: {props.addedMembers.length}</h1>
            <h4>Total Danate Amount:<span>$</span> {total}</h4>

        </div>
    );
};
export default Cart;