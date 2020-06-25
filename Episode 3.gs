function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate().setTitle("Puppygram").setFaviconUrl('https://image.flaticon.com/icons/png/512/534/534096.png');
}

function includeExternalFile(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getPhotos() {
  let urlArray = [];
  let downloadUrl = '';
  const fileIterator = DriveApp.getFoldersByName("Profile Pictures").next().getFilesByType(MimeType.JPEG);
  
  while (fileIterator.hasNext()) {
    downloadUrl = fileIterator.next().getDownloadUrl().replace('download', 'view');
    urlArray.push(downloadUrl);
  }
  
  return urlArray;
}

function uploadPhoto(e) {
  const blob = Utilities.newBlob(e.bytes, MimeType.JPEG, e.filename);
  const file = DriveApp.getFoldersByName("Profile Pictures").next().createFile(blob);
  return [file.getDownloadUrl().replace('download', 'view')];
}

function setName() {
  DriveApp.getFilesByName('IMG_6235.JPG').next().setName("Duke6.JPG");
}
