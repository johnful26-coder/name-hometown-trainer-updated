var PEOPLE = [{"abbr": "NY", "state": "New York", "name": "Tyler Joseph Callahan", "city": "Long Island"}, {"abbr": "NY", "state": "New York", "name": "Joseph Stephen Carapazza", "city": "Long Island"}, {"abbr": "NY", "state": "New York", "name": "Jason William Geier", "city": "Long Island"}, {"abbr": "NY", "state": "New York", "name": "Sean Patrick O'Connell", "city": "Long Island"}, {"abbr": "NY", "state": "New York", "name": "Luca Peregrin Mele", "city": "Pelham"}, {"abbr": "NY", "state": "New York", "name": "Drew Thomas Newmanski", "city": "Long Island"}, {"abbr": "NY", "state": "New York", "name": "William David Wagner", "city": "Rockland"}, {"abbr": "NY", "state": "New York", "name": "Matthew Thomas Purvis", "city": "Rockland"}, {"abbr": "NY", "state": "New York", "name": "Erik Matthew Garpestad", "city": "Staten Island"}, {"abbr": "NY", "state": "New York", "name": "Quinn Adam Carpenter", "city": "Westchester"}, {"abbr": "NY", "state": "New York", "name": "Aidan James Curtis", "city": "Westchester"}, {"abbr": "NY", "state": "New York", "name": "Patrick Ryan Kusic", "city": "Yonkers"}, {"abbr": "NY", "state": "New York", "name": "Cian O'Flynn", "city": "Yonkers"}, {"abbr": "TN", "state": "Tennessee", "name": "Andrew James Lamb", "city": "Johnson City"}, {"abbr": "TN", "state": "Tennessee", "name": "Michael Paris DeMarchis", "city": "Knoxville"}, {"abbr": "TN", "state": "Tennessee", "name": "Hamilton Russell Martin", "city": "Knoxville"}, {"abbr": "TN", "state": "Tennessee", "name": "Nathan Howard Wilder", "city": "Memphis"}, {"abbr": "TN", "state": "Tennessee", "name": "Gabriel Night Risner", "city": "Pulaski"}, {"abbr": "TN", "state": "Tennessee", "name": "Wallace Lloyd Keeler", "city": "Memphis"}, {"abbr": "NJ", "state": "New Jersey", "name": "Neil Mathur", "city": "Holmdel"}, {"abbr": "NJ", "state": "New Jersey", "name": "Max Danger De Angelis", "city": "Middletown"}, {"abbr": "NJ", "state": "New Jersey", "name": "Sean Joseph Dunn", "city": "Middletown"}, {"abbr": "NJ", "state": "New Jersey", "name": "Josh Lewis Loudon", "city": "Verona"}, {"abbr": "NJ", "state": "New Jersey", "name": "Reed Emerson Rachinsky", "city": "Middletown"}, {"abbr": "NJ", "state": "New Jersey", "name": "Liam Francis Cozza", "city": "Woodcliff Lake"}, {"abbr": "IL", "state": "Illinois", "name": "Andrew (Drew) Bryan Christophersen", "city": "Chicago"}, {"abbr": "IL", "state": "Illinois", "name": "Manny (Emmanuel) Robert Girolamo", "city": "Chicago"}, {"abbr": "IL", "state": "Illinois", "name": "Austin George Grzywa", "city": "Chicago"}, {"abbr": "IL", "state": "Illinois", "name": "Guy Thomas Bucciferro", "city": "Rockford"}, {"abbr": "IL", "state": "Illinois", "name": "Miles Daniel Moloney", "city": "Washington"}, {"abbr": "NC", "state": "North Carolina", "name": "Jackson Brian Gasiorowski", "city": "Charlotte"}, {"abbr": "NC", "state": "North Carolina", "name": "Jack Preston Rand", "city": "Durham"}, {"abbr": "NC", "state": "North Carolina", "name": "Matthew Allen Fisher", "city": "Pinehurst"}, {"abbr": "NC", "state": "North Carolina", "name": "Connor Matthew Rausch", "city": "Raleigh"}, {"abbr": "NC", "state": "North Carolina", "name": "Hudson James Huffman", "city": "Wilmington"}, {"abbr": "MD", "state": "Maryland", "name": "David Fernando Cortez", "city": "Potomac"}, {"abbr": "MD", "state": "Maryland", "name": "Cash Thomas Levenberg", "city": "Potomac"}, {"abbr": "MD", "state": "Maryland", "name": "Lucas Schoenenkorb Kanarek", "city": "Rockville"}, {"abbr": "PA", "state": "Pennsylvania", "name": "Winston Thomas Hornik", "city": "Easton"}, {"abbr": "PA", "state": "Pennsylvania", "name": "Ryan Patrick Friel", "city": "Philadelphia"}, {"abbr": "PA", "state": "Pennsylvania", "name": "Josh Carter Rakowski", "city": "Philadelphia"}, {"abbr": "TX", "state": "Texas", "name": "Cameron Neal Prince", "city": "Dallas"}, {"abbr": "TX", "state": "Texas", "name": "John Keller Fulghum", "city": "Fort Worth"}, {"abbr": "TX", "state": "Texas", "name": "Lucas Michael Hamilton", "city": "Fort Worth"}, {"abbr": "VA", "state": "Virginia", "name": "Matthew Zachary Lynch", "city": "Chantilly"}, {"abbr": "VA", "state": "Virginia", "name": "George Herbert Wotka", "city": "Falls Church"}, {"abbr": "CA", "state": "California", "name": "Maximos John Lianides", "city": "Danville"}, {"abbr": "CA", "state": "California", "name": "Chase Elijah Persell", "city": "Hermosa Beach"}, {"abbr": "CO", "state": "Colorado", "name": "Cole Davis Boonstra", "city": "Broomfield"}, {"abbr": "CO", "state": "Colorado", "name": "Jordan Evan Abramson", "city": "Denver"}, {"abbr": "FL", "state": "Florida", "name": "Cole Franklin Bowen", "city": "Sarasota"}, {"abbr": "FL", "state": "Florida", "name": "Nate Micucci Rainis", "city": "Stuart"}, {"abbr": "CT", "state": "Connecticut", "name": "Joseph Ralph Luberti", "city": "Woodbridge"}, {"abbr": "DE", "state": "Delaware", "name": "Quinn Joseph Naughter", "city": "Wilmington"}, {"abbr": "GA", "state": "Georgia", "name": "Ben William Ille", "city": "Atlanta"}, {"abbr": "IN", "state": "Indiana", "name": "Charlie Douglas Biggs", "city": "Fort Wayne"}, {"abbr": "MI", "state": "Michigan", "name": "Nicholas Christopher Gabrys", "city": "Detroit"}, {"abbr": "OH", "state": "Ohio", "name": "Luke Anthony Brinck", "city": "Cincinnati"}, {"abbr": "OR", "state": "Oregon", "name": "Jaxen Scott Mazur", "city": "Eugene"}, {"abbr": "WI", "state": "Wisconsin", "name": "Jackson Vick Speed", "city": "Milwaukee"}, {"abbr": "GA", "state": "Georgia", "name": "William David Smith", "city": "Atlanta"}];
var byState={};
for(var i=0;i<PEOPLE.length;i++){
  var p=PEOPLE[i];
  if(!byState[p.abbr])byState[p.abbr]={state:p.state,people:[]};
  byState[p.abbr].people.push(p);
}
var stateKeys=Object.keys(byState);

