import React from 'react';
import MusicItem from './MusicItem';

const MusicList = ({musics, selected, playMusic}) => {

    if(!musics)
        return <div>No results</div>;
  
    const musicList = musics.map(music => <MusicItem key={music.id} music={music} selected={selected} playMusic={playMusic}></MusicItem>);

    return(<table className="table table-dark">
        <thead>
            <tr>
                <th className="col-md-2 col-xs-2">Cover</th>
                <th className="col-md-4 col-xs-4">Title</th>
                <th className="col-md-1 col-xs-1">Duration</th>
                <th className="col-md-4 col-xs-4">Album</th>
                <th className="col-md-1 col-xs-1"></th>
            </tr>
        </thead>
        <tbody>
            {musicList}
        </tbody>
    </table>);
}

export default MusicList;