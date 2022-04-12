import React from 'react';
import './Styles/CharapterCard.css';

export default function CharapterCard(props) {
    const { miniature, id, charapterName } = props;

    const returnData = () => {
        const data = { miniature, id, charapterName, autoplay:1 };
        props.selectCharapter(data);
    };
    return (/*  */
        <React.Fragment>
            <div className='col-6 col-md-3 mx-auto'>
                <div className='card bg-dark mb-3 p-1'>
                    <img
                        onClick={returnData}
                        className='miniature card-img-top mx-auto my-2'
                        alt='Miniatura capitulo #'
                        src={miniature}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}
