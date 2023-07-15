import { CategoryList } from './components'

export interface CategoryModel {
	id: number
	name: string
	children: CategoryModel[]
}

const data: CategoryModel[] = [
	{
		id: 1,
		name: 'Laptop',
		children: [
			{
				id: 4,
				name: 'Macbook Pro Version',
				children: [
					{
						id: 5,
						name: 'MacBook Pro 13',
						children: [
							{ id: 7, name: 'Macbook Pro 13 8/512', children: [] },
							{ id: 8, name: 'Macbook Pro 13 16/512', children: [] },
						],
					},
					{ id: 6, name: 'MacBook Pro 14', children: [] },
				],
			},
			{
				id: 9,
				name: 'Macbook Air Version',
				children: [
					{
						id: 10,
						name: 'MacBook Air 13',
						children: [{ id: 11, name: 'Macbook Air 13 8/512', children: [] }],
					},
					{ id: 12, name: 'MacBook Air 14', children: [] },
				],
			},
		],
	},
	{ id: 2, name: 'Phone', children: [] },
	{ id: 3, name: 'Tv', children: [] },
]

function App() {
	return (
		<main className="main">
			<div className="container">
				<h1>Categories</h1>

				<CategoryList data={data} />
			</div>
		</main>
	)
}

export default App
