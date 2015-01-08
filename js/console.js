var real_console_log = console.log;

// Overwrite the default log behavior to pipe to an output element.
console.log = function(msg) {     
  var output = document.getElementById("prompt-output");
  if(output)
    output.innerHTML = msg;
  real_console_log.apply(console, arguments);
}
