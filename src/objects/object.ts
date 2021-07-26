export interface IObject<T> {
	id: string;
	destroy: () => void;
	render: () => void;
}

export interface IBaseObjectConfig {
	x: number;
	y: number;
	backgroundColor: number;
	lineStyle: {
		width: number;
		color: number;
	};
}