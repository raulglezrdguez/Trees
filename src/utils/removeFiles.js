// require the module
import RNFS from 'react-native-fs';

/**
 * It removes all files in the app's document directory
 * that start with the word "test"
 */
export const removeFiles = async () => {
  try {
    /* Reading the directory of the app's document directory. */
    const items = await RNFS.readDir(RNFS.DocumentDirectoryPath);
    /* Looping through the files and folders in the directory and
    deleting the ones that are files and start with the word "test" */
    for (let i = 0; i < items.length; i++) {
      if (items[i].isFile() && items[i].name.startsWith('test')) {
        console.log(items[i].name);
        await RNFS.unlink(items[i].path);
      }
    }
  } catch (err) {
    console.log(err);
  }
};
