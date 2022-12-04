const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
export const sendMessage= functions.database.ref('/messages/{messageId}').onWrite(async (event, context) =>{
 const message= event.after.val()
const name = message.textInput
    const token = message.token
    const payload = {
           notification: {
             title: 'Message:',
             body: message ,
             sound : "default"
           }
    };
    return admin.messaging().sendToDevice(token, payload)
})