import ChatMessage from './modules/ChatMessage.js';
const socket = io();

function logConnect({sID,message}){//
    // debugger;
    console.log(sID, message); //socket id important!
    //console.log('connected');
    vm.socketID = sID;
}

function appendMessage(){
    vm.message.push(message);
}

//create vue instance
const vm = new Vue({
    data:{
        socketID:"",
        nickname:"",
        message:"",
        messages:[]

    },

    methods:{
        dispatchMessage(){
            socket.emit('chat message',{content:this.message, name: this.nickname ||"Anonymous" });

            this.message = "";
            

        }
    },

    components:{//在这里注册一下
        newmessage:ChatMessage
    }

}).$mount(`#app`);

socket.on('connected',logConnect);
socket.addEventListener('chat message',appendMessage);
socket.addEventListener('disconnect',appendMessage); //this one is optional