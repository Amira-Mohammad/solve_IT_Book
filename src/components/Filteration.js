import React from 'react';

const Filteration = ({ filter, setFilter }) => {
    return (
        <div>
            <div className="font-weight-bold">
                Users Dictionary
            </div>
            <input
            //class="fas" placeholder="&#xf002;"
            className="border rounded"
                value={filter || ''}
                onChange={(e) => setFilter(e.target.value)}
            />
        </div>
    );
};

export default Filteration;