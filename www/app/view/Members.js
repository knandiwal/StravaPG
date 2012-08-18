Ext.define('StravaPG.view.Members', {
    extend: 'Ext.List',
    xtype: 'members',

    config: {
        title: 'Club Members',
        cls: 'x-club-members',

        store: 'Athletes',
        itemTpl: [
            '<div><strong>{name}</strong></div>'
        ].join('')
    }
});
