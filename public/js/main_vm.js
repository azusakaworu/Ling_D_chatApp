import ChatMessage from './modules/ChatMessage.js';
const socket = io();


function logConnect({sID,message}){//
    // debugger;
    console.log(sID, message); //socket id important!
    //console.log('connected');
    vm.socketID = sID;
}


//给vm 里面push新message
function appendMessage(message){
    vm.messages.push(message);
}


function typingNotification(msg){
    //console.log('someone is typeing message....');
    vm.typeNotification = msg;
   
}

function enterNotification(msg){
    console.log('someone joins chatting....');
    vm.enterNotification = msg;
   
}

function leaveNotification(msg){
    console.log('someone left....');
    vm.leaveNotification = msg;
   
}




//create vue instance
const vm = new Vue({
    data:{
        socketID:"",
        nickname:"",
        message:"",
        messages:[],
        typeNotification:"",
        enterNotification:"",
        leaveNotification:"",
        // show: true
        // transitionName: 'fade'
        //msgcolor: "#"+((1<<24)*Math.random()|0).toString(16)
        


    },
    //  created(){
    //      this.msgcolor = ;
    //  },

    methods:{
        dispatchMessage(){
            socket.emit('chat message',{content:this.message, name: this.nickname ||"Azusakaworu" });

            this.message = "";


        }

    },

    components:{//在这里注册一下
        newmessage:ChatMessage
    }

}).$mount(`#app`);

socket.on('connected',logConnect);
socket.addEventListener('chat message',appendMessage);
//socket.addEventListener('tweet',appendMessage); 

//listen for the typing event from the serve
socket.addEventListener('typing',typingNotification);
socket.addEventListener('enter',enterNotification);
socket.addEventListener('leave',leaveNotification);
socket.addEventListener('disconnect',appendMessage); //this one is optional

//to browser
window.addEventListener('keydown',function(){
    socket.emit('typing',{user:vm.nickname || "Azusakaworu"});
});




