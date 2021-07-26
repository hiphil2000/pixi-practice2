import { Application, Container, Renderer } from "pixi.js";
import { IBaseObjectConfig, IObject } from "../objects/object";

interface IPixiAppConfig {
	width: number,
	height: number,
	view?: HTMLCanvasElement,
	objects?: Array<IObject<IBaseObjectConfig>>
}

export default class PixiApp {
	public readonly _config: IPixiAppConfig;

	// pixiapp
	public readonly _app: Application;
	
	// shrotcuts
	public readonly _renderer: Renderer;
	public readonly _view: HTMLCanvasElement;
	public readonly _stage: Container;

	// objects
	public readonly _objects: Array<IObject<IBaseObjectConfig>>

	constructor(config: IPixiAppConfig) {
		this._config = config;
		
		// init app
		this._app = new Application({
			width: config.width,
			height: config.height,
			antialias: true,
			view: config.view
		});

		// set shrotcuts
		this._renderer = this._app.renderer as Renderer;
		this._view = this._app.view;
		this._stage = this._app.stage;

		// init objects array
		this._objects = config.objects || [];
	}

	public GetObjects() {
		return this._objects;
	}

	public GetObject<C = IBaseObjectConfig>(id: string): IObject<C> {
		return this._objects.find(x => x.id === id) as IObject<C>;
	}
}