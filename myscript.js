// todo replace these with correct substitutions, e.g. monarch

// Words that can possibly used as adverbs
var complete_adverbs = {

};

// Words that can possibly be used as adjectives
var complete_adjectives = {
    // dudelier: 'womanlier',
    // dudeliest: 'womanliest',
    boyish: 'youthful',
    dudely: 'pal-like',
    fem: 'androg',
    // girlier: 'agenderier',
    // girliest: 'agenderiest',
    girlish: 'youthful',
    girly: 'childish',
    godly: 'divine',
    male: 'genderless',
    // manly: 'womanly',
    // maternal: 'paternal',
    // paternal: 'maternal',
};

// Words used to describe family / personal relationships
var complete_relationships = {
    aunt: 'ommer',
    aunts: 'ommers',
    aunty: 'ommer',
    bro: 'sib',
    bros: 'sibs',
    bruh: 'sihb',
    dad: 'parent',
    dads: 'parents',
    'fiancee?': 'betrothed',
    gramps: 'granpar',
    grandma: 'grandpar',
    grandmas: 'grandpars',
    hubby: 'spouse',
    husband: 'spouse',
    husbands: 'spouses',
    mom: 'par',
    momma: 'para',
    moms: 'pars',
    nephew: 'nieph',
    nephews: 'niephs',
    niece: 'nieph',
    nieces: 'niephs',
    papa: 'para',
    poppa: 'para',
    son: 'child',
    sons: 'childs',
    uncle: 'ommer',
    uncles: 'ommer',
    // widow: 'widower',
    wives: 'spouses'

};

// Words for job titles
var complete_professions = {
    // actor: 'actress',
    // actors: 'actresses',
    // actress: 'actor',
    // archduchess: 'archduke',
    // archduchesses: 'archdukes',
    // archduke: 'archduchess',
    barman: 'bartender',
    barmaid: 'bartender',
    // baron: 'baroness',
    // baroness: 'baron',
    // baronesses: 'barons',
    // baronet: 'baronetess',
    // baronets: 'baronetesses',
    // barons: 'baronesses',
    // comtesse: 'comte',
    // countess: 'count',
    // countesses: 'counts',
    // deaconess: 'deacon',
    // deaconesses: 'deacons',
    // deacons: 'deaconesses',
    // duchess: 'duke',
    // duchesses: 'dukes',
    // duke: 'duchess',
    // dukes: 'duchesses',
    // earl: 'countess',
    // earls: 'countesses',
    // emperor: 'empress',
    // emperors: 'empresses',
    // empress: 'emperor',
    // empresses: 'emperors',
    god: 'deity',
    goddess: 'deity',
    king: 'monarch',
    kings: 'monarchs',
    // marquis: 'marquise',
    // marquise: 'marquise',
    priest: 'minister',
    priestess: 'minister',
    priestesses: 'minister',
    priests: 'minister',
    prince: 'primarch',
    princes: 'primarchs',
    princess: 'primarch',
    princesses: 'primarchs',
    queen: 'monarch',
    queens: 'monarchs',
    // viscount: 'viscountess',
    // viscountess: 'viscount',
    // viscountesses: 'viscounts',
    // viscounts: 'viscountesses',
};

// Words that can be nouns that don't fit into the above caregories
var complete_nouns = {
};

// Words that are pronouns
var complete_pronouns = {
    he: 'they',
    she: 'they',
};

var complete_honorifics = {
    mr: 'mx',
    mrs: 'mx',
    ms: 'mx',
    mister: 'mix',
    sir: 'liege',
    'ma\'am': 'liege',
}

var complete_other = {
  boy: 'child',
  boyhood: 'childhood',
  boys: 'chlidren',
  dude: 'pal',
  dudes: 'pals',
  // gal: 'fellow',
  gentleman: 'gentleperson',
  gentlemen: 'gentlepeople',
  girl: 'child',
  girls: 'children',
  // godhead: 'goddesshead',
  // godhood: 'goddesshood',
  godliness: 'divinity',
  guy: 'person',
  guys: 'folk',
  herself: 'themself',
  himself: 'themself',
  ladies: 'gentlepeople',
  lords: 'leiges',
  males: 'agenders',
  mama: 'para',
  man: 'person',
  manhood: 'adulthood',
  mankind: 'humanity',
  // manliness: 'womanliness',
  // maternity: 'paternity',
  men: 'people',
  menz: 'peoplez',
  // mgtow: 'wgtow',
  // paternity: 'maternity',
  // radfem: 'radmasc',
  // widower: 'widow',
};

var complete = Object.assign(
    {},
    complete_adverbs,
    complete_adjectives,
    complete_relationships,
    complete_professions,
    complete_nouns,
    complete_pronouns,
    complete_honorifics,
    complete_other
);

