function doPost(e) {
  var command = e.parameter.text;
  var response = { text: command };

  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}