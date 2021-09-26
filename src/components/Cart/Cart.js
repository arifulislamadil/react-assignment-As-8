import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { addedMembers } = props;

    let total = 0;
    for (const member of addedMembers) {
        total = total + parseInt(member.donate_amount);
    }
    return (
        <div className="mt-4 cart">
            <h3>Member: {props.addedMembers.length}</h3>
            <h4>Total Amount:<span>$</span> {total}</h4>
            <h3>Contributor List</h3>
            <hr />
            {
                addedMembers.map((person) => (<p className="added-member" key={person.membership_id}>{person.name}</p>))
            }


        </div >
    );
};
export default Cart;