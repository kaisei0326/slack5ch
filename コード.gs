/*
function doPost(e) {  
  var verificationToken = e.parameter.token;
  if (verificationToken != 'MqZTocUJb2RF7yfYmD72lSnj') { // AppのVerification Tokenを入れる
    throw new Error('Invalid token');
  }
  
  var command = e.parameter.text
  var response = { text: command };
  
  var ch = "CFG3HU6TA"

  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}
*/

function doPost(e) {
  //Get properties.
  var token =  PropertiesService.getScriptProperties().getProperty('TOKEN');
  if (!e) {
    throw new Error("invalid request.");
  }

  if (token != e.parameter.token) {
    throw new Error("invalid token.");
  }
  
  // メッセージ生成
  var message = e.parameter.text;
  var args = message.split(' ');
  var payload = {
    "text" : args[0] + " you received " + args[1] + ":pancakes: from <@" + e.parameter.user_id + ">",
    "attachments" : [
      {
        "text" : args[2]
      }
    ],
    "channel" : "CFG3HU6TA",
  }
  
  var url = PropertiesService.getScriptProperties().getProperty('INCOMING_URL');
  
  // レスポンスを返す
  sendResponse(payload, url);

  // コマンドに返答
  var res = {
    "attachments": [
        {
          "color": "good",
            "text":"コマンドを受け付けました"
        }
    ]
  }
  
  return ContentService.createTextOutput(JSON.stringify(res)).setMimeType(ContentService.MimeType.JSON);
}

function sendResponse(payload, url) {

  var options = {
    "method" : "POST",
    "payload" : JSON.stringify(payload)
  }
  
  var response = UrlFetchApp.fetch(url, options);
  var content = response.getContentText("UTF-8");
}
