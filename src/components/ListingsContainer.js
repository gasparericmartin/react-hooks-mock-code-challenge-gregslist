import React, {useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingsList, 
                            setListingsList, 
                            displayListings, 
                            setDisplayListings}) 
                          {

  
  useEffect(() => {
    fetch('http://localhost:6001/listings')
  .then((response) => response.json())
  .then((listings) => {
    setListingsList(listings)
    setDisplayListings(listings)})
  }, [])

  
  return (
    <main>
      <ul className="cards">
        {displayListings.map((listing) => {
          return (
          <ListingCard key={listing.id} 
                      listing={listing}
                      listingsList={listingsList}
                      setListingsList={setListingsList}
          />
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