function el(id){return document.getElementById(id);}
function norm(s){return String(s).trim().replace(/\s+/g," ").toLowerCase();}
function safe(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}

var current=null;
var remaining=[];
var completed=[];
var misses=[];
var countAsked=false;
var recallAttempts=0;
var recallCorrect=0;

el("scriptWarning").style.display="none";

function start(ab){
  current=byState[ab];
  el("stateSelect").value=ab;
  remaining=current.people.slice();
  completed=[];
  misses=[];
  countAsked=false;
  recallAttempts=0;
  recallCorrect=0;

  el("chooserCard").className="card hidden";
  el("studyCard").className="card hidden";
  el("quiz").className="";
  el("recallCard").className="card hidden";
  el("doneCard").className="card hidden";

  el("abbr").innerHTML=ab;
  el("stateName").innerHTML=current.state;
  el("countInput").value="";
  el("countFeedback").innerHTML="";
  el("recallInput").value="";
  el("recallFeedback").innerHTML="";
  el("enteredList").innerHTML="";
  el("countInput").focus();
}

function checkCount(){
  if(!current || countAsked)return;
  countAsked=true;
  var v=parseInt(el("countInput").value,10);
  var want=current.people.length;
  if(v===want){
    el("countFeedback").innerHTML='<div class="feedback ok">Correct — '+want+'.</div>';
  }else{
    misses.push("State count");
    el("countFeedback").innerHTML='<div class="feedback bad">Incorrect. Correct count: '+want+'. Flagged.</div>';
  }
  el("recallCard").className="card";
  renderRecall();
  el("recallInput").focus();
}

