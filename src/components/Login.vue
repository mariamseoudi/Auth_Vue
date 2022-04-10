/* eslint-disable */ 
<template>
<div>
 <form @submit.prevent="login">

 <label>Email :</label>
        <input type="text" v-model="email" >

<br/>
<br/>

<label>password:</label>
<input type="password" v-model="password"/>
<br/>
<br/>
<p>{{error}}</p>
<button class="submit" type="submit">Login</button>
<p></p>
</form>
</div>
</template>
<script>
import axios from 'axios';
export default{
    // eslint-disable-next-line 
    name:'Login',
data(){
    return{
        
        email:'',
        password:'',
        error:'',
        er:false
    }
},
methods:{
    login(){
       this.er=true
        let user={
        email:this.email,password:this.password
        }
 return axios.post('http://localhost:3000/login',user).then((res)=>{
     localStorage.setItem('token', res.token);this.$router.push('/Users')},(err)=>{this.error="invalid credentials"})


}}}
</script>

<style scoped> 

form {
    max-width: 600px;
   
    margin: 30px auto;
     
    background: #fff;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
    border:1px solid #ddd
}

label {
    color: #aaa;
    display:inline-block;
    margin: 25px 0 15px;
    text-transform: uppercase;
}

input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: bordre-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
button {
    background: rgb(7, 24, 7);
    width:100px;
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 20px;
    margin-left:80%;
}
p{color:red}
.submit {
    text-align: center;
}

.error {
    color: #ff0000;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>