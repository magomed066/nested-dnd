export function findById<T extends { id: number; children: T[] }>(
	tree: T[],
	nodeId: number,
): T | null {
	for (const node of tree) {
		if (node.id === nodeId) return node

		if (node.children) {
			const desiredNode = findById(node.children, nodeId)
			if (desiredNode) return desiredNode
		}
	}

	return null
}

export function replaceById<T extends { id: number; children: T[] }>(
	arr: T[],
	id: number,
	newObj: T,
): T[] {
	return arr.map((item) => {
		if (item.id === id) {
			if (Array.isArray(item.children)) {
				return { ...item, children: [...item.children, newObj] }
			} else {
				return { ...item, children: [newObj] }
			}
		} else if (item.children) {
			const newChildren = replaceById(item.children, id, newObj)
			if (newChildren !== item.children) {
				return { ...item, children: newChildren }
			}
		}
		return item
	})
}
export function replaceChildrenById<T extends { id: number; children: T[] }>(
	tree: T[],
	parentId: number,
	newChildren: T[],
): T[] {
	const newTree = tree.map((node) => {
		if (node.id === parentId) {
			return { ...node, children: newChildren }
		} else if (node.children) {
			return {
				...node,
				children: replaceChildrenById(node.children, parentId, newChildren),
			}
		}
		return node
	})
	return newTree
}

export function recursiveRemove<T extends { id: number; children: T[] }>(
	list: T[],
	id: number,
): T[] {
	return list
		.map((item) => {
			return { ...item }
		})
		.filter((item) => {
			if ('children' in item) {
				item.children = recursiveRemove(item.children, id)
			}
			return item.id !== id
		})
}
