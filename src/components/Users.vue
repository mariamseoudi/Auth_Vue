/* eslint-disable */ 
<template>
    <div >
        
        <h1>Dash Board</h1>
        <table >
            <thead>
                <tr >
                    <th>Name</th>
                    <th>Email</th>
                    
                </tr>
                
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.name}} </td>
                    <td>{{user.email}}</td>
                   
                </tr>
               
            </tbody>
        </table>
    </div>    
</template>

<script>
import axios from 'axios';
export default{
    // eslint-disable-next-line 
    name:'Users',
data(){
    return{
        users:[]
        
    }
},
created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
  },
methods:{
    loadusers(){
        
         axios.get('http://localhost:3000/showUsers').then((res)=>{this.users=(res.data)},(err)=>{console.log(err.data)})
    }
}



,
 beforeMount(){
    this.loadusers()
 }}
</script>
<style scoped>
h1{text-align:center;}
table {
  width: 80%;
  margin-left:70px;
  margin-top:50px;
}
th {
  background-color: black;
  color: white;
}
th, td {
  
   text-align: center;
}
tr:nth-child(even) {background-color: #f2f2f2;}
  


</style>