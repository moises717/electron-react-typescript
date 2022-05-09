import {app, BrowserWindow, dialog, ipcMain} from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require('electron-squirrel-startup')) {
	app.quit();
}

const createWindow = (): void => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		height: 600,
		width: 800,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
		},
	});

	mainWindow.webContents.openDevTools();

	process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true' as string;

	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

	// Open the DevTools.
	mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

ipcMain.handle('selectPath', async () => {
	const dialogo = await dialog.showOpenDialog({properties: ['openDirectory']});
	return dialogo.filePaths;
});
