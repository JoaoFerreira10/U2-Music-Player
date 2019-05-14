import React from 'react';
import '../style/style.css';

const MusicItem = ({music, selected, playMusic}) => {
    return(<tr onClick={(event) => playMusic(music, event)} className="music-item">
        <td className="text-left"><img src={music.album.cover_small} width="40" height="40"/></td>
        <td className="text-left">{music.title_short}</td>
        <td className="text-left">{getTimeinMinutes(music.duration)}</td>
        <td className="text-left">{music.album.title}</td>
        <td className="selected-icon"><span className={selected === music.id ? "glyphicon glyphicon-volume-up":""}></span></td>
    </tr>);
}

const getTimeinMinutes = (seconds) => {
    const decimalMinutes = parseInt(seconds)/60;
    const minutes = Math.floor(decimalMinutes);
    const secondsIn100 = (decimalMinutes -  Math.floor(decimalMinutes)).toFixed(2) * 100;
    const secondsF = Math.floor(secondsIn100 * 60/100);
    return  `${minutes}:${secondsF}`;
}

export default MusicItem;