Ext.define('StravaPG.controller.Application',  {
	extend: 'Ext.app.Controller',

	config: {
		stores: ['Clubs', 'Athletes', 'Rides'],
		refs: {
			clubName: '#clubSearchName',
			searchButton: '#clubSearchButton',
			nav: '#navigation',
			clubs: 'clubs',
			members: 'members',
			rides: 'rides',
			showRide: 'show-ride'
		},
		control: {
			searchButton: {
				tap: 'onSearchButtonTap'
			},
			clubs: {
				itemtap: 'onClubItemTap'
			},
			members: {
				itemtap: 'onMemberItemTap'
			},
			rides: {
				itemtap: 'onRideItemTap'
			}
		}
	},

	onRideItemTap: function(list, index, node, record) {
		var rideId = record.getId();
		var nav = this.getNav();

		if (!this.showRide) {
            this.showRide = Ext.create('StravaPG.view.ShowRide');
        }

        var showRideView = this.showRide;

		Ext.Ajax.request({
			url: 'http://app.strava.com/api/v1/rides/' + rideId,
			method: 'GET',

			success: function(result) {
				var rideData = Ext.decode(result.responseText).ride;

				record.set('startDate', rideData.startDate);
				record.set('startDateLocal', rideData.startDateLocal);
				record.set('timeZoneOffset', rideData.timeZoneOffset);
				record.set('elapsedTime', rideData.elapsedTime);
				record.set('movingTime', rideData.movingTime);
				record.set('distance', rideData.distance);
				record.set('averageSpeed', rideData.averageSpeed);
				record.set('averageWatts', rideData.averageWatts);
				record.set('maximumSpeed', rideData.maximumSpeed);
				record.set('elevationGain', rideData.elevationGain);
				record.set('location', rideData.location);
				record.set('description', rideData.description);
				record.set('commute', rideData.commute);
				record.set('trainer', rideData.trainer);

				showRideView.setRecord(record);
				nav.push(showRideView);
			}
		});
	},

	onMemberItemTap: function(list, index, node, record) {
		var athleteId = record.getId();
		var nav = this.getNav();

		Ext.Ajax.request({
			url: 'http://app.strava.com/api/v1/rides',
			method: 'GET',

			params: {
				athleteId: athleteId
			},

			success: function(result) {
				var rideData = Ext.decode(result.responseText);

				var ridesStore = Ext.getStore('Rides');
				ridesStore.removeAll();

				for (var index = 0; index < rideData.rides.length; index++) {
					var ride = rideData.rides[index];

					ridesStore.add({
						id: ride.id,
						name: ride.name
					});
				}

				nav.push({ xtype: 'rides' });
			}
		});
	},

	onClubItemTap: function(list, index, node, record) {
		var clubId = record.getId();
		var nav = this.getNav();

		Ext.Ajax.request({
			url: 'http://app.strava.com/api/v1/clubs/' + clubId + '/members',
			method: 'GET',

			success: function(result) {
				var memberData = Ext.decode(result.responseText);
				
				var athletesStore = Ext.getStore('Athletes');
				athletesStore.removeAll();

				for (var index = 0; index < memberData.members.length; index++) {
					var member = memberData.members[index];

					athletesStore.add({
						id: member.id,
						name: member.name
					});
				}

				nav.push({ xtype: 'members' });
			}
		});
	},

	onSearchButtonTap: function() {
		var clubName = this.getClubName().getValue();
		var nav = this.getNav();

		Ext.Ajax.request({
			url: 'http://app.strava.com/api/v1/clubs',
			method: 'GET',

			params: {
				name: clubName
			},

			success: function(result) {
				var clubData = Ext.decode(result.responseText);
				
				var clubsStore = Ext.getStore('Clubs');
				clubsStore.removeAll();

				for (var index = 0; index < clubData.clubs.length; index++) {
					var club = clubData.clubs[index];

					clubsStore.add({
						id: club.id,
						name: club.name
					});
				}

				nav.push({ xtype: 'clubs' });
			}
		});
	}
});