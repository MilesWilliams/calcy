/*
 * Install DevTool extensions when Electron is in development mode
 */
import { app } from 'electron';

const isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
  const installExtension = require('electron-devtools-installer').default;

  const extensions = [
    { name: 'Redux DevTools', id: 'lmhkpmbekcpmknklioeibfkpmmfibljd' },
  ];

  app.once('ready', () => {
    const userDataPath = app.getPath('userData');
    extensions.forEach(ext => {
      installExtension(ext.id).then(() => {
        console.log(ext.name + ' installed in ' + userDataPath);
      }).catch(err => {
        console.error('Failed to install ' + ext.name, err);
      });
    });
    require('devtron').install();
  });

}
