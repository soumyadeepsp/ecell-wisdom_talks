import React from 'react';
import './WisdomTalk.css';

function WisdomTalk(props) {
    var youtubeLink = props["youtubeLink"];
    var ind = youtubeLink.indexOf('watch?v=');
    var id = youtubeLink.substring(ind+8, youtubeLink.length);
    console.log(id);
    return (
        <div className="wisdom_talk">
            <iframe width="420" height="315" src={`https://www.youtube.com/embed/${id}`}></iframe>
            <div className="info">
                <h1>{props["speakerName"]}</h1>
                <p>{props["about"]}</p>
                <br/><br/>
                <p>more info at <a href={props["moreInfo"]}>{props["moreInfo"]}</a></p>
            </div>
        </div>
    )
}

export default WisdomTalk