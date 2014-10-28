Ext.define('Flipcart.store.FCStore', {
    extend: 'Ext.data.Store',
	
    config: {
		model: 'Flipcart.model.FCModel'
		/*data:[
			{ itemName: "Moto G", itemCost: "Rs. 2999", discount: "10%" },
            { itemName: "John", itemCost: "Rs. 64599", discount: "40%" },
            { itemName: "Thomas", itemCost: "Rs. 2956", discount: "20%" },
            { itemName: "James", itemCost: "Rs. 29455", discount: "5%" }
		]*/
    }
});