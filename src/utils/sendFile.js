import RNFS from 'react-native-fs';

import {getDateTime} from './getDateTime';
import {sendEmail} from './sendEmail';

export const sendFile = async trees => {
  const str = trees.map(t => t.key).join('\r\n');
  const currentDate = getDateTime().split(':').join('-');
  const path = RNFS.ExternalDirectoryPath + `/test${currentDate}.csv`;
  RNFS.writeFile(path, str, 'utf8')
    .then(success => {
      console.log('FILE WRITTEN!');
      sendEmail(path);
    })
    .catch(err => {
      console.log(err.message);
    });
};
