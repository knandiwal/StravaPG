Ext.define('StravaPG.model.Club', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id',          type: 'int'    },
            { name: 'name',        type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'location',    type: 'string' }
        ]
    }
});
