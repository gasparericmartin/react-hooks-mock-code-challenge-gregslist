import React, {useState} from "react";
import Search from "./Search";
import Sort from './Sort'

function Header({listingsList, displayListings, setDisplayListings}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        listingsList={listingsList} 
        setDisplayListings={setDisplayListings}
      />
      <Sort
        displayListings={displayListings}
        setDisplayListings={setDisplayListings} 
      />
    </header>
  );
}

export default Header;
