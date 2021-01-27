import React,{useState,useEffect} from "react";
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import GPlace from "./GPlace";

// API key of the google map
const GOOGLE_MAP_API_KEY = '<API-KEY>';

// load google map script
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}

export default function Add(){
	const bath = localStorage.getItem('bath');
	const bed = localStorage.getItem('bed');
	const desc = localStorage.getItem('desc');
	const [loadMap, setLoadMap] = useState(false);

	
	useEffect(() => {
		loadGoogleMapScript(() => {
		  setLoadMap(true)
		});
	  }, []);
	return(
		<div>
				<div className="container">
				<div className="w-75 mx-auto shadow p-5">
					<h2 className="text-center mb-4">Add Data</h2>
					<div className="form-group">
					{!loadMap ? <div>Loading...</div> : <GPlace />}
					
					</div>
					<div className="form-group">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="Bedroom"
								max="10"
								min="1"
								maxLength='10'
								value={bed?bed:''}
								required
                                 />
                        </div>
					<div className="form-group">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="Bathroom"
								max="5"
								min="1"
								maxLength='5'
								value={bath?bath:''}
								required
                                 />
                        </div>
					<div className="form-group">
					<textarea value={desc?desc:''} className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Description of the Property" ></textarea>
                        </div>
						<Switch>
						<Link className="btn btn-primary btn-block" to="/imgup"  type="submit"
						>Submit</Link>
						</Switch>
				</div>
			
          </div>
		</div>
	)

}
