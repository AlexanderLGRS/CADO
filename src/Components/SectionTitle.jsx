import React from 'react';
import './Styles/SectionTitle.css'

export default function SectionTitle(props) {
    const { title, id } = props;
    return (
        <React.Fragment>
            <div class='container-fluid text-center sectionTitle' id={id}>
                <div class='row'>
                    <div class='col my-4 text-light'>
                        <h1 class='text-uppercase text-center'>{title}</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
