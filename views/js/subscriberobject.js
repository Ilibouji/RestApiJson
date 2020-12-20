let totalsubscriberitems = '';
var paramtotal = "";
var paramall = "";

let subscriberitems = [];
subscriberitems.push({title: "List all subscribers", method: "Get", url: "http://localhost:3000/api/subscribers/", 
params: [{parameter: "", type: "", desc: ""}]});

subscriberitems.push({title: "Get subscriber by id", method: "Get", url: "http://localhost:3000/api/subscribers/$id", 
params: [{parameter: "$id", type: "string", desc: "The unique number wich belongs to the the subscriber"}]});

subscriberitems.push({title: "Create a subscriber", method: "Post", url: "http://localhost:3000/api/subscribers/post?email=$email&firstname=$firstname&surname=$surname", 
params: [{ parameter: "$email", type: "string", desc: "The email of the subscriber"},
        { parameter: "$firstname", type: "string", desc: "The firstname of the subscriber"},
        { parameter: "$surname", type: "string", desc: "the lastname of the subscriber"}
]});

subscriberitems.push({title: "Subscribe a subscriber to a broadcast", method: "Post", url: "http://localhost:3000/api/subscribers/subtobrod?subid=$subid&brodid=$brodid", 
params: [{parameter: "$subid", type: "string", desc: "The unique id wich belongs to the the subscriber"},
         {parameter: "$brodid", type: "string", desc: "the unique id wich belongs to the the broadcast"}
]});


subscriberitems.push({title: "Delete a subscriber", method: "Delete", url: "http://localhost:3000/api/subscribers/$id", 
params: [{parameter: "$id", type: "string", desc: "The id of the subscriber you want to delete"}]});


for(let i = 0; i < subscriberitems.length; i++){
    paramall = "";
    paramtotal = "";
    
    for(let x = 0; x < subscriberitems[i].params.length; x++){

        let paramitems =
        `<tr>
        <td>${subscriberitems[i].params[x].parameter}</td>
        <td>${subscriberitems[i].params[x].type}</td>
        <td>${subscriberitems[i].params[x].desc}</td>
        </tr>`;

        paramall += paramitems;
    }

    if(subscriberitems[i].params[0].parameter !== ""){
        paramtotal = `<table>
        <thead>
            <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            ${paramall}
        </tbody>
    </table>`;
    }

    
    let box = 
    
`<div class="box_item">
    <div class="box_title"><h2>${subscriberitems[i].title}</h2></div>
    <div class="inner_item request">
        <div class="title_inner"><h3>Request</h3></div>

        <div class="url"><div class="method">${subscriberitems[i].method}</div>${subscriberitems[i].url}</div>
        <div class="params">
            ${paramtotal}
        </div>
    </div>
    <div class="inner_item response">
        <div class="title_inner"><h3>Response</h3></div>
        <div class="details">
            <h4>Status: 200</h4>
            <h4>Content-Type: application/json</h4>
        </div>
    </div>
</div>`;

totalsubscriberitems += box;

}
