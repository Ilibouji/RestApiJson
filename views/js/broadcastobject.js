let totalbroadcastitems = '';
var paramtotal = "";
var paramall = "";

let broadcastitems = [];
broadcastitems.push({title: "List all broadcasts", method: "Get", url: "http://localhost:3000/api/broadcasts/", 
params: [{parameter: "", type: "", desc: ""}]});

broadcastitems.push({title: "Get broadcast by id", method: "Get", url: "http://localhost:3000/api/broadcasts/$id", 
params: [{parameter: "$id", type: "string", desc: "The unique number wich belongs to the the broadcast"}]});

broadcastitems.push({title: "Create a broadcast", method: "Post", url: "http://localhost:3000/api/broadcasts/post?title=$title", 
params: [{parameter: "$title", type: "string", desc: "The title of the broadcast you want to create"}]});

broadcastitems.push({title: "Delete a broadcast", method: "Delete", url: "http://localhost:3000/api/broadcasts/$id", 
params: [{parameter: "$id", type: "string", desc: "The id of the broadcast you want to delete"}]});


for(let i = 0; i < broadcastitems.length; i++){
    paramall = "";
    paramtotal = "";

    for(let x = 0; x < broadcastitems[i].params.length; x++){

        let paramitems =
        `<tr>
        <td>${broadcastitems[i].params[x].parameter}</td>
        <td>${broadcastitems[i].params[x].type}</td>
        <td>${broadcastitems[i].params[x].desc}</td>
        </tr>`;

        paramall += paramitems;
    }

    if(broadcastitems[i].params[0].parameter !== ""){
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
    <div class="box_title"><h2>${broadcastitems[i].title}</h2></div>
    <div class="inner_item request">
        <div class="title_inner"><h3>Request</h3></div>

        <div class="url"><div class="method">${broadcastitems[i].method}</div>${broadcastitems[i].url}</div>
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
</div>`

totalbroadcastitems += box;

}
