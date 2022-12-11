let a = 2 + 2;

let inp1 = document.querySelector ('#inp1')
function inp2() {
  

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'скидка в 50% на первый заказ промокод 5' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
  }
}


let b = 2 + 2;

function inp4() {
  let inp3 = document.querySelector ('#inp3').value;
  console.log (inp3)
for (let i = 0; i < (+inp3); i++) {
    if (i===b) {
        alert (`Промокод активен, удачного дня!`);
    }
    console.log (i)
}

}












