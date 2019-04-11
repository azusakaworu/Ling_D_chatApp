export default{
    props:['msg'],
    template:`

    
        <p class="new-message" :class="{'my-message': matchedID }">
           <span>{{msg.message.name}} says:</span>
           {{msg.message.content}}
        </P>
    
        
    
    
    `,
    data:function(){
        return {matchedID: this.$parent.socketID == this.msg.id}

    },

   
}