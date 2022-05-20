import React, { useState } from 'react';

const ApiCallClick = () => {
	let [ simpsons, setSimpsons ] = useState({});
	let [ apiLoaded, setApiLoaded ] = useState(false);

	const simpsonsCall = () => {
		fetch('https://simpsons-quotes-api.herokuapp.com/quotes').then((response) => response.json()).then((data) => {
			setSimpsons(data);
			setApiLoaded(true);
		});
	};

	return (
		<div className="centered-content">
			<button onClick={simpsonsCall}>Click</button>
			{apiLoaded &&
				simpsons.map((element, index) => {
					return (
						<div key={index}>
							<h2>{element.quote}</h2>
							<h3>{element.character}</h3>
							<img src={element.image} alt=" A picture of a simpson character" />
						</div>
					);
				})}
		</div>
	);
};

export default ApiCallClick;
