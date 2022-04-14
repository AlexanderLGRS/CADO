import React from 'react';
import './Styles/ComediantCard.css';
export default function ComediantCard(props) {
    const { name, pic, ig } = props;

    return (
        <React.Fragment>
            <div className='col'>
                <div className='card comediantCard mx-auto'>
                    <img
                        src={pic}
                        className='card-img-top comediantImage'
                        alt={`Foto de ${name}`}
                    />
                    <div className=' card-body '>
                        <h5 className=' card-title text-center '>{name}</h5>
                        <h6 className=' me-auto text-center '>
                            <a target='_blank' href={`https://www.instagram.com/${ig}`}>
                                @{ig}
                            </a>
                        </h6>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
