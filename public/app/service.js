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
