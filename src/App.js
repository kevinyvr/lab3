// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

import { albums } from "./data";
import AlbumListing from "./AlbumListing";
import AlbumContainer from "./AlbumContainer";
import { useState } from "react";
import "./styles.css";

function App() {
  const [shownIndex, setShownIndex] = useState(0);
  return (
    <div className="mainContent">
      <div className="albumList">
        <h3>Select an Album</h3>
        {albums.map((album) => (
          <AlbumListing
            key={album.id}
            onShow={() => setShownIndex(album.id)}
            coverImg={album.coverImg}
            name={album.name}
          />
        ))}
      </div>
      <div className="albumContainer">
        {albums.map((album) => (
          <AlbumContainer
            isShown={shownIndex === album.id}
            key={album.id}
            coverImg={album.coverImg}
            name={album.name}
            tracks={album.tracks}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
