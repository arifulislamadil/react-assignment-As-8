import React from 'react';
import './Member.css';

const Member = (props) => {
    const { img, name, age, profession, donate_amount, country } = props.member
    return (
        <div className="col-md-4 g-4">
            <div className="member-info">
                <div>
                    <img className="img-fluid rounded-circle" src={img} alt="" />
                </div>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Profession: {profession}</p>
                <p>Donate-Amount: {donate_amount}</p>
                <p>Country: {country}</p>
                <button onClick={() => props.handleAddToCart(props.member)}>Add To Cart</button>
            </div>

        </div>
    );
};
export default Member;