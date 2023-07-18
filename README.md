# Gitbook theme for theme-zzsk Docs

## Usage

Add the theme to your book's configuration `book.json` or `book.js`:

```js
{
    "plugins": [
        "theme-skdoc"
    ],
    "variables": {
        "themeSkdoc":{
            "nav":[
                {
                    "url":"http://...",
                    "target":"_blank",
                    "name": "简易教程"
                }
            ]
        },
    },
    "pluginsConfig": {
        "theme-skdoc":{
            "search-placeholder":"输入关键字搜索", //搜索框提示信息
            "logo":"./logo.png", //logo地址
            "favicon": "./favicon.ico" //ico地址
        }
    }
},
```

Install by command:

``` bash
gitbook install
```
