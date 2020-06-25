function myFunction() {
  const folderIterator = DriveApp.getFolders();
//  while (folderIterator.hasNext()) {
//    Logger.log(folderIterator.next().getName());
//  }
  folderIterator.next().getName();
  continuationToken = folderIterator.getContinuationToken();
  DriveApp.continueFolderIterator(continuationToken)
}
