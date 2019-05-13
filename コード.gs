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
    "text" : args[0],
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
