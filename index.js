var fs = require('fs');
var path = require('path');
var _start = require('./_assets/js/plugin');
var Config = require('./_assets/js/config');

module.exports = {
    website: {
        assets: './_assets/',
        js: [
            'js/beauty.js',
            'js/copy-button.js'
        ],
        css: [
            'css/beauty.css',
            'css/navigation.css',
            'css/copy-button.css'
        ]
    },
    hooks: {
        "init": function() {
            Config.handlerAll(this);
        },
        "page": function (page) {
            if (Config.config.printLog) {
                console.info("INFO:".info + "当前正在处理:" + page.path)
            }
            var bookIns = this;
            _start(bookIns, page);
            return page;
        },
        finish: function () {
            var configOption = this.config.get('pluginsConfig')['theme-zzsk'];
            var output = configOption ? (configOption.output || '_book') : '_book';
            var pathFile;

            // favicon
            pathFile = configOption && configOption.favicon;
            if (pathFile) {
                var faviconPath = path.join(process.cwd(), pathFile);
                var gitbookFaviconPath = path.join(process.cwd(), output, 'gitbook', 'images', 'favicon.ico');
                if (fs.existsSync(faviconPath)) {
                    fs.writeFileSync(gitbookFaviconPath, fs.readFileSync(faviconPath));
                }
            }

            // appleTouchIconPrecomposed152
            pathFile = configOption && configOption.appleTouchIconPrecomposed152;
            if (pathFile) {
                var appleTouchIconPrecomposed152 = path.join(process.cwd(), pathFile);
                var gitbookAppleTouchPath = path.join(process.cwd(), output, 'gitbook', 'images', 'apple-touch-icon-precomposed-152.png');
                if (fs.existsSync(appleTouchIconPrecomposed152)) {
                    fs.writeFileSync(gitbookAppleTouchPath, fs.readFileSync(appleTouchIconPrecomposed152));
                }
            }

            //logo
            pathFile = configOption && configOption.logo;
            if(pathFile){
                var logoPath = path.join(process.cwd(), pathFile);
                var pluginLogoPath = path.join(process.cwd(), output, 'gitbook','gitbook-plugin-theme-zzsk',"logo.png");
                if (fs.existsSync(logoPath)) {
                    fs.writeFileSync(pluginLogoPath, fs.readFileSync(logoPath));
                }
            }
        }
    }
};