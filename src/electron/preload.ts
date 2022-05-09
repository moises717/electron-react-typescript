import {contextBridge, ipcRenderer} from 'electron';
import fs from 'fs';

interface PathInfo {
	path: string;
}

contextBridge.exposeInMainWorld('electronAPI', {
	get: () => {
		console.log('get');
	},
	selectPath: async () => {
		const paths: PathInfo[] = [];
		const resp = await ipcRenderer.invoke('selectPath');

		fs.readdirSync(resp[0]).forEach((file) => {
			// get jpg files
			paths.push({path: resp[0] + '\\' + file});
		});
		return paths;
	},
});
