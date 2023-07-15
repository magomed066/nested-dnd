import { DragEvent } from 'react'

export interface Props {
	onDragOver?: (e: DragEvent) => void
	onDragLeave?: (e: DragEvent) => void
	onDragEnd?: (e: DragEvent) => void
	onDrop?: (e: DragEvent, data: { name: string }) => void
	data: { name: string }
}
