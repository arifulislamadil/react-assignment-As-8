import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
import './Home.css'

const Home = () => {

    const [members, setMembers] = useState([]);
    const [persons, setPerson] = useState([]);

    useEffect(() => {
        fetch('./members.JSON')
            .then(res => res.json())
            .then(data => setMembers(data.members_list))
    }, []);

    const handleAddToCart = (newMember) => {

        for (let singlePerson of persons) {
            if (newMember === singlePerson) {
                setPerson([...persons]);
                return;
            }

        }

        const addedMembers = [...persons, newMember];
        setPerson(addedMembers)
    }

    return (
        <div>

            <div className="row members-info">
                <h1>Humanity for Human</h1>
                <h2>Target Donate Amount: $ 4000</h2>

                <div className="col-md-9 left-site">
                    <div className="row ">
                        {
                            members.map((member) => <Member key={member.membership_id} handleAddToCart={handleAddToCart} member={member}></Member>)
                        }
                    </div>
                </div>

                <div className="col-md-3 right-site">
                    <Cart addedMembers={persons}>
                    </Cart>
                </div>
            </div>

        </div>
    );
};

export default Home;