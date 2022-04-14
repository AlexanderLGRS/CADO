import React from 'react';
import './Styles/ComediantsContainer.css'
export default function ComediantsContainer(props) {
    return (
        <React.Fragment>
            <div className='container-fluid' id='comediantsContainer'>
                <div className='row'>{props.children}</div>
            </div>
        </React.Fragment>
    );
}
