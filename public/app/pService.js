var PRACTICE_SERVICE = (function() {
  var _db;
  var _currentPageID;

  var _getAllData = function(callback) {
    _db
      .collection("Pages")
      .get()
      .then(function(querySnapshot) {
        callback(querySnapshot);
      });
  };

  var _addData = function(navName, callback) {
    // start loading screen
    let pageFakeData = {
      navName: navName,
      content: "<h1>HELLO</h1>",
      subNavs: []
    };

    _db
      .collection("Pages")
      .add(pageFakeData)
      .then(function(docRef) {
        // remove loading screen
        console.log("Document written with ID: ", docRef.id);
        callback("new Navigation Added");
      })
      .catch(function(error) {
        // remove loading screen
        // add alert for error
        console.log("Error adding document: ", error);
      });
  };

  var _checkPages = function(mainNavName, callback) {
    var pages = _db.collection("Pages");
    pages
      .where("navName", "==", mainNavName)
      .get()
      .then(function(querySnapshot) {
        if (querySnapshot.empty) {
          _addData(mainNavName, callback);
        } else {
          callback("Duplicate");
        }
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  var _initFirebase = function(callback) {
    // call loader
    firebase
      .auth()
      .signInAnonymously()
      .then(function(result) {
        console.log("connected");
        _db = firebase.firestore();
        // stop loader
        callback();
      });
  };

  return {
    initFirebase: _initFirebase,
    checkPages: _checkPages,
    getAllData: _getAllData
  };
})();
