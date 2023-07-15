import styles from './index.module.scss'
import { Props } from './types'

export const DropZone = ({
	onDragOver,
	onDragLeave,
	onDragEnd,
	onDrop,
	data,
}: Props) => {
	return (
		<div
			className={styles.zone}
			onDragOver={onDragOver}
			onDragLeave={onDragLeave}
			onDragEnd={(e) => {
				e.preventDefault()

				onDragEnd?.(e)
			}}
			onDrop={(e) => {
				e.preventDefault()

				onDrop?.(e, data)
			}}
		>
			Drop here
		</div>
	)
}
