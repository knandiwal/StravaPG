Ext.define('StravaPG.store.Athletes',  {
	extend: 'Ext.data.Store',
	requires: 'StravaPG.model.Athlete',

	config: {
		model: 'StravaPG.model.Athlete'
	}
});
