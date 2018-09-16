// todo replace these with correct substitutions, e.g. monarch

var complete = {
  // actor: 'actress',
  // actors: 'actresses',
  // actress: 'actor',
  // archduchess: 'archduke',
  // archduchesses: 'archdukes',
  // archduke: 'archduchess',
  // aunt: 'parent\'s sibling',
  // aunts: 'parent\'s siblings',
  // baron: 'baroness',
  // baroness: 'baron',
  // baronesses: 'barons',
  // baronet: 'baronetess',
  // baronets: 'baronetesses',
  // barons: 'baronesses',
  boy: 'child',
  boyhood: 'childhood',
  boyish: 'childish',
  boys: 'chlidren',
  'boys\s(and|&)\sgirls': children,
  bro: 'sib',
  bros: 'sibs',
  // comte: 'comtesse',
  // countess: 'count',
  // countesses: 'counts',
  dad: 'parent',
  dads: 'parents',
  // deaconess: 'deacon',
  // deaconesses: 'deacons',
  // deacons: 'deaconesses',
  // duchess: 'duke',
  // duchesses: 'dukes',
  dude: 'pal',
  // dudelier: 'womanlier',
  // dudeliest: 'womanliest',
  dudely: 'pal-like',
  dudes: 'pals',
  // duke: 'duchess',
  // dukes: 'duchesses',
  // earl: 'countess',
  // earls: 'countesses',
  // emperor: 'empress',
  // emperors: 'empresses',
  // empress: 'emperor',
  // empresses: 'emperors',
  // fem: 'masc',
  // fiance: 'fiancee',
  // fiancee: 'fiance',
  // gal: 'fellow',
  gentleman: 'gentleperson',
  gentlemen: 'gentlepeople',
  girl: 'child',
  // girlier: 'dudelier',
  // girliest: 'dudeliest',
  girls: 'children',
  girly: 'childish',
  // god: 'goddess',
  // goddess: 'god',
  // godhead: 'goddesshead',
  // godhood: 'goddesshood',
  // godliness: 'goddessliness',
  // godly: 'goddessly',
  // gramps: 'grandma',
  // grandma: 'grandpa',
  // grandmas: 'grandpas',
  // guy: 'gal',
  // guys: 'gals',
  he: 'they',
  // hero: 'heroine',
  herself: 'themself',
  himself: 'themself',
  husband: 'spouse',
  husbands: 'spouses',
  // king: 'queen',
  // kings: 'queens',
  ladies: 'gentlepeople',
  'ladies and gentlemen': 'gentlepeople',
  // lord: 'lady',
  // lords: 'ladies',
  maiden: 'stablehand',
  // male: 'female',
  // males: 'females',
  // mama: 'papa',
  man: 'person',
  manhood: 'adulthood',
  mankind: 'humanity',
  // manliness: 'womanliness',
  // manly: 'womanly',
  // marquis: 'marquise',
  // marquise: 'marquise',
  // maternal: 'paternal',
  // maternity: 'paternity',
  men: 'people',
  menz: 'peoplez',
  // mgtow: 'wgtow',
  mom: 'par',
  momma: 'para',
  moms: 'pars',
  mr: 'mx',
  mrs: 'mx',
  ms: 'mx',
  // nephew: 'niece',
  // nephews: 'nieces',
  // niece: 'nephew',
  // nieces: 'nephews',
  papa: 'para',
  // paternal: 'maternal',
  // paternity: 'maternity',
  poppa: 'para',
  // priest: 'priestess',
  // priestess: 'priest',
  // priestesses: 'priests',
  // priests: 'priestesses',
  // prince: 'princess',
  // princes: 'princesses',
  // princess: 'prince',
  // princesses: 'princes',
  queen: 'monarch',
  queens: 'monarchs',
  // radfem: 'radmasc',
  she: 'they',
  // sir: 'ma\'am',
  son: 'child',
  sons: 'childs',
  // uncle: 'aunt',
  // uncles: 'aunts',
  // viscount: 'viscountess',
  // viscountess: 'viscount',
  // viscountesses: 'viscounts',
  // viscounts: 'viscountesses',
  // widow: 'widower',
  // widower: 'widow',
  wives: 'spouses'
};

var start =  {
  'he\'': 'they\'',
  // 'ma\'am': 'sir',
  'she\'': 'they\'',
  // actresses: 'actors',
  // bloke: 'gal',
  boyfriend: 'partner',
  // bride: 'groom',
  brother: 'sibling',
  // comtesse: 'comte',
  // dame: 'knight',
  // damsel: 'squire',
  // female: 'male',
  girlfriend: 'partner',
  girlhood: 'childhood',
  // grandpa: 'grandma',
  grandson: 'grandchild',
  // groom: 'bride',
  // knight: 'dame',
  lady: 'gentleperson',
  // maleness: 'femaleness',
  // marchioness: 'marquess',
  // margrave: 'margravine',
  // margravine: 'margrave',
  // marquess: 'marchioness',
  // matriar: 'patriar',
  // matroniz: 'patroniz',
  mother: 'parent',
  // patriar: 'matriar',
  // patroniz: 'matroniz',
  sister: 'sibling',
  // squire: 'damsel',
  // waiter: 'waitress',
  // waitress: 'waiter',
  wife: 'spouse'
};

