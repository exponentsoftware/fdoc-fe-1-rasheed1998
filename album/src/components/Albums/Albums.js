import React from "react";
import "./Albums.css";
import { data } from "../Data";
import Album from "../Album/Album";

const Albums = () => {
  
  return (
    <div className="albums_container">
      {data.map((item) => {
        console.log(item);
        const { id, artist, album, image, title, song } = item;
        return (
          <Album
            id={id}
            artist={artist}
            album={album}
            title={title}
            image={image}
            song={song}
          />
        );
      })}
    </div>
  );
};

export default Albums;
