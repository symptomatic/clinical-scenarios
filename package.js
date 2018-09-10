Package.describe({
    name: 'symptomatic:clinical-scenarios',
    version: '0.1.0',
    summary: 'Example Symptomatic plugin, with dynamic routes and UI elements.',
    git: 'https://github.com/symptomatic/clinical-scenarios',
    documentation: 'README.md'
});
  
Package.onUse(function(api) {
    api.versionsFrom('1.4');
    
    api.use('meteor-platform');
    api.use('ecmascript');
    api.use('react-meteor-data@0.2.15');
    api.use('session');
    api.use('mongo');

    api.addFiles('server/methods.js', 'server');

    api.addFiles('data/example.scenario.json', ["server", "client"], {isAsset: true});   

    // api.mainModule('index.jsx', 'client');
});


Npm.depends({
    "moment": "2.20.1",
    "lodash": "4.17.4",
    "react": "16.2.0",
    "react-dom": "16.4.1"
})