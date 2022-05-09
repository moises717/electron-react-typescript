import {DataImg} from '../app/App';

export interface IElectronAPI {
	get: () => DataImg[];
	selectPath: () => Promise<DataImg[]>;
}

declare global {
	interface Window {
		electronAPI: IElectronAPI;
	}
}
