prompt.command = {}

prompt.command.setup = function() {

  prompt.editor = CodeMirror(document.getElementById("prompt-editor"), {
    lineNumbers: false,
    lineWrapping: true,
    readOnly: true,
    scrollbarStyle: null,
    showCursorWhenSelecting: false,
    mode: "javascript",
    theme: "tomorrow-night-bright"
  });

  prompt.editor.appendLine = function(text) {
    prompt.editor.replaceRange(text+"\n", CodeMirror.Pos(prompt.editor.lastLine()));
  }

  prompt.input = document.getElementById("prompt-input");
  prompt.input.focus();

  prompt.input.addEventListener("keydown", function(e) {
    if(e.which == 10 || e.which == 13) {
      var code = prompt.input.value;
      var output = prompt.command.execute(code);

      prompt.input.value = "";
      prompt.editor.appendLine(code);
      var dump = jsDump.parse(output);
      prompt.editor.appendLine(dump);

      prompt.input.scrollIntoView();
    }
  });

};

prompt.command.execute = function(code) {
    var output;

    try {
      output = eval(code);
    } catch(ex) {
      output = ex.message;
    }

    return output;
};