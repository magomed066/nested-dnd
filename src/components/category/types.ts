import { CategoryModel } from '../../App'

export interface Props {
	data: CategoryModel
	updateList: (draggingId: number, targetItem: CategoryModel) => void
}
