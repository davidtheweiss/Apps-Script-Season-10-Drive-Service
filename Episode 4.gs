function myFunction() {
  const file = DriveApp.getFilesByName("Sharable Spreadsheet").next();

  //file.addEditor("weissdav@sas.upenn.edu");
  //file.setShareableByEditors(false);
  //file.removeEditor("weissdav@sas.upenn.edu");
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
}
