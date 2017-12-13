#!/usr/bin/env node

var state = 'normal';

 // check state
if( false ) { 
  var state = 'false';
}

console.log( state );

//console.log( JSON.stringify({ state:state, data:{responseTime:responseTime} }) ); 

process.exit;
