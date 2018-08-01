/*
    Module for sorting through rooms and attaching to appropriate request

    Big O - N squared... Not optimal

    THIS WILL BE DEPRECATED ONCE WE COMPLETE getRequestData within craftTable.js
*/
function roomSort(rooms, requestArray){
    let requests = requestArray;
    for(let request of requests){
        request.rooms = [];
        for(let room of rooms){
            if(room.request_id === request.request_id){
                request.rooms.push(room);
            }
        }
    }
    return requests;
}

module.exports = roomSort;