import React from 'react';


const Memebers = ({memebers}) => {
    return (
        <div>
            {memebers.map(member => (
                <div>
                    <h4>Name: {member.name}</h4>
                    <h4>Email: {member.email}</h4>
                    <h4>Role: {member.role}</h4>
                </div>
            ))}
    
        </div>

    )
}

export default Memebers;