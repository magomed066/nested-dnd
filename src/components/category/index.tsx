import { DragEvent } from 'react'
import styles from './index.module.scss'
import { Props } from './types'
import { DropZone } from '../drop-zone'
import { CategorySub } from '../category-sub'

export const Category = ({ data, updateList }: Props) => {
	const { name } = data

	const dragStart = (event: DragEvent<HTMLSpanElement>) => {
		const target = event.target as HTMLSpanElement
		const draggingEl = target.closest(`.${styles.category}`)

		if (draggingEl) {
			draggingEl.classList.add(styles.dragging)

			event.dataTransfer.setData(
				'text/plain',
				String(draggingEl.getAttribute('data-id')),
			)
		}
	}

	const dragEnd = (event: DragEvent) => {
		const target = event.target as HTMLSpanElement
		const draggingEl = target.closest(`.${styles.category}`)

		if (draggingEl) {
			draggingEl.classList.remove(styles.dragging)
		}
	}

	const handleDragOver = (e: DragEvent) => {
		e.preventDefault()
		const target = e.target as HTMLDivElement

		target.classList.add(styles.dropZone)
	}

	const handleDragLeave = (e: DragEvent) => {
		const target = e.target as HTMLDivElement

		target.classList.remove(styles.dropZone)
	}

	const handleDrop = (e: DragEvent) => {
		e.preventDefault()

		const target = e.target as HTMLSpanElement
		const zone = target.closest(`.${styles.dropZone}`)

		if (zone) {
			zone.classList.remove(styles.dropZone)
		}

		const draggingId = Number(e.dataTransfer.getData('text/plain'))

		updateList(draggingId, data)
	}

	return (
		<div className={styles.category} onDragEnd={dragEnd} data-id={data.id}>
			<div className={styles.categoryTitle}>
				<span draggable onDragStart={dragStart}>
					Drag here
				</span>
				{name}
			</div>

			<div className={styles.subCategoories}>
				<div className={styles.subCategooriesContainer}>
					{data.children.map((item) => (
						<CategorySub data={item} key={item.id} />
					))}
				</div>

				<DropZone
					data={data}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
					onDragEnd={dragEnd}
				/>
			</div>
		</div>
	)
}
