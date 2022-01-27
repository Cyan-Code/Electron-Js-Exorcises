"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
electron_1.app.on('ready', createWindow);
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 900, height: 600,
        webPreferences: {
            preload: __dirname + "/preload.js"
        },
        show: false
    });
    mainWindow.loadFile("./index.html");
    mainWindow.on("ready-to-show", function () { return mainWindow.show(); });
}
