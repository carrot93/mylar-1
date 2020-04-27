Package.describe({
    summary: "Standard Mylar packages",
    name: "shjiaye:platform",
    version: "0.3.2",
    git: "https://github.com/carrot93/mylar-1.git"
});

Package.onUse(function (api) {
    api.imply([
        // principal graph
        'mylar:principal@0.2.0',
        // login service for IDP accounts
        'mylar:accounts-idp@0.2.0',
        // meteor changes
        'shjiaye:meteor-changes@0.3.2',
    ]);
});
