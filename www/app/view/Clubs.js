Ext.define('StravaPG.view.Clubs', {
    extend: 'Ext.List',
    xtype: 'clubs',

    config: {
        title: 'Clubs',
        cls: 'x-clubs',

        store: 'Clubs',
        itemTpl: [
            '<div><strong>{name}</strong></div>'
        ].join('')
    }
});