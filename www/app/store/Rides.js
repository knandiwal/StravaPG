Ext.define('StravaPG.store.Rides',  {
	extend: 'Ext.data.Store',
	requires: 'StravaPG.model.Ride',

	config: {
		model: 'StravaPG.model.Ride'
	}
});
