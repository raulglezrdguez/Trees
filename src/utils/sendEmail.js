import Mailer from 'react-native-mail';
import {Alert} from 'react-native';

export const sendEmail = externalPath => {
  Mailer.mail(
    {
      subject: 'report',
      recipients: ['raulglezrdguez69@gmail.com'],
      body: 'Report',
      isHTML: false,
      attachments: [
        {
          path: externalPath,
          type: 'csv', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
        },
      ],
    },
    (error, event) => {
      if (error !== undefined) {
        Alert.alert(
          error,
          event,
          [
            {
              text: 'Ok',
              onPress: () => console.log('OK: Email Error Response'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('CANCEL: Email Error Response'),
            },
          ],
          {cancelable: true},
        );
      }
    },
  );
};
