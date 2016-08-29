import { BASE_URI } from "./constants";

let API = {
	fetch(endpoint) {
		return new Promise((resolve, reject) => {
		    let uri = `${BASE_URI}/${endpoint}`;
		    let request = new XMLHttpRequest();

		    request.open("GET", uri, true);
		    request.onload = () => {
		        if (request.status >= 200 && request.status < 400) {
		            resolve(JSON.parse(request.response));
		        }
		    };
		    request.onerror = () => {
		        reject(new Error("Something went wrong on the API"));
		    };

		    request.send();
		});
	}
}

export default API;
