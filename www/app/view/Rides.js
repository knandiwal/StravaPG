Ext.define('StravaPG.view.Rides', {
    extend: 'Ext.List',
    xtype: 'rides',

    config: {
        title: 'Rides',
        cls: 'x-rides',

        store: 'Rides',
        itemTpl: '<div><strong>{name}</strong></div>'
    }
});