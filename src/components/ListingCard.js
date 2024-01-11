import React, {useState} from "react";

function ListingCard({listing, listingsList, setListingsList}) {
  const [favorite, setFavorite] = useState(false)

  function handleFavorite() {
    setFavorite(!favorite)
  }

  function handleItemDelete() {
    const updatedList = listingsList.filter((oldListing) => {
      return (oldListing.id !== listing.id)
    })
    
    fetch (`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then(setListingsList(updatedList))
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button 
          className="emoji-button favorite active"
          onClick={handleFavorite}>★</button>
        ) : (
          <button 
          className="emoji-button favorite"
          onClick={handleFavorite}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button 
        className="emoji-button delete"
        onClick={handleItemDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
