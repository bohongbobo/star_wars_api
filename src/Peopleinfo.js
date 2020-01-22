import React from 'react';


const Peopleinfo = ({ name, birth_year, height, mass }) => {
    return (
        <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5 pa4">
            <h5>{name}</h5>
            <p>{birth_year}</p>
            <p>{height}</p>
            <p>{mass}</p>
        </div>  
    );
}

export default Peopleinfo;