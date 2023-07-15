import { Category } from '..'
import { CategoryModel } from '../../App'
import { useState } from 'react'
import styles from './index.module.scss'
import {
	findById,
	recursiveRemove,
	replaceById,
	replaceChildrenById,
} from '../../utils'

interface Props {
	data: CategoryModel[]
}

export const CategoryList = ({ data }: Props) => {
	const [list, setList] = useState<CategoryModel[]>(data)

	const update = (id: number, el: CategoryModel) => {
		const elem = findById(list, id)

		console.log(id, el)
		if (elem) {
			const filteredData = recursiveRemove(list, elem.id)

			const newData = replaceById(filteredData, el.id, elem)

			setList(newData)
		}
	}

	return (
		<div className={styles.categoryList}>
			{list.map((item) => (
				<Category key={item.id} data={item} updateList={update} />
			))}
		</div>
	)
}
