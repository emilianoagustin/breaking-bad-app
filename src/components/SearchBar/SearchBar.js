import React, { useState } from 'react';

const SearchBar = ({ getQuery }) => {
	const [text, setText] = useState('');
	const onChange = (inputValue) => {
		setText(inputValue)
		getQuery(inputValue)
	};

	return (
		<div>
			<form className='search'>
				<input 
					type="text" 
					className='form-control' 
					placeholder='Search characters'
					autoFocus
					value={text}
					onChange={(e) => onChange(e.target.value)}
				/>
			</form>
		</div>
	)
}

export default SearchBar;