import { DragEvent } from 'react'
import styles from './index.module.scss'
import { Props } from './types'

export const CategorySub = ({ data }: Props) => {
	const dragStart = (
		event: DragEvent<HTMLSpanElement>,
		parentClassName: string,
	) => {
		const target = event.target as HTMLSpanElement
		const draggingEl = target.closest(`.${parentClassName}`)

		if (draggingEl) {
			draggingEl.classList.add(styles.dragging)

			const id = draggingEl.getAttribute('data-id')

			event.dataTransfer.setData('text/plain', String(id))
		}
	}

	return (
		<div className={styles.categorySub} data-id={data.id}>
			<div className={styles.categorySubTitle}>
				<span draggable onDragStart={(e) => dragStart(e, styles.categorySub)}>
					Drag here
				</span>
				{data.name}
			</div>

			<div className={styles.categorySubList}>
				{data.children.map((item) => (
					<div key={item.id} data-id={item.id} className={styles.thirdNested}>
						<div className={styles.categorySubListItemTitle} data-id={item.id}>
							<span
								draggable
								onDragStart={(e) => dragStart(e, styles.thirdNested)}
							>
								Drag here
							</span>
							{item.name}
						</div>

						{item.children.map((c) => (
							<div key={c.id} className={styles.lastNested} data-id={c.id}>
								<div className={styles.categorySubListItemLastTitle}>
									<span
										draggable
										onDragStart={(e) => dragStart(e, styles.lastNested)}
									>
										Drag here
									</span>
									{c.name}
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}
