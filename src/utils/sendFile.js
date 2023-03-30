import RNFS from 'react-native-fs';

import {getDateTime} from './getDateTime';
import {removeFiles} from './removeFiles';
import {sendEmail} from './sendEmail';

/**
 * It takes an array of trees,
 * removes any existing files in the app's document directory,
 * creates a new file with the current date and time,
 * writes the tree keys to the file,
 * and then sends the file as an email attachment
 */
export const sendFile = async trees => {
  await removeFiles();

  if (trees.length > 0) {
    const str = trees.map(t => t.key).join('\r\n');
    const currentDate = getDateTime().split(':').join('-');

    const path = RNFS.DocumentDirectoryPath + `/test${currentDate}.csv`;
    RNFS.writeFile(path, str, 'utf8')
      .then(success => {
        console.log('FILE WRITTEN!');
        sendEmail(path);
      })
      .catch(err => {
        console.log(err.message);
      });
  }
};