function renderRecall(){
  var done=completed.length;
  var total=current.people.length;
  el("recallCounter").innerHTML=done+" of "+total+" people entered";
  el("recallBar").style.width=(100*done/total)+"%";

  if(completed.length){
    var out='<div class="small"><b>Already entered:</b></div>';
    for(var i=0;i<completed.length;i++){
      out+='<div class="review">'+safe(completed[i].name)+' — '+safe(completed[i].city)+'</div>';
    }
    el("enteredList").innerHTML=out;
  }else{
    el("enteredList").innerHTML="";
  }
}

function checkRecall(){
  if(!current || remaining.length===0)return;

  var raw=el("recallInput").value;
  var got=norm(raw);
  if(!got){
    el("recallFeedback").innerHTML='<div class="feedback bad">Type a full name followed by the hometown.</div>';
    return;
  }

  recallAttempts++;

  // Any still-unanswered person from the selected state is accepted.
  var matchedIndex=-1;
  for(var i=0;i<remaining.length;i++){
    var expected=norm(remaining[i].name+" "+remaining[i].city);
    var aliases=[expected];
    if(remaining[i].name==="Andrew (Drew) Bryan Christophersen"){
      aliases.push(norm("Andrew Bryan Christophersen "+remaining[i].city));
      aliases.push(norm("Drew Bryan Christophersen "+remaining[i].city));
    }
    if(remaining[i].name==="Manny (Emmanuel) Robert Girolamo"){
      aliases.push(norm("Manny Robert Girolamo "+remaining[i].city));
      aliases.push(norm("Emmanuel Robert Girolamo "+remaining[i].city));
      aliases.push(norm("Manny Emmanuel Robert Girolamo "+remaining[i].city));
    }
    if(aliases.indexOf(got)>=0){
      matchedIndex=i;
      break;
    }
  }

  if(matchedIndex>=0){
    var p=remaining.splice(matchedIndex,1)[0];
    completed.push(p);
    recallCorrect++;
    el("recallFeedback").innerHTML='<div class="feedback ok">Correct: <b>'+safe(p.name)+'</b> — '+safe(p.city)+'.</div>';
    el("recallInput").value="";
    renderRecall();

    if(remaining.length===0){
      finish();
    }else{
      el("recallInput").focus();
    }
    return;
  }

  // Detect exact duplicate of a person already entered.
  for(var j=0;j<completed.length;j++){
    var already=norm(completed[j].name+" "+completed[j].city);
    if(got===already){
      el("recallFeedback").innerHTML='<div class="feedback bad">You already entered that person. Try another person from '+safe(current.state)+'.</div>';
      el("recallInput").value="";
      el("recallInput").focus();
      return;
    }
  }

  // If the exact full name is present at the start but hometown is wrong,
  // identify that person and flag it for retry without consuming them.
  var identified=null;
  for(var k=0;k<remaining.length;k++){
    var nm=norm(remaining[k].name);
    var nameAliases=[nm];
    if(remaining[k].name==="Andrew (Drew) Bryan Christophersen"){
      nameAliases.push(norm("Andrew Bryan Christophersen"));
      nameAliases.push(norm("Drew Bryan Christophersen"));
    }
    if(remaining[k].name==="Manny (Emmanuel) Robert Girolamo"){
      nameAliases.push(norm("Manny Robert Girolamo"));
      nameAliases.push(norm("Emmanuel Robert Girolamo"));
      nameAliases.push(norm("Manny Emmanuel Robert Girolamo"));
    }
    var foundName=false;
    for(var na=0;na<nameAliases.length;na++){
      if(got===nameAliases[na] || got.indexOf(nameAliases[na]+" ")===0){foundName=true;break;}
    }
    if(foundName){
      identified=remaining[k];
      break;
    }
  }

  if(identified){
    misses.push(identified.name+" / hometown");
    el("recallFeedback").innerHTML=
      '<div class="feedback bad">Name recognized, but the hometown is not exact. <b>'+safe(identified.name)+'</b> is from <b>'+safe(identified.city)+'</b>. It stays unanswered so you must enter it correctly later.</div>';
  }else{
    misses.push(raw);
    el("recallFeedback").innerHTML=
      '<div class="feedback bad">That does not exactly match any unanswered person from '+safe(current.state)+'. Check the spelling and try again. Nothing was removed, so you still have to get that person right.</div>';
  }

  el("recallInput").value="";
  el("recallInput").focus();
}

function finish(){
  el("recallBar").style.width="100%";
  var accuracy=recallAttempts ? Math.round(100*recallCorrect/recallAttempts) : 100;
  el("doneTitle").innerHTML=current.state+" complete";
  el("score").innerHTML=
    "<p><b>"+accuracy+"% recall-attempt accuracy</b> · "+misses.length+" flagged attempt"+(misses.length===1?"":"s")+"</p>";

  var out="";
  if(misses.length){
    out='<div class="feedback bad"><b>Flagged during this round:</b>';
    for(var i=0;i<misses.length;i++){
      out+='<div class="review">'+safe(misses[i])+'</div>';
    }
    out+='</div>';
  }else{
    out='<div class="feedback ok">Perfect — no flagged attempts.</div>';
  }
  el("missedList").innerHTML=out;
  el("doneCard").className="card";
}

el("startBtn").onclick=function(){start(el("stateSelect").value);};
el("randomBtn").onclick=function(){start(stateKeys[Math.floor(Math.random()*stateKeys.length)]);};
el("countBtn").onclick=checkCount;
el("recallBtn").onclick=checkRecall;
el("againBtn").onclick=function(){start(el("stateSelect").value);};
el("newStateBtn").onclick=function(){
  el("quiz").className="hidden";
  el("chooserCard").className="card";
  el("studyCard").className="card";
  window.scrollTo(0,0);
};

var picks=document.getElementsByClassName("statepick");
for(var x=0;x<picks.length;x++){
  picks[x].onclick=function(){start(this.getAttribute("data-abbr"));};
}

el("countInput").onkeydown=function(e){
  e=e||window.event;
  if(e.keyCode===13)checkCount();
};
el("recallInput").onkeydown=function(e){
  e=e||window.event;
  if(e.keyCode===13)checkRecall();
};

var ref="";
stateKeys.sort(function(a,b){return byState[a].state.localeCompare(byState[b].state);});
for(var r=0;r<stateKeys.length;r++){
  var ab=stateKeys[r],s=byState[ab];
  ref+="<h3>"+safe(s.state)+" ("+ab+") — "+s.people.length+"</h3>";
  for(var q=0;q<s.people.length;q++){
    ref+='<div class="review">'+safe(s.people[q].name)+" — "+safe(s.people[q].city)+", "+ab+"</div>";
  }
}
el("studyList").innerHTML=ref;
