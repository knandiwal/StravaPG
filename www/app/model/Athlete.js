Ext.define('StravaPG.model.Athlete', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id',          type: 'int'    },
            { name: 'name',        type: 'string' }
        ]
    }
});
