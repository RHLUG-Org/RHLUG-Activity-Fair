console.log("Running Kiosk App");
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      webviewTag: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
