import React, {useState} from "react";

function Search({listingsList, setDisplayListings}) {
const [searchInfo, setSearchInfo] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    setDisplayListings(listingsList.filter((listing) => {
      if (listing.description.toLowerCase().includes(searchInfo.toLowerCase())) {
      return (
        listing
      )}
      else if (searchInfo === '') {
        return listing
      }
    }))
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInfo}
        onChange={(e) => setSearchInfo(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
