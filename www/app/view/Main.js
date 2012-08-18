Ext.define("StravaPG.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.navigation.View',
        'StravaPG.view.Clubs'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Home'
                },

                html: [
                    "<p>This is a simple <strong>PhoneGap</strong> / <strong>Sencha Touch</strong> sample app ",
                    "that uses the <strong>Strava API</strong> to list Strava clubs and riders within the clubs.</p>",
                    "<p>",
                       "<div><a target=\"_blank\" href=\"http://www.phonegap.com/\">PhoneGap / Apache Cordova</a></div>",
                       "<div><a target=\"_blank\" href=\"http://www.sencha.com/products/touch/\">Sencha Touch</a></div>",
                       "<div><a target=\"_blank\" href=\"http://www.strava.com/\">Strava</a></div>",
                       "<div><a target=\"_blank\" href=\"https://stravasite-main.pbworks.com/w/browse#view=ViewFolderNewGui&param=Strava%20API%20Documentation\">Strava API docs</a></div>",
                    "</p>"
                ].join("")
            },
            {
                title: 'Strava',
                iconCls: 'user',

                items: [
                    {
                        id: 'navigation',
                        xtype: 'navigationview',
                        height: 400,
                        autoDestroy: false,

                        items: [
                            {
                                title: 'Search Clubs',
                                xtype: 'formpanel',
                                height: 300,
                                layout: 'vbox',

                                items: [
                                    {
                                        xtype: 'fieldset',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                label: 'Name',
                                                id: 'clubSearchName'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        text: 'Search',
                                        id: 'clubSearchButton',
                                        ui: 'confirm'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
