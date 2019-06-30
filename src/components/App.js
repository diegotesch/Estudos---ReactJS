import React from 'react';

import Post from './Post';

export default class App extends React.Component {
	render() {
    	return ( 
    		<div>
    			<h1> Hello World! </h1>
    			<Post title="Aprendendo React titulo1" />
    			<Post title="Segundo titulo" />
    			<Post title="terceiro titulo" />
    			<Post title="quarto e ultimo titulo" />
			</div>
		);
    }
}