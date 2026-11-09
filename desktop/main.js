// Chấm Trắc Nghiệm LKT – bản Windows (Electron)
const { app, BrowserWindow, session, shell, Menu } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 820, minWidth: 380, minHeight: 600,
    title: 'Chấm Trắc Nghiệm LKT', icon: path.join(__dirname, 'app', 'icon-512.png'),
    backgroundColor: '#f3f3f3', autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, sandbox: true }
  });
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/.test(url)) { shell.openExternal(url); return { action: 'deny' }; }
    return { action: 'allow', overrideBrowserWindowOptions: { autoHideMenuBar: true, width: 900, height: 1100 } };
  });
  win.loadFile(path.join(__dirname, 'app', 'index.html'));
}
app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  // Cho phép camera (chấm liên tục bằng webcam / camera USB) và lưu file
  session.defaultSession.setPermissionRequestHandler((wc, perm, cb) => cb(['media', 'mediaKeySystem', 'clipboard-sanitized-write', 'notifications', 'fullscreen'].includes(perm)));
  session.defaultSession.setPermissionCheckHandler((wc, perm) => ['media', 'clipboard-sanitized-write'].includes(perm));
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => app.quit());
