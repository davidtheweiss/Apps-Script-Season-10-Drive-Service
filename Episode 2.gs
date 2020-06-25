function myFunction() {
//  Logger.log(DriveApp.getRootFolder().getName());
//  DriveApp.getFolders().next()
//  DriveApp.getFoldersByName("Example Folder").next();
//  DriveApp.createFolder("Users").createFolder("Profile Data");
  DriveApp.getFoldersByName("Profile Data").next().setName("Profile Pictures");
}
