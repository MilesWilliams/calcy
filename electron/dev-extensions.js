"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Install DevTool extensions when Electron is in development mode
 */
var electron_1 = require("electron");
var isDev = process.env.NODE_ENV !== 'production';
if (isDev) {
    var installExtension_1 = require('electron-devtools-installer').default;
    var extensions_1 = [
        { name: 'Redux DevTools', id: 'lmhkpmbekcpmknklioeibfkpmmfibljd' },
    ];
    electron_1.app.once('ready', function () {
        var userDataPath = electron_1.app.getPath('userData');
        extensions_1.forEach(function (ext) {
            installExtension_1(ext.id).then(function () {
                console.log(ext.name + ' installed in ' + userDataPath);
            }).catch(function (err) {
                console.error('Failed to install ' + ext.name, err);
            });
        });
        require('devtron').install();
    });
}
//# sourceMappingURL=dev-extensions.js.map