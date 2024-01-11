import React, {useState} from "react";
import Search from "./Search";

function Header({listingsList, setDisplayListings}) {
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
    </header>
  );
}

export default Header;
