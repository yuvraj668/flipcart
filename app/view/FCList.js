Ext.define('Flipcart.view.FCList', {
    extend: 'Ext.List',
    xtype: 'itemlist',
  
    config: {
		title: 'Flipcart',
		style:'background-color: lightblue;',
		itemTpl: '<table><tr><td>{itemImg}</td><td style="padding-left: 10px;"><table><tr><font color=blue SIZE=5>{itemName}</font></tr><tr><td><font color=red SIZE=4>{itemCost}</font></td><td style="padding-left: 10px;"> <font color=green SIZE=4>{discount}</font></td></tr></table></td></tr></table>',
		store: 'FCStore'
    }
});