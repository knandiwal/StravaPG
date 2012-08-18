Ext.define('StravaPG.model.Ride', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id',             type: 'int'     },
            { name: 'name',           type: 'string'  },
            { name: 'startDate',      type: 'string'  },
            { name: 'startDateLocal', type: 'string'  },
            { name: 'timeZoneOffset', type: 'int'     },
            { name: 'elapsedTime',    type: 'int'     },
            { name: 'movingTime',     type: 'int'     },
            { name: 'distance',       type: 'float'   },
            { name: 'averageSpeed',   type: 'float'   },
            { name: 'averageWatts',   type: 'float'   },
            { name: 'maximumSpeed',   type: 'float'   },
            { name: 'elevationGain',  type: 'float'   },
            { name: 'location',       type: 'string'  },
            { name: 'description',    type: 'string'  },
            { name: 'commute',        type: 'boolean' },
            { name: 'trainer',        type: 'boolean' }
        ]
    }
});
