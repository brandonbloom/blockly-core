// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">en visuell programmeringsmiljö</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">Se genererad JavaScript-kod.</span><span id="linkTooltip">Spara och länka till block.</span><span id="runTooltip">Kör programmet definierat av blocken i arbetsytan.</span><span id="runProgram">Kör program</span><span id="resetProgram">Återställ</span><span id="dialogOk">OK</span><span id="dialogCancel">Cancel</span><span id="catLogic">Logisk</span><span id="catLoops">Loopar</span><span id="catMath">Matematik</span><span id="catText">Text</span><span id="catLists">Listor</span><span id="catColour">Färg</span><span id="catVariables">Variabler</span><span id="catProcedures">Procedurer</span><span id="httpRequestError">Det uppstod ett problem med begäran.</span><span id="linkAlert">Dela dina block med denna länk: \n\n%1</span><span id="hashError">Tyvärr, \'%1\' överensstämmer inte med något sparat program.</span><span id="xmlError">Kunde inte läsa din sparade fil. Den skapades kanske med en annan version av Blockly?</span><span id="listVariable">lista</span><span id="textVariable">text</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof mazepage == 'undefined') { var mazepage = {}; }


mazepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">gå framåt</span><span id="Maze_turnLeft">sväng vänster</span><span id="Maze_turnRight">sväng höger</span><span id="Maze_doCode">utför</span><span id="Maze_elseCode">annars</span><span id="Maze_pathAhead">om det är en väg framåt</span><span id="Maze_pathLeft">om det är en väg till vänster</span><span id="Maze_pathRight">om det är en väg till höger</span><span id="Maze_repeatUntil">upprepa tills</span><span id="Maze_moveForwardTooltip">Flyttar spelaren framåt en ruta.</span><span id="Maze_turnTooltip">Svänger spelaren 90 grader till vänster eller \\nhöger. </span><span id="Maze_ifTooltip">Om det finns en väg i angiven riktning, \\ngör vissa handlingar. </span><span id="Maze_ifelseTooltip">Om det finns en väg i angiven riktning, \\ngör då det första blocket av åtgärder. \\nAnnars, gör den andra blocket av åtgärder. </span><span id="Maze_whileTooltip">Upprepa de slutna kommandonen till dess att \\nslutpunkten nås. </span><span id="Maze_capacity0">Du har <span id=\'capacityNumber\'>0</span> block kvar.</span><span id="Maze_capacity1">Du har <span id=\'capacityNumber\'>1</span> block kvar.</span><span id="Maze_capacity2">Du har <span id=\'capacityNumber\'>%1</span> block kvar.</span><span id="Maze_nextLevel">Grattis! Är du redo att gå vidare till nivå %1?</span><span id="Maze_finalLevel">Grattis! Du har löst den sista nivån.</span></div>';
};


mazepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = mazepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Labyrint</span> &nbsp; ';
  for (var i194 = 1; i194 < 11; i194++) {
    output += ' ' + ((i194 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i194) + '</span>' : (i194 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i194) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i194) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i194) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i194) + '</a>');
  }
  output += '</h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select> &nbsp; <button id="pegmanButton" onmousedown="Maze.showPegmanMenu();"><img src="../../media/1x1.gif"><span>&#x25BE;</span></button></td></tr></table><div id="visualization"><div id="hintBubble"><div id="hint">';
  switch (opt_ijData.level) {
    case 1:
      output += 'Ett program är en sekvens av block. Stapla ett par \'gå framåt\'-block för att hjälpa mig att nå målet.';
      break;
    case 2:
      output += 'Vad är ordningsföljden av steg för att följa den här vägen?';
      break;
    case 3:
      output += 'Datorer har ett begränsat minne. Nå slutet av denna väg med endast två block. Använd \'upprepa\' för att köra ett block mer än en gång.';
      break;
    case 4:
      output += 'Nå målet med endast fem stycken block.';
      break;
    case 5:
      output += 'Pegman måste svänga vänster när han inte kan gå framåt.';
      break;
    case 6:
      output += 'Ett \'om\'-block kommer endast att göra någonting om villkoret är sant. Pröva att svänga vänster om det finns en väg till vänster.';
      break;
    case 7:
      output += 'Denna labyrint ser ut att vara mer komplicerad än den föregående, men det är den inte.';
      break;
    case 8:
      output += 'Du kan använda mer än ett \'om\'-block.';
      break;
    case 9:
      output += 'Om-annars-block kommer att göra det ena eller det andra.';
      break;
    case 10:
      output += 'Kan du lösa denna komplicerade labyrint? Försök att följa den vänstra väggen. Endast för avancerade programmerare!';
      break;
  }
  output += '</div></div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="450px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button class="notext" title="Se genererad JavaScript-kod." onclick="BlocklyApps.showCode(this);"><img src="../../media/1x1.gif" class="code icon21"></button><button id="linkButton" class="notext" title="Spara och länka till block." onclick="BlocklyStorage.link();"><img src="../../media/1x1.gif" class="link icon21"></button></td><td><button id="runButton" class="primary" onclick="Maze.runButtonClick();" title="Får karaktären att göra vad blocken säger."><img src="../../media/1x1.gif" class="run icon21"> Kör program</button><button id="resetButton" class="primary" onclick="Maze.resetButtonClick();" style="display: none" title="Lägger tillbaka karaktären till labyrintens början."><img src="../../media/1x1.gif" class="stop icon21"> Återställ</button></td></tr></table><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + mazepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData) + '<div id="dialogDone" class="dialogHiddenContent"><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><img src="../../media/1x1.gif" id="pegSpin"><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"></div></div><div id="dialogOneTopBlock" class="dialogHiddenContent"><div>På den här nivån måste du stapla alla block tillsammans i det vita arbetsområdet.</div><iframe id="iframeOneTopBlock" src=""></iframe>' + apps.ok(null, null, opt_ijData) + '</div>';
  return output;
};


mazepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><title name="DIR">isPathLeft</title></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};


mazepage.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return mazepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div>';
};
