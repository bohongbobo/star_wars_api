import React from 'react';
import Peopleinfo from './Peopleinfo';

const PeopleinfoList = ({ people }) => {
    return (
        <div>
            {
                people.map((user, i) => {
                    return (
                        <Peopleinfo
                            key={i} 
                            name={`Name: ${people[i].name}`}
                            birth_year={`Birth Year: ${people[i].birth_year}`}
                            height={`Height: ${people[i].height}`}
                            mass={`Mess: ${people[i].mass}`}
                            vehicles={`Vehicles: ${people[i].vehicles}`}
                        />
                    );
                })
            }
        </div>
    );
}

export default PeopleinfoList;