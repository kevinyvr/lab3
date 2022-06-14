function AlbumContainer(props) {
  return (
    <div className="albumContainer">
      {props.isShown}
      {props.isShown && (
        <div>
          <img src={props.coverImg} alt={props.name} />
          <ul>
            {props.tracks.map((track, i) => (
              <li key={"track" + i}>
                {i + 1}. {track}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AlbumContainer;
