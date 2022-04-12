import React from 'react';
import './Styles/CharaptersContainer.css'

export default function CharaptersContainer(props) {
    return (
        <React.Fragment>
            <div className='container-fluid'>
                <div className='row ' id='charaptersContainer'>
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
}
