import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem.js';

const CharacterGrid = ({ items, isLoading }) => {
	return (
		isLoading ?
		(
			<div>
			loading...
			</div>
		):
		(
			<section className='cards'>
				{items.map(item => (
					<CharacterItem key={item.char_id} item={item}/>
				))}
			</section>
		)
		
	)
}

export default CharacterGrid;