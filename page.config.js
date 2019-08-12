const withStylePages = [ // 样式测试，在src下新建文件夹，然后在这里添加同名元素即可
    {
        name: 'home',
        CNName: 'home'
    }, {
        name: 'grailLayout',
        CNName: '圣杯/双飞翼布局'
    }
]

const pureScriptPages = [ // js、算法测试，在pureScript下新建文件，然后在这里添加同名元素即可
    {
        name: 'jstest',
        CNName: 'js测试'
    }
    
]

const pageConfigs = withStylePages.map((page) => {
    const {name} = page;
    return {
        'name': `${name}`,
        'entry': `src/containers/${name}/index.jsx`,
        'template': `src/index.tmpl.html`,
        'filename': `${name}/index.html`
        
    }
}).concat(pureScriptPages.map((page) => {
    const {name} = page;
    return {
        'name': `${name}`,
        'entry': `src/containers/pureScript/${name}.jsx`,
        'template': `src/index.tmpl.html`,
        'filename': `pureScript/${name}.html`
    }
}))

exports.withStylePages = withStylePages;
exports.pureScriptPages = pureScriptPages;
exports.pageConfigs = pageConfigs;
