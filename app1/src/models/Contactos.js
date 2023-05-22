export class  Contacto{ 
    id = 0;
    name = 'defaultName'
    lastName = 'defaultLastName'
    email = 'defaultEmail'
    conected = false
    constructor(id,name,lastName,email,conected){ 
        this.id = id; 
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.conected = conected;
    }
}