var anywhere = {
  airman: 'airperson',
  airmen: 'airpeople',
  alderman: 'alderperson',
  aldermen: 'alderpeople',
  anchorman: 'anchorperson',
  anchormen: 'anchorpeople',
  assemblyman: 'assemblyperson',
  assemblymen: 'assemblypeople',
  bogeyman: 'bogeyperson',
  bogeymen: 'bogeypeople',
  bondsman: 'bondsperson',
  bondsmen: 'bondspeople',
  brogrammer: 'programmer',
  bromance: 'romance',
  businessman: 'businessperson',
  businessmen: 'businesspeople',
  cameraman: 'cameraperson',
  cameramen: 'camerapeople',
  caveman: 'caveperson',
  cavemen: 'cavepeople',
  chairman: 'chairperson',
  chairmen: 'chairpeople',
  clergyman: 'clergyperson',
  clergymen: 'clergypeople',
  congressman: 'congressperson',
  congressmen: 'congresspeople',
  councilman: 'councilperson',
  councilmen: 'councilpeople',
  countryman: 'countryperson',
  countrymen: 'countrypeople',
  craftsman: 'craftsperson',
  craftsmen: 'craftspeople',
  d00dz: 'buddies',
  daddies: 'paras',
  daddy: 'para',
  daughter: 'child',
  doorman: 'doorperson',
  doormen: 'doorpeople',
  // dudebro: 'galpal',
  // father: 'mother',
  // femin: 'mascul',
  fireman: 'fireperson',
  firemen: 'firepeople',
  fisherman: 'fisherperson',
  fishermen: 'fisherpeople',
  foreman: 'foreperson',
  foremen: 'forepeople',
  freshman: 'freshperson',
  freshmen: 'freshpeople',
  garbageman: 'garbageperson',
  garbagemen: 'garbagepeople',
  // godmother: 'godfather',
  // grandmother: 'grandfather',
  handyman: 'handyperson',
  handymen: 'handypeople',
  hangman: 'hangperson',
  hangmen: 'hangpeople',
  henchman: 'henchperson',
  henchmen: 'henchpeople',
  // heroes: 'heroines',
  journeyman: 'journeyperson',
  journeymen: 'journeypeople',
  kinsman: 'kinsperson',
  kinsmen: 'kinspeople',
  klansman: 'klansperson',
  ladiez: 'peoplez',
  laydeez: 'peoplez',
  layman: 'layperson',
  laymen: 'laypeople',
  madman: 'madperson',
  madmen: 'madpeople',
  mailman: 'mailperson',
  mailmen: 'mailpeople',
  // mansplain: 'ladysplain',
  marksman: 'marksperson',
  marksmen: 'markspeople',
  // mascul: 'femin',
  middleman: 'middleperson',
  middlemen: 'middlepeople',
  milkman: 'milkperson',
  milkmen: 'milkpeople',
  // misandr: 'misogyn',
  // misogyn: 'misandr',
  // mommies: 'daddies',
  // mommy: 'daddy',
  nobleman: 'nobleperson',
  noblemen: 'noblepeople',
  ombudsman: 'ombudsperson',
  ombudsmen: 'ombudspeople',
  policeman: 'policeperson',
  policemen: 'policepeople',
  postman: 'postperson',
  postmen: 'postpeople',
  repairman: 'repairperson',
  repairmen: 'repairpeople',
  salesman: 'salesperson',
  salesmen: 'salespeople',
  sandman: 'sandperson',
  sandmen: 'sandpeople',
  serviceman: 'serviceperson',
  servicemen: 'servicepeople',
  showman: 'showperson',
  showmen: 'showpeople',
  snowman: 'snowperson',
  // sorostitute: 'bro-whore',
  spaceman: 'spaceperson',
  spacemen: 'spacepeople',
  spokesman: 'spokesperson',
  spokesmen: 'spokespeople',
  sportsman: 'sportsperson',
  sportsmen: 'sportspeople',
  statesman: 'statesperson',
  statesmen: 'statespeople',
  stepbrother: 'stepsibling',
  stepmother: 'stepparent',
  stepsister: 'stepsibling',
  superman: 'superperson',
  supermen: 'superpeople',
  unman: 'unperson',
  watchman: 'watchperson',
  watchmen: 'watchpeople',
  weatherman: 'weatherperson',
  weathermen: 'weatherpeople',
  // whitemaleness: 'whitefemaleness',
  woman: 'person',
  women: 'people',
  workman: 'workperson',
  workmen: 'workpeople'
};

