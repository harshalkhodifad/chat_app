ifUserIsLoggedIn(function () {
    updateUserData();

    loadUsers(function(users) {
        var usersList = "";

        for (var uid in users) {
            var user = users[uid];
            if (window.currentUser.id != uid) {
                usersList += renderUser(user);
            }
        }
        getElement("members").innerHTML = usersList;
    });

    onClickMultiple("member", function(element) {
        var chat_id = element.id;
        var chaterElement = getElement("chater");
        chaterElement.textContent = element.textContent;

        loadMessages(chat_id,function(messages) {
            var messagesList = "";

            for (var uid in messages) {
                var message = messages[uid];
                messagesList += renderMessage(message);
            }
            getElement("messages").innerHTML = messagesList;
            //console.log(messagesList);
        });

        getElement("chat-id").value = chat_id;

    });

    click("send-button", function() {
        var text = getElement("message-text");
        var chat_id = getElement("chat-id").value;
        sendMessage(chat_id, text.value);
        text.value = "";

    });

});
