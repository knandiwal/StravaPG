Ext.define('StravaPG.view.ShowRide', {
    extend: 'Ext.Container',
    xtype: 'show-ride',

    config: {
        title: 'Ride Info',
        baseCls: 'x-show-ride',
        layout: 'vbox',

        items: [
            {
                id: 'content',
                tpl: [
                    '<dl>',
                        '<dt>Name</dt>',
                        '<dd>{name}</dd>',
                        '<dt>Location</dt>',
                        '<dd>{location}</dd>',
                        '<dt>Start Date</dt>',
                        '<dd>{startDate}</dd>',
                        '<dt>Location</dt>',
                        '<dd>{location}</dd>',
                        '<dt>Elevation Gain</dt>',
                        '<dd>{elevationGain} m</dd>',
                        '<dt>Distance</dt>',
                        '<dd>{distance} m</dd>',
                    '</dl>'
                ].join('')
            }
        ],

        record: null
    },

    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#content').setData(newRecord.data);
        }
    }
});
