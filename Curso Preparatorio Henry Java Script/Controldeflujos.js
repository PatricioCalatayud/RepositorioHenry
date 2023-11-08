function viajar(destino) {
    if(destino === 'Brasil') {
    console.log('gire a la derecha');
    } else if (destino === 'argentina') {
    console.log('Gire a la izquierda');
    viajar('argentina');
} else {
    console.log('nos perdimos');
}
}

viajar('afrika')

function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };
  viajar('Brasil');
  viajar('Argentina');

  function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(17);