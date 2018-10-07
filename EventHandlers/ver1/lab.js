/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function AddSong(){
    
    alert("it works");
    /*get value from the dom Element*/
    var song = document.getElementById("textInput").value;
    
    /*Create Dom Object li and assign element*/
    var li = document.createElement("li");
    li.innerHTML= song;
    
    /*Add object to Dom Tree in HTML*/
    var ul = document.getElementById("songList");
    ul.appendChild(li);
}