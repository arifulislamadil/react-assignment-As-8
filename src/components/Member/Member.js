import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';
import './Member.css';

const Member = (props) => {
    const { img, name, age, profession, donate_amount, country } = props.member;
    const element = <FontAwesomeIcon icon={faDonate} />
    return (
        <div className="col-md-4 g-4">
            <div className="member-info">
                <div>
                    <img className="img-fluid rounded-circle" src={img} alt="" />
                </div>
                <p className="fw-bold">Name: {name}</p>
                <p>Age: {age}</p>
                <p>Profession: {profession}</p>
                <p>Donate-Amount:$ {donate_amount}</p>
                <p>Country: {country}</p>
                <button onClick={() => props.handleAddToCart(props.member)}><span>{element} </span>Add To Cart</button>
            </div>

        </div>
    );
};
export default Member;