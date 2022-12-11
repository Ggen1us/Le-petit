class User {

    constructor(name, adres, telephone) {
      this.name = name;
     this.adres = adres; 
      this.telephone = telephone;

    }
  
    sayHi() {
      return this.name+" "+this.adres+" "+this.telephone+" ";
    }
  
  }
  
  // Использование:
  let user = new User("Иван");
  user.sayHi();


  function deliver() {

    let user = new User (document.querySelector ('#inp1').value, document.querySelector ('#inp2').value, document.querySelector ('#inp3').value);
    alert('your order has been accepted and will be delivered within an hour:'+user.sayHi());
  }


  const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
anchor.addEventListener('click', function (e) {
e.preventDefault()

const blockID = anchor.getAttribute('href').substr(1)

document.getElementById(blockID).scrollIntoView({
behavior: 'smooth',
block: 'start'
})
})
}