// letters that can be replaced at the beginning of a word
var prefixes =  {
  'he\'': 'they\'',
  'she\'': 'they\'',
  // actresses: 'actors',
  // bloke: 'gal',
  boyfriend: 'partner',
  // bride: 'groom',
  brother: 'sibling',
  // comte: 'comtesse',
  dame: 'noble',
  female: 'agender',
  girlfriend: 'partner',
  girlhood: 'childhood',
  // grandpa: 'grandma',
  grandson: 'grandchild',
  // groom: 'bride',
  knight: 'noble',
  'l(ady|ord)': 'leige',
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
  'wait(er|ess)': 'server',
  wife: 'spouse'
};

// letters that can be replaced if they appear in any part of a word (including prefix or suffix)
var infixes = {
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
  father: 'parent',
  femin: 'androg',
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
  godmother: 'godparent',
  grandmother: 'grandparent',
  handyman: 'handyperson',
  handymen: 'handypeople',
  hangman: 'hangperson',
  hangmen: 'hangpeople',
  henchman: 'henchperson',
  henchmen: 'henchpeople',
  heroes: 'heroix',
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
  maiden: 'stablehand',
  mailman: 'mailperson',
  mailmen: 'mailpeople',
  // mansplain: 'ladysplain',
  marksman: 'marksperson',
  marksmen: 'markspeople',
  // mascul: 'androg',
  middleman: 'middleperson',
  middlemen: 'middlepeople',
  milkman: 'milkperson',
  milkmen: 'milkpeople',
  // misandr: 'misogyn',
  // misogyn: 'misandr',
  mommies: 'paras',
  mommy: 'para',
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

// letters that can be replaced at the end of a word
var suffixes = {
    hero: 'heroix',
    heroine: 'heroix',
    heroines: 'heroixes'
};


var phrases = {
    'boys (and|&|\\+) girls': 'children',
    'girls (and|&|\\+) boys': 'children',
    'ladies (and|&|\\+) gentlemen': 'gentlefolk',
    'gentlemen (and|&|\\+) ladies': 'gentlefolk',
    's?he has': 'they have',
    's?he hasn\'t': 'they haven\'t',
    's?he has to': 'they have to',
    's?he is': 'they are',
    's?he\'s': 'they\'ve',
    's?he isn\'t': 'they aren\'t',
    'both genders': 'all genders',
    'both sexes': 'all sexes'
}

var all_subs = Object.assign(
    {},
    prefixes,
    suffixes,
    complete,
    infixes,
    phrases
);

function joinRegex(obj) {
  // Join the properties of an object with pipes
  return '(' + Object.keys(obj).join('|') + ')';
};

function isEmpty(obj) {
  return Object.keys(obj).length == 0;
}

var word_regex_components = [];
if(!isEmpty(prefixes))
    word_regex_components.push('^' + joinRegex(prefixes));
if(!isEmpty(suffixes))
    word_regex_components.push(joinRegex(suffixes) + '$');
if(!isEmpty(infixes))
    word_regex_components.push(joinRegex(infixes));
if(!isEmpty(complete))
    word_regex_components.push('^' + joinRegex(complete) + '$');

var word_regex = new RegExp(word_regex_components.join('|'), 'i');

var phrase_regex = new RegExp('\\b' + joinRegex(phrases) + '\\b', 'gi');

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

function findMatch(string) {
    for (var regex in all_subs) {
        if (string.match(new RegExp('^' + regex + '$', 'i')) !== null) {
            return all_subs[regex]
        }
    }
}

function swapWord(word) {
  return matchCase(word, word.toLowerCase().replace(word_regex, findMatch));
}

function swapPhrase(phrase) {
  return matchCase(phrase, phrase.toLowerCase().replace(phrase_regex, findMatch));
}

function genderswap(text) {
  return text
    /* phrases */
    .replace(phrase_regex, swapPhrase)
    /* words including apostrophes */
    .replace(/\b([a-z][\w']+)\b/gi, swapWord)
    /* him / her */
    .replace(/\b(hers?|hi[ms])\b[\.\,\;\:\]\}\)\?]?(\s+\S+)?/gim, function(match) {
      if (/hers?/i.test(match)) {
        return translateHer(match);
      } else {
        return translateHim(match);
      }
    })
    /* special honorific case */
    .replace(/\b([a-z]+[,;:'".]*)\s+Miss(?= [A-Z][a-z])/g, "$1 Mx.");
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
    .replace(combineRegex(/\bher\b/g, possessiveHintRegex1), "their")
    .replace(combineRegex(/\bher\b/g, possessiveHintRegex2), "them")
    .replace(/\bit\sher\sall\b/g,"it their all")
    .replace(/\bher\sall\b/g,"them all")
    .replace(/\bher\b/g,"their")
    .replace(/\bhers\b/g,"theirs")
    .replace(/\bHer\b(?=[\.\,\;\:\]\}\)\?])/g,"Them")
    .replace(/\bHer\sher\b/g,"Them their")
    .replace(combineRegex(/\bHer\b/g, possessiveHintRegex1), "Their")
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
