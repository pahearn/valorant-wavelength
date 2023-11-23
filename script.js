document.addEventListener("DOMContentLoaded", function() {
    generateTargetNumber();
    
});

targetNumber = 0;
streak = 0;
maxStreak = 0;

const allWeaponsMapping = {
    1: ["Knife", "Shorty"],
    2: ["Shorty", "Classic"],
    3: ["Classic", "Ghost", "Frenzy", "Stinger", "Bucky", "Marshal"],
    4: ["Stinger", "Bucky", "Marshal", "Sheriff", "Classic", "Ghost", "Frenzy"],
    5: ["Judge", "Spectre", "Ares", "Sheriff", "Marshal", "Stinger"],
    6: ["Spectre", "Ares", "Judge","Bulldog", "Guardian"],
    7: ["Bulldog", "Guardian","Spectre", "Ares"],
    8: ["Bulldog", "Guardian","Phantom", "Vandal"],
    9: ["Phantom", "Vandal","Odin", "Operator"],
    10: ["Phantom", "Vandal","Odin", "Operator"]
};

const agentMapping = {
    1: ["Deadlock"],
    2: ["Gekko", "Sage"],
    3: ["Gekko", "Sage", "Iso"],
    4: ["Chamber", "Neon", "Harbor", "Iso"],
    5: ["Chamber", "Neon", "Harbor"],
    6: ["Brimstone", "Astra", "Fade", "Breach"],
    7: ["KAY/O", "Jett", "Sova", "Cypher", "Brimstone", "Astra", "Fade", "Breach"],
    8: ["Omen", "Skye", "Raze", "KAY/O", "Jett", "Sova", "Cypher"],
    9: ["Viper", "Killjoy", "Skye", "Raze", "Omen", "Jett"],
    10: ["Viper", "Killjoy"]
};

const agentUltMapping = {
    1: ["Reyna", "Omen"],
    2: ["Reyna", "Omen", "Iso"],
    3: ["Cypher", "Astra", "Iso"],
    4: ["Cypher", "Astra", "Yoru", "Raze", "Phoenix", "Skye", "Jett", "Neon", "Deadlock"],
    5: ["Cypher", "Jett", "Neon", "Yoru", "Raze", "Phoenix", "Skye", "Chamber","Deadlock"],
    6: ["Sage", "Harbor", "Raze", "Skye", "Jett", "Neon", "Chamber"],
    7: ["Sova", "Brimstone", "Fade", "Chamber", "KAY/O"],
    8: ["Breach", "Viper", "Sova", "Brimstone", "Fade", "KAY/O"],
    9: ["Killjoy", "Breach", "Viper", "Brimstone", "KAY/O"],
    10: ["Killjoy"]
};

const mapMapping = {
    1: ["Fracture", "Breeze", "Pearl"],
    2: ["Fracture", "Breeze", "Icebox", "Sunset", "Pearl"],
    3: ["Split", "Sunset", "Breeze", "Icebox"],
    4: ["Split", "Breeze"],
    5: ["Split", "Icebox"],
    6: ["Lotus", "Bind", "Split"],
    7: ["Bind", "Haven", "Lotus", "Icebox"],
    8: ["Haven", "Icebox", "Bind", "Lotus"],
    9: ["Ascent", "Haven"],
    10: ["Ascent"]
};

$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }


function generateTargetNumber() {
    targetNumber = Math.floor(Math.random() * 10) + 1;
    getHints(targetNumber);
    //document.getElementById("target").innerText = targetNumber;
}

function getHints(inputValue) {
    const weapons = allWeaponsMapping[inputValue];
    const maps = mapMapping[inputValue];
    const ults = agentUltMapping[inputValue];
    const agents = agentMapping[inputValue];
    if (weapons) {
        const randomIndex = Math.floor(Math.random() * weapons.length);
        document.getElementById("weapon").innerText = weapons[randomIndex];
    }

    if (maps) {
        const randomIndex = Math.floor(Math.random() * maps.length);
        document.getElementById("map").innerText = maps[randomIndex];

    }
    if (ults) {
        const randomIndex = Math.floor(Math.random() * ults.length);
        document.getElementById("ult").innerText = ults[randomIndex];

    }
    if (agents) {
        const randomIndex = Math.floor(Math.random() * agents.length);
        document.getElementById("agent").innerText = agents[randomIndex];

    }
    return null; // Handle the case where the input value is not in the mapping
}


function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    //const targetNumber = parseInt(document.getElementById("target").innerText);
    const resultElement = document.getElementById("result");
    const streakElement = document.getElementById("streak");
    const maxStreakElement = document.getElementById("maxstreak");
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        resultElement.innerText = "Please enter a valid guess between 1 and 10.";
    } else {
        if (userGuess === targetNumber) {
            resultElement.innerText = "Congratulations! Your guess is correct!";
            streak++;
        } else {
            resultElement.innerText = "Oops! Try again.";
            streak = 0;
        }
        
        if(streak > maxStreak){
            maxStreak = streak;
        }

        streakElement.innerText = "Current Streak: "+streak;
        maxStreakElement.innerText = "Max Streak: "+maxStreak;
        
        generateTargetNumber(); // Generate a new target number for the next round
    }
}