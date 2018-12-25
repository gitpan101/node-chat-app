const socket = io();

socket.on('connect', function() {
    socket.emit('getAvailableRooms', function(roomList) {
        var rooms = $('#ddlRooms');

        rooms.html('')
        .append('<a class="dropdown-item" href="#">public</a>')
        .append('<div class="dropdown-divider"></div>');

        roomList.forEach(function (room) {
            var option = $('<a class="dropdown-item" href="#"></a>');
            option.text(room);

            rooms.append(option);
        });
    });
});

$('#ddlRooms').on('click', '.dropdown-item', function () {
    var selectedRoom = $(this).text();    
    $('input[name=room]').val(selectedRoom);
});