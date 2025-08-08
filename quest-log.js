//step 1
const questLog = ["Collect 10 Firefly Wings" , 
"Defeat the Goblin King"  ,
"Find the Lost Sword of Oakhaven"
];

console.log(questLog);

//step 2
let questName = "The hero has X quests.";
let NameLength = questName.length;
console.log(NameLength);

//step 3
let text = "The hero has ";
console.log(text + questLog.length + " quests");

//step4
questLog.push("Deliver the Royal Scroll");
console.log(questLog);

//step5
const completedQuest = questLog.pop();
console.log(`completedQuest: ${completedQuest}`);
console.log("Updated quest log:", questLog);
// step 6
questLog.unshift("Rescue the Blacksmith's Cat");
console.log("Updated log is: ", questLog);
//step 7
const delegateQuest = questLog.shift();
console.log(questLog);
//step 8
const rePriorite = questLog.splice(1, 1);
console.log(questLog);
// step 9
questLog.splice(1, 0, "Slay the Dragon of Mount Doom");
console.log(questLog);
//step 10
const questSummary = questLog.join(" | ");
console.log(questSummary);