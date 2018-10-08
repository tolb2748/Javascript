/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* Dog Class Object/Constructor//////////////////////////////////////////////////////////*/
function Dog(name, breed, weight){
    /*Dog properties*/
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    
    /*Method*/////
    this.bark = function(){
        
        if (this.weight> 20){
            print("Woof!");
        }else{
            print("Yip");
        }
    };
}

/*Dog Instance*/////////////////////////////////////////////////////////////////
Fido = new Dog("Fido", "Mutt", 19);
Fido.bark();