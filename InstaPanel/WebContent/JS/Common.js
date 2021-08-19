
function getInteractGrid(){

    var interactStore = Ext.create('Ext.data.Store',{
        field:['name','comments'],
        pageSize: 1, 
        data:[{name:'Gargee',comments:'hey What up'},{name:'Garg',comments:'What you doin?'}]

    });
    let interactCommonGrid = Ext.create('Ext.grid.Panel',{
        id:'card-2',
        title:'Comments',
        store:interactStore,
        columns:[{
            text:'Name',
            dataIndex:'name',
            flex:1,
        },{
            text:'Comments',
            dataIndex:'comments',
            flex:1,
            //width:300,
        }],
        dockedItems:[{
            xtype:'pagingtoolbar',
            dock:'top',
            store:interactStore,
        }],

    });
    let len  = interactCommonGrid.getDockedItems()[0].items.items.length;
    for(let i=0;i<len;i++){
        interactCommonGrid.getDockedItems()[0].items.items.pop();
    }
    console.log(interactCommonGrid.getDockedItems()[0].items.items);
    return interactCommonGrid;
}

function changePagingToolBar(gridPanel){
   //console.log( gridPanel.getDockedComponent('toptoolbar'));
   let buttonAdd = Ext.create('Ext.Button',{
       text:'Add'
   });
   let buttonFilter = Ext.create('Ext.Button',{
    text:'Filter'
});
let buttonDelete = Ext.create('Ext.Button',{
    text:'Delete'
});
   gridPanel.getDockedItems()[0].items.items.push(buttonFilter);
   gridPanel.getDockedItems()[0].items.items.push(buttonDelete);
   console.log(gridPanel.getDockedItems()[0].items.items);
}