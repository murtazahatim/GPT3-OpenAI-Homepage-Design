import React from 'react';
import './possibility.css';
import vrlady from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className="gpt3__possibility" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={vrlady} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <p className="gpt3__possibility-content__preheading">Request Early Access to Get Started</p>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p className="gpt3__possibility-content__text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <p className="gpt3__possibility-content__subtext">Request Early Access to Get Started</p>
            </div>
        </div>
    )
}

export default Possibility
