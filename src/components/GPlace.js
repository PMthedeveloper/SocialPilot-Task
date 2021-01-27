import React, { useEffect, useRef, useState } from "react";

const GPlace = () => {
  const placeInputRef = useRef(null);
  const [place, setPlace] = useState(null);
	const addr = localStorage.getItem('add');

  useEffect(() => {
    initPlaceAPI();
  }, []);

  // initialize the google place autocomplete
  const initPlaceAPI = () => {
    let autocomplete = new window.google.maps.places.Autocomplete(placeInputRef.current);
    new window.google.maps.event.addListener(autocomplete, "place_changed", function () {
      let place = autocomplete.getPlace();
      setPlace({
        address: place.formatted_address,
      });
    });
  };

  return (
    <>
      <input type="text" 
				   className="form-control form-control-lg" ref={placeInputRef} value={addr?addr:place}  required/>
      {place && <div style={{ marginTop: 20, lineHeight: '0px' }}>
      </div>}
    </>
  );
};

export default GPlace;