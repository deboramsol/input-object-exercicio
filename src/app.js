import { LightningElement } from "lwc";

export default class App extends LightningElement {
    /*
			Crie um componente LWC, que contenha os campos, 
			primeironome, sobrenome, email, website, empresa e 
			através de uma única função (handleInputChange) monte
			o objeto com os dados estruturados.
		*/

    account = {
      FirstName: "",
      LastName: "",
      Email: "",
      Website:"",
      Company: ""
    };

    handleInputChange(event){
        let name = event.target.name;
        let value = event.detail.value;

        this.account = {
           ...this.account, [name]:value
        };
        console.log(this.account);
    }
}