var end = { heroine: 'hero', heroines: 'heroes' };

var map = {};
var maps = [ start, end, complete, anywhere ];
for (var i = 0; i < maps.length; i++) {
  for (attr in maps[i]) {
    map[attr] = maps[i][attr];
  }
}


var concatString = function(obj) {
  var parts = [];
  for (key in obj) {
    parts.push(key);
  }
  return parts.join('|');
};

var regex = '^(' + concatString(start) + ')|(' + concatString(end) + ')$|(' + concatString(anywhere) + ')|^(' + concatString(complete) + ')$';

var searchFor = new RegExp(regex, 'i');

function capitalize(word) {
  var first = word.charAt(0);
  var rest = word.slice(1);

  return first.toUpperCase() + rest.toLowerCase();
}

function matchCase(old_word, replacement) {
  if (replacement.toLowerCase() == old_word.toLowerCase()) return old_word;

  var first = old_word.charAt(0);
  var second = old_word.charAt(1);

  if (/[a-z]/.test(first)) return replacement.toLowerCase();
  if (/[A-Z]/.test(second)) return replacement.toUpperCase();

  return capitalize(replacement);
}

function findMatch(word) {
  return map[word];
}

function swapWord(word) {
  return matchCase(word, word.toLowerCase().replace(searchFor, findMatch));
}

function genderswap(text) {
  return text
    .replace(/\b([a-z][\w']+)\b/gi, swapWord)
    .replace(/\b(hers?|hi[ms])\b[\.\,\;\:\]\}\)\?]?(\s+\S+)?/gim, function(match) {
      if (/hers?/i.test(match)) {
        return translateHer(match);
      } else {
        return translateHim(match);
      }
    })
    .replace(/\b([a-z]+[,;:'".]*)\s+Miss(?= [A-Z][a-z])/g, "$1 Mr.");
}

function translateHim(text) {
  return text
    .replace(/\bhim\b/g,"them")
    .replace(/\bhis(?=[\.\,\;\:\]\}\)\?])/g,"theirs")
    .replace(/\bhis\b/g,"their")
    .replace(/\bHim\b/g,"Them")
    .replace(/\bHis(?=[\.\,\;\:])/g,"Their")
    .replace(/\bHis\b/g,"Theirs")
  ;
}

const possessiveHintRegex1 = /(?=\s(?=aboard|about|above|across|after|against|along|amid|among|around|as|at|before|behind|below|beneath|beside|besides|between|beyond|but\b|by\b|concerning|considering|despite|down|during|except|excepting|excluding|following|for|from|in\b|inside|into|like|minus|of\b|off\b|often|on\b|onto|opposite|outside|over|past|per\b|plus|regarding|since\b|than\b|through|to\b|toward|towards|under\b|underneath|unlike|until|up\b|upon|versus|via\b|with\b|within|without|not|and\b|feel\b))/
const possessiveHintRegex2 = /(?=\s(?=a\b|an\b|the\b|some\b|any\b|0|1|2|3|4|5|6|7|8|9|one|two|three|thirt|four|five|fift|six|seven|eight|nine|ten|eleven|twelve|twenty))/

function combineRegex(a, b) {
    return new RegExp(a.source + b.source, a.flags)
}


function translateHer(text) {
  return text
    .replace(/\bher\b(?=[\.\,\;\:\]\}\)\?])/g, 'them')
    .replace(/\bher\sher\b/g, "them their")
    .replace(combineRegex(/\bher\b/g, possessiveHintRegex1), "them")
    .replace(combineRegex(/\bher\b/g, possessiveHintRegex2), "them")
    .replace(/\bit\sher\sall\b/g,"it their all")
    .replace(/\bher\sall\b/g,"them all")
    .replace(/\bher\b/g,"their")
    .replace(/\bhers\b/g,"theirs")
    .replace(/\bHer\b(?=[\.\,\;\:\]\}\)\?])/g,"Them")
    .replace(/\bHer\sher\b/g,"Them their")
    .replace(combineRegex(/\bHer\b/g, possessiveHintRegex1), "Them")
    .replace(combineRegex(/\bHer\b/g, possessiveHintRegex2), "Them")
    .replace(/\bit\sHer\sall\b/g,"it Their all")
    .replace(/\bHer\sall\b/g,"Them all")
    .replace(/\bHer\b/g,"Their")
    .replace(/\bHers\b/g,"Theirs");
}

function jailbreak(node){
  var treeWalker = document.createTreeWalker(
      node,
      NodeFilter.SHOW_TEXT,
      null,
      false
  );
  while(treeWalker.nextNode()) {
    var current = treeWalker.currentNode;
    current.textContent = genderswap(current.textContent);
  }
}

chrome.runtime.sendMessage({name: "isPaused?"}, function(response) {
  if (response.value != 'true') {
    jailbreak(document.body);

    document.body.addEventListener('DOMNodeInserted', function(event) {
        jailbreak(event.target);
    });
  }
});
