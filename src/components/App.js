import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingsList, setListingsList] = useState([])
  const [displayListings, setDisplayListings] = useState(listingsList)
  
  return (
    <div className="app">
      <Header 
        listingsList={listingsList} 
        setDisplayListings={setDisplayListings}
      />
      <ListingsContainer 
        listingsList={listingsList} 
        setListingsList={setListingsList}
        displayListings={displayListings}
        setDisplayListings={setDisplayListings}
      />
    </div>
  );
}

export default App;
