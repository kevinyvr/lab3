function AlbumListing(props, onShow) {
  return (
    <div onClick={props.onShow} className="albumInfo">
      <img src={props.coverImg} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}

export default AlbumListing;
