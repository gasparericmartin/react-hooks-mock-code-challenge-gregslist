import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import AddNewListing from './AddNewListing'

function App() {
  const [listingsList, setListingsList] = useState([])
  const [displayListings, setDisplayListings] = useState(listingsList)

  
  return (
    <div className="app">
      <Header 
        listingsList={listingsList} 
        displayListings={displayListings}
        setDisplayListings={setDisplayListings}
      />
      <ListingsContainer 
        listingsList={listingsList} 
        setListingsList={setListingsList}
        displayListings={displayListings}
        setDisplayListings={setDisplayListings}
      />
      <AddNewListing 
        displayListings={displayListings} 
        setDisplayListings={setDisplayListings}
      />
    </div>
  );
}

export default App;
