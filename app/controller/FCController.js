Ext.define('Flipcart.controller.FCController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			itemList: 'itemlist'
        },
        control: {
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        var myStore = this.getItemList().getStore();
		Ext.Ajax.request({
			url: 'http://172.52.50.82:8080/SenchaTest/senchalistview',
			success: function(response){	
				var record = response.responseText;
				var data=Ext.JSON.decode(response.responseText);				
				for(var i = 0; i < data.senchajson.length; i++){
					var imgURL = data.senchajson[i].imageurl;
					myStore.add({itemImg: '<img style="height: 50px; width: 50px;" src="'+imgURL+'"/>', itemName: data.senchajson[i].name, itemCost: data.senchajson[i].price, discount: data.senchajson[i].discount});
				}
			},

			failure : function(response) {
				Ext.Msg.alert('Error','Error while submitting the form');
			}
		});
    }
});
