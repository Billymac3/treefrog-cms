<<<<<<< HEAD
var TREEFROG_SERVICE = (function() {
  var _getGetStartedContent = function() {
    let contentStr = `<h1>Treefrog CMS</h1><p>This is the screen where you will create your navigation and page content.</p><p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to.</p><p>Once you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.</p>`;

    return contentStr;
  };

  var _getCreateNavButtons = function() {
    let buttonString = `<span class="btn btn-dark">Create Main Nav</span><span class="btn btn-dark">Create Sub Nav</span>`;

    return buttonString;
  };

  var _getHomeContent = function() {
    let homeContent = `<h1>Welcome to the Treefrog CMS</h1>
    <p>
      Here you will create your content for your webpages. You won't be able
      to create all page elements but only the content for the page.
    </p>

    <p>
      You must first create the navigation. Once you have the navigation
      created you can add page content and publish the page. You can even
      add sub navigation as well.
    </p>

    <p>
      Your fist step is to click on the Add Navigation link and add your
      first navigation link.
    </p>`;

    return homeContent;
  };

  var _getHomeStartButton = function() {
    let startBtn = `<span class="btn btn-dark get-started">Get Started</span>`;

    return startBtn;
  };

  return {
    getGetStartedContent: _getGetStartedContent,
    getCreateNavButtons: _getCreateNavButtons,
    getHomeContent: _getHomeContent,
    getHomeStartButton: _getHomeStartButton
  };
})();
=======
var TREEFROG_SERVICE = (function(){

    var _getGetStartedContent = function(){
        let contentStr = `<h1>Get Started Content</h1><p>This is the screen where you will create your navigation and page content.

        </p><p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to.

        </p><p>Once you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.

        </p>`;

        return contentStr;
    };

    var _getCreateNavButton = function(){
        let buttonString =`<span  class="btn btn-dark get-started">Create Main Nav</span><span  class="btn btn-dark get-started">Create Sub Nav</span>`;

        return buttonString;
    };

    var _getHomeStartButton = function() {
        let startBtn = `<span  class="btn btn-dark get-started">Get Started</span>`
    }

    return {
        getGetStartedContent: _getGetStartedContent,
        getCreateNavButton: _getCreateNavButton
    }
})();
>>>>>>> fd71f9298950960f438dacf371f64a080a2c6408
