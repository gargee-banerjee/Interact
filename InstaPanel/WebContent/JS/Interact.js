Ext.application({
    name : 'Fiddle',

    launch : function() {
        
        //array of comments
        var commentArray=[];
        var commentViewPanel;
        var componentArray=[];
        var myStore;
        let iconArray=['data:image/jpeg;base64,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','https://i.pinimg.com/236x/a1/de/30/a1de300f1d0aa4b89a06eb8c75e60505.jpg','https://wallpaperaccess.com/full/5805410.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jXuCU85dhpF3oAkBrC3DgKg_W2l2eP8M9A&usqp=CAU','https://i.pinimg.com/originals/b6/e9/22/b6e922eafb5308d6f20e2f7fa4758a1b.png','https://img.pngio.com/levi-eren-yeager-mikasa-ackerman-attack-on-titan-chibi-png-attack-on-titan-chibi-png-728_796.jpg'];

        function createComponents(name,date,comment,icon){
            var panelToDisplayEachComment = Ext.create('Ext.panel.Panel',{
                header:false,
                minHeight:50,
                maxHeight:150,
                width:430,
                layout:'vbox',
                padding:2,
                bodyStyle:{"background-color":"black"}, 
                items:[{
                    xtype:'fieldcontainer',
                    layout:'hbox',
                    items:[{
                        xtype:'image',
                        src:icon,
                        height:30,
                        width:30,
                        style:'border-radius:50px',
                    },
                {
                    xtype:'label',
                    text:name,
                    style:'font-weight:400;color:#96c22d;font-size:1em;margin-left:0.6em;margin-right:0.5em;',
                },
                {
                    xtype:'label',
                    text:date,
                    style:'font-weight:lighter;color:#dedddc;font-size:0.7em;',
                }]
                 },{
                    xtype:'label',
                    text:comment,
                    style:'font-weight:450;color:white;font-size:1.1em;margin-bottom:0.17em;margin-left:2.6em;',
                },
                {
                    xtype:'fieldcontainer',
                    layout:'hbox',
                    bodyStyle:{"background-color":"black"}, 
                    items:[{
                       xtype:'button',
                       tooltip:'Like',
                       height:24,
                       width:24,
                       margin:'0px 0px 0px 37px',
                       cls:'comment-like-dislike-buttons',
                       iconCls:'x-fa fa-thumbs-up',
                    },{
                        xtype:'button',
                        tooltip:'Dislike',
                        height:24,
                        width:24,
                        margin:'0px 0px 0px 16px',
                        cls:'comment-like-dislike-buttons',
                        iconCls:'x-fa fa-thumbs-down',
                    }],
                }]
            }); 
            return panelToDisplayEachComment;
        }
        
        function loadCommentBox(){
            myStore = Ext.create('Ext.data.Store', {
                // model: 'User',
                 proxy: {
                     type: 'ajax',
                     url: 'https://gorest.co.in/public/v1/users',
                     reader: {
                         //type: 'json',
                         rootProperty: 'data'
                     }
                 },
                 autoLoad: true
             });

             setTimeout(function(){
                let commentData = myStore.data.items;
             
             //commentData.push(objTrial);
            console.log(commentData);
            console.log( commentData.length);
            console.dir(commentData.length);
            
             for(let i=0;i<5;i++){
                let obj = commentData[i].data;
                 let name =obj.name;
                 let date =obj.id;
                 let comment =obj.email;
                let component = createComponents(name,date,comment);
                componentArray.push(component);
               }// array length is 3 - after two seconds
             }, 2000);
            
        }
        loadCommentBox();
        //function to open comment Box
        function openCommentBox(){
        var commentPanel = Ext.create('Ext.form.Panel',{
            header:false,
            height:220,
            width:430,
            bodyStyle:{"background-color":"black"}, 
            defaults:{
                //cls:'test-class',
            },
            buttonAlign:'center',
            items:[{
                xtype:'textfield',
                name:'nameOfUser',
                fieldLabel:'Name',
                labelStyle:'color:white;padding:10;color:#96c22d;font-weight:lighter;',
                labelWidth: 110,
                width:'95%',
                fieldCls:'Comment-box-textField',
                //fieldStyle: 'background-color: black; color:white;background-image: none;'
            },{
                xtype:'textarea',
                name:'commentOfUser',
                labelStyle:'color:white;padding:10;color:#96c22d;font-weight:lighter;',
                fieldCls:'Comment-box-textField',
                fieldLabel:'Add a comment',
                width:'95%',
                labelWidth: 110,

            },
        {
            xtype:'fieldcontainer',
            layout:'hbox',
            items:[{
                xtype:'label',
                text:'Select your icon: ',
            },
            {
                xtype:'hiddenfield',
                itemId:'getSelectedIcon',
                name:'selectedIcon',
            },
            {
                xtype:'image',
                src:iconArray[1],
                height:30,
                width:30,
                style:'border-radius:50px;',
                listeners: {
                    el: {
                        click: function() {
                            const icon = Ext.ComponentQuery.query('#getSelectedIcon')[0];
                            icon.setValue(iconArray[1]);
                        }
                    }
                },
            },{
                xtype:'image',
                src:iconArray[2],
                height:30,
                width:30,
                style:'border-radius:50px;',
                listeners:{
                    el:{
                            click:function(){
                                    const icon = Ext.ComponentQuery.query('#getSelectedIcon')[0];
                                    icon.setValue(iconArray[2]);

                            }
                    }
                },
            },{
                xtype:'image',
                src:iconArray[3],
                height:30,
                width:30,
                style:'border-radius:50px;',
                listeners:{
                    el:{
                            click:function(){
                                    const icon = Ext.ComponentQuery.query('#getSelectedIcon')[0];
                                    icon.setValue(iconArray[3]);

                            }
                    }
                },
            },
        {
            xtype:'image',
            src:iconArray[4],
            width:30,
            height:30,
            style:'border-radisu:50px;',
            listeners:{
                el:{
                    click:function(){
                        const icon = Ext.ComponentQuery.query('#getSelectedIcon')[0];
                                    icon.setValue(iconArray[4]);
                    }
                }
            },

        },{
            xtype:'image',
            src:iconArray[5],
            width:30,
            height:30,
            style:'border-radius:50px',
            listeners:{
                el:{
                    click:function(){
                        const icon = Ext.ComponentQuery.query('#getSelectedIcon')[0];
                                    icon.setValue(iconArray[5]);
                    }
                }
            },
        }],

        }],
            //submitComments
            dockedItems:[{
                xtype:'toolbar',
                dock:'bottom',
                style:{backgroundColor:'black'},
                items:[{
                    xtype:'button',
                    text:'Submit',
                    cls:'container',
                    handler:function(){
                    let data = commentPanel.getValues();
                    //console.log(data);
                    commentArray.push(data);
                    let today = new Date();
                    let year = today.getFullYear();
                    let mes = today.getMonth()+1;
                    let day = today.getDate();
                    let currentDate =" "+day+"-"+mes+"-"+year;
                    var component = createComponents(data.nameOfUser,currentDate,data.commentOfUser,data.selectedIcon);
                    componentArray.push(component);
                    commentViewPanel.add(component);
                    commentViewPanel.updateLayout();
                    win.close();
                        
                        
                    }
                },{
                    xtype:'button',
                    text:'Clear',
                    cls:'container',
                    handler:function(){
                        win.close();
                    }
                    
                }],
            }],
            
        });
        var win = Ext.create('Ext.window.Window',{
                        title:'Add Comment',
                        layout:'fit',
                        modal:true,
                        header:false,
                        style:{
                            borderColor:'#333b21',
                            borderStyle:'solid',
                            borderWidth:'6px',
                        },
                        items:[commentPanel]
                    });
                    win.show();
    }
    //panel where comments will be viewed
    function createCommentViewPanel(){
         commentViewPanel = Ext.create('Ext.panel.Panel',{
            //minHeight:80,
            //minWidth:430,
            //height:280,
            //scrollable:'y' ,
            bodyPadding:10,
            header:false,
            bodyStyle:{"background-color":"black"}, 
            style:{
                borderColor:'#333b21',
            }
             
         });
         return commentViewPanel;
    }     
        
    
        var changeValues={
            likesValue:0,
            commentsValue:0,
            followValue:0
            
        };
        
        //panel displaying pic and handler name  -ProfilePanel 
        var profilePanel= Ext.create('Ext.panel.Panel',{
            header:false,
            //renderTo:Ext.getBody(),
            id:'card-1',
            height:190,
            width:430,
            bodyPadding: 20,
            margin:10,
            
            layout:'hbox',
            bodyStyle:{"background-color":"black"}, 
            style:{
                //background:'#f57b42',
                borderColor:'#333b21',
                borderStyle:'solid',
                borderWidth:'6px',
            },
            items:[
            {
            xtype: 'image',
            src:iconArray[0],
            //flex: 1
            height:115,
            width:120,
            style:'border-radius:50px;border: 3px solid #96c22d;',
            // style: {
            //     'border-left': '1px solid #96c22d',
            //     'border-radius': '25px',
            // },
        },
                {
                xtype:'fieldcontainer',
                layout:'vbox',
                padding: 20,
                items:[{
                    xtype:'label',
                    html:'@garge_e',
                    style:'font-weight:bold;color:#96c22d;display:block;margin-left:0.1em;font-size:1.7em;',
                },
                {
                    xtype:'label',
                    html:'I love to dance and paint.',
                    style:'font-weight:lighter;color:white;margin-left:0.4em;margin-top:.8em;margin-bottom:1em',
                },{
                    xtype:'fieldcontainer',
                    layout:'hbox',
                    padding:10,
                    items:[{
                        xtype:'button',
                        itemId:'likeButton',
                        text:'0',
                        tooltip:'Likes',
                        margin:'0px 6px 0px 1px',
                        iconCls: 'x-fa fa-heart',
                        cls:'container',
                        handler:function(){
                            changeValues.likesValue++;
                            let l = Ext.ComponentQuery.query('#displayLikes')[0];
                            let lb = Ext.ComponentQuery.query('#likeButton')[0];
                            lb.setText(new String(changeValues.likesValue));
                        }
                    },
                    {
                        xtype:'button',
                        tooltip:'Comments',
                        text:'0',
                        itemId:'commentButton',
                        margin:'0px 6px 0px 5px',
                        iconCls:'x-fa fa-comments',
                        cls:'container',
                        handler:function(){
                            //create the comments view panel object
                            
                            createCommentViewPanel();

                            // let commentLabelComponent = Ext.ComponentQuery.query('#commentLabelInCommentViewPanel')[0];
                            // let str = new String(commentArray.length) + '   Comments';
                            // commentLabelComponent.setText(str);
                            let win = Ext.create('Ext.window.Window',{
                                header:false,
                                //layout:'fit',
                                //minHeight:80,
                                minWidth:430,
                                maxHeight:350,
                                scrollable:'y' ,
                                modal:true,
                                buttonAlign:'left',
                                bodyStyle:{"background-color":"black"}, 
                                style:{
                                //background:'black',
                                borderColor:'#7d7d7a',
                                borderStyle:'solid',
                                borderWidth:'3px',
                            },
                            //Comments
                                items:[
                                {xtype:'label',
                                itemId:'commentLabelInCommentViewPanel',
                                text:'Comments',
                                style:'color:#96c22d;padding:botton:50px;margin-bottom:10em;font-weight:550;font-style:italic;font-size:1.4em;',
                                },
                                commentViewPanel],
                                
                                dockedItems:[{
                                xtype:'toolbar',
                                dock:'bottom',
                                style:{backgroundColor:'black',},
                                items:[{
                                xtype:'button',
                                text:'Add Comment',
                                cls:'container',
                                handler:function(){
                                    openCommentBox();
                                } },{
                                xtype:'button',
                                text:'Cancel',
                                cls:'container',
                                handler:function(){
                                    win.hide();
                                    let cb = Ext.ComponentQuery.query('#commentButton')[0];
                                    cb.setText(new String(commentArray.length));
                                    
                                }}],
                                }],
                            });
                            win.show();
                            //createCommentViewPanel();
                            console.log(componentArray.length);
                            for(let i=0;i<componentArray.length;i++){
                            let component = componentArray[i];
                            commentViewPanel.add(component);
                            commentViewPanel.updateLayout();
                            }
                        }
                    },{
                        xtype:'button',
                        tooltip:'Follow',
                        text:'0',
                        itemId:'followButton',
                        margin:'0px 6px 0px 5px',
                        iconCls:'x-fa fa-anchor',
                        cls:'container',
                        handler:function(){
                            changeValues.followValue++;
                            let fb = Ext.ComponentQuery.query('#followButton')[0];
                            fb.setText(new String(changeValues.followValue));

                            // Ext.Ajax.request({
                            //     url:'',
                            //     timeou:60000,
                            //     method:'GET',
                            //     params:{
                            //         name:'gargee',
                            //     },
                            //     // headers:
                            //     // {
                            //     //     'Content-Type': 'application/json'
                            //     // },
                            //     success:function(response,opts){
                            //         var obj = Ext.decode(response.responseText);
                            //         console.dir(obj);
                            //         //console.log(obj);

                            //     },
                            //     failure:function(response,opts){
                            //         console.log("Error in ajax call"+ response.status);
                            //     }
                            // });
                             
                        }
                    },
                    // {
                    //     xtype:'displayfield',
                    //     itemId:'displayFollow',
                    //     value:changeValues.followValue,
                    //     style:'color:white;',
                    // },
                    ]
                }]
                
            },
            
            ,]
        });

        
        //grid 
        var interactEditGrid =getInteractGrid();
        changePagingToolBar(interactEditGrid);
      //Card Layout Panels  
     Ext.define('Interact.InteractPanel.view.mainPanel',{
        extend:'Ext.panel.Panel',
        layout: 'card',
        defaultListenerScope: true, //defines that this is component is the scope where event listeners should look, if they are mentioned using string
        items:[{
            id:'card-0',//should be id, not itemId, index values are different for itemId(s)
            html:'Welcome',

        },
            profilePanel,
            interactEditGrid],
        bbar:[{
            text:'&laquo; Previous',
            handler:'showPrevious',
            itemId:'card-prev',
            disabled:true,
        },
        {
            text: 'Next &raquo;',
            handler:'showNext',
            itemId:'card-next',
        }],
        showNext : function(){
            this.doCardNavigation(1);
        },
        showPrevious : function(){
            this.doCardNavigation(-1);
        },
        doCardNavigation :function(incr){
             let me = this; //refering to this class's object
             l = me.getLayout();//getting the layout of this class
             i = l.activeItem.id.split('card-')[1];//getting id of active panel
             next = parseInt(i) + incr;//getting index number of panel to set to active
             l.setActiveItem(next);

            //enabling -disabling next/prev button
            Ext.ComponentQuery.query('#card-prev')[0].setDisabled(next==0);
            Ext.ComponentQuery.query('#card-next')[0].setDisabled(next==(cardPanel.items.items.length-1));//disabling next button based on panel's item's length
            
        },
    });
   
    var cardPanel = Ext.create('Interact.InteractPanel.view.mainPanel',{
        renderTo:Ext.getBody(),
        height:570,
        width:1000,
    });


    
    }//launch
});
//comment function
