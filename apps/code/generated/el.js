// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">Ένα οπτικό περιβάλλον προγραμματισμού</span><span id="blocklyMessage">Blockly (Μπλοκλι)</span><span id="codeTooltip">Δες τον κώδικα JavaScript που δημιουργήθηκε.</span><span id="linkTooltip">Αποθήκευση και σύνδεση στο μπλοκ.</span><span id="runTooltip">Εκτέλεσε το πρόγραμμα που ορίζεται από τα μπλοκ \\nστο χώρο εργασίας. </span><span id="runProgram">Εκτέλεση Προγράμματος</span><span id="resetProgram">Επανεκκίνηση</span><span id="dialogOk">ΟΚ</span><span id="dialogCancel">Ακύρωση</span><span id="catLogic">Λογική</span><span id="catLoops">Επαναλήψεις</span><span id="catMath">Μαθηματικά</span><span id="catText">Κείμενο</span><span id="catLists">Λίστες</span><span id="catColour">Χρώμα</span><span id="catVariables">Μεταβλητές</span><span id="catProcedures">Διαδικασίες</span><span id="httpRequestError">Υπήρξε πρόβλημα με το αίτημα.</span><span id="linkAlert">Μοιράσου τα blocks σου με αυτό το σύνδεσμο:\n\n%1</span><span id="hashError">Λυπάμαι, το «%1» δεν αντιστοιχεί σε κανένα αποθηκευμένο πρόγραμμα.</span><span id="xmlError">Δεν μπορώ να φορτώσω το αποθηκευμένο αρχείο σου.  Μήπως δημιουργήθηκε από μία παλιότερη έκδοση του Μπλόκλι.</span><span id="listVariable">Λίστα</span><span id="textVariable">κείμενο</span></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">ΟΚ</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof codepage == 'undefined') { var codepage = {}; }


codepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Code_badXml">Σφάλμα ανάλυσης XML:\n%1\n\nΘα εγκαταλείψετε τις αλλαγές;</span><span id="Code_badCode">Σφάλμα προγράμματος:\n%1</span><span id="Code_timeout">Υπέρβαση μέγιστου αριθμού επαναλήψεων.</span><span id="Code_discard">Διαγραφή και των %1 μπλοκ?</span></div>';
};


codepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return codepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../python_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><table width="100%" height="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly (Μπλοκλι)</a> : Κώδικας</span></h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select></td></tr><tr><td colspan=2><table width="100%"><tr id="tabRow" height="1em"><td id="tab_blocks" class="tabon" onclick="Code.tabClick(this.id)">Μπλοκ</td><td class="tabmin">&nbsp;</td><td id="tab_javascript" class="taboff" onclick="Code.tabClick(this.id)">JavaScript</td><td class="tabmin">&nbsp;</td><td id="tab_python" class="taboff" onclick="Code.tabClick(this.id)">Python</td><td class="tabmin">&nbsp;</td><td id="tab_xml" class="taboff" onclick="Code.tabClick(this.id)">XML</td><td class="tabmax"><button class="notext" title="Απόρριψη όλων των μπλοκ." onclick="Code.discard(); Code.renderContent();"><img src=\'../../media/1x1.gif\' class="trash icon21"></button> <button id="linkButton" class="notext" title="Αποθήκευση και σύνδεση στο μπλοκ." onclick="BlocklyStorage.link()"><img src=\'../../media/1x1.gif\' class="link icon21"></button> <button class="notext primary" title="Εκτέλεσε το πρόγραμμα που ορίζεται από τα μπλοκ \\nστο χώρο εργασίας. " onclick="Code.runJS()"><img src=\'../../media/1x1.gif\' class="run icon21"></button></td></tr></table></td></tr><tr><td height="99%" colspan=2 id="content_area">' + codepage.toolbox(null, null, opt_ijData) + '</td></tr></table><div id="content_blocks" class="content"></div><pre id="content_javascript" class="content"></pre><pre id="content_python" class="content"></pre><textarea id="content_xml" class="content" wrap="off"></textarea>' + apps.dialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


codepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Λογική"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_null"></block><block type="logic_ternary"></block></category><category name="Επαναλήψεις"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">10</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Μαθηματικά"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="Κείμενο"><block type="text"></block><block type="text_join"></block><block type="text_append"><value name="TEXT"><block type="text"></block></value></block><block type="text_length"></block><block type="text_isEmpty"></block><block type="text_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">κείμενο</title></block></value></block><block type="text_charAt"><value name="VALUE"><block type="variables_get"><title name="VAR">κείμενο</title></block></value></block><block type="text_getSubstring"><value name="STRING"><block type="variables_get"><title name="VAR">κείμενο</title></block></value></block><block type="text_changeCase"></block><block type="text_trim"></block><block type="text_print"></block><block type="text_prompt"></block></category><category name="Λίστες"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><title name="NUM">5</title></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">Λίστα</title></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><title name="VAR">Λίστα</title></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><title name="VAR">Λίστα</title></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><title name="VAR">Λίστα</title></block></value></block></category><category name="Χρώμα"><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="Μεταβλητές" custom="VARIABLE"></category><category name="Διαδικασίες" custom="PROCEDURE"></category></xml>';
};


codepage.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return codepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><div id="blockly"></div>';
};
