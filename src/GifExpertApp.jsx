import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Introduction']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		//Valorant
		// categories.push('Valorant');
		// setCategories(categories);

		setCategories([newCategory, ...categories]);
		// setCategories((cat) => [...cat, 'Valorant']);
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory onNewCategory={(event) => onAddCategory(event)} />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}

			{/* Gif Item */}
		</>
	);
};
