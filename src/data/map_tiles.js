import tiles from './tile.js';
import player from './player.js'
import map from './game_map.js'
import weapons from './weapons.js';
import map_grid from './game_map.js';

window.random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.clean = function () {
    document.querySelector(".eventInfo").innerHTML = "";
    document.querySelector(".playerattack").innerHTML = "";
    document.querySelector(".enemyattack").innerHTML = "";
    document.querySelector(".buttons").innerHTML = "";
}

var areas = {
    a1:
        {
            name: "a1",
            tile_type: tiles.tile[2]
        },
            
    a2: 
        {
            name: "a2",
            tile_type: tiles.tile[4],
            eventCompleted: false,
            usurperHealth: 14,
            event: function() {
                window.clean();
                if (!this.eventCompleted) {
                    window.kingSlay = function() {
                        window.clean();
                        var damage = window.random(1,4);
                        document.querySelector(".enemyattack").innerHTML = "";
                        document.querySelector(".eventInfo").innerHTML =
                        `<p>The Usurper strikes at you with his sword, dealing ${damage} damage!</p>
                        <p style="color:red">You lose ${damage} health</p>`;
                        player.health -= damage;

                        damage = window.random(player.weapon.lowStat,player.weapon.highStat);
                        map[0][1].usurperHealth -= damage;
                        document.querySelector(".playerattack").innerHTML =
                        `<p>You strike at the Usurper, dealing ${damage} damage!</p>
                        <p>Usurper Health: ${map[0][1].usurperHealth}</p>`;

                        if (map[0][1].usurperHealth > 0) {
                            document.querySelector(".enemyattack").innerHTML =
                            `<button onclick="window.kingSlay()">Attack</button>`;
                        } else {
                            document.querySelector(".enemyattack").innerHTML =
                            `<p>The Usurper collapses to the floor, with a grin on his face. You clutch your wounds and limp towards the throne.</p>
                            <p>Before you take the throne, you look back and see that the Usurper has already been consumed by rot. You turn and 
                            take a seat on the throne.</p>
                            <p>A smile comes to your face and the vermin seem to have calmed down. As your eyes slowly close, you think you 
                            hear the sound of bird chirping in the distance.</p>
                            <button onclick="endGame(0)">Rest your Eyes</button>`;
                        }
                    };

                    window.usurp = function() {
                        window.clean();
                        document.querySelector(".eventInfo").innerHTML = 
                        `<p>You place the crown on your head, fitted with a Rotten Jewel. It's heavy, and painful You draw 
                        your sword, but a strange feeling comes over you.</p>
                        <p>The sounds of creatures crawling becomes louder and louder, it's overwhelming. You close 
                        your eyes. You can't help but fall to your knees as the sound overwhelms you.</p>
                        <p>.....</p>
                        <p>.....</p>
                        <p>.....</p>
                        <p>As the sound fades away, slowly you open your eyes. You remember being on your knees, but 
                        you seem taller. Your legs seem stronger, the crown doesn't feel as heavy, and the Usurper is nowhere 
                        in sight.</p>
                        <p>The sound of spiders, insects, worms and flies doesn't bother you anymore, you actually seem to 
                        draw strength from it...</p>
                        <p>There's only one thing left to do...</p>
                        <p>You take your seat on the throne, and smile to yourself.</p>
                        <button onclick="endGame(1)">Take the Throne</button>`;
                        
                    };

                    window.endGame = function(x) {
                        switch (x) {
                            case 0:
                                alert("You've defeated the Usurper and sit on the throne. Congratulations!");
                                location.reload(true);
                                break;
                            case 1:
                                alert(`You've taken the throne, and become the Usurper. Congratulations!`);
                                location.reload(true);
                                break;
                            default:
                                document.querySelector(".eventInfo").innerHTML =
                                `How did you do this? Explain yourself.`;
                                break;
                        };
                    }

                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>You enter the castle crunching insects, worms and spiders under your feet. You walk into the main 
                    hall, it's entirely empty, except for a single man on a throne. He looks small until he stands to approach 
                    you. His skin seems to writhe and curl.</p>`;
                    if (player.items.includes("Broken Crown")) {
                        document.querySelector(".playerattack").innerHTML =
                        `<p>As he gets nearer the crown on his head looks awfully familiar...</p>`;
                    }
                    document.querySelector(".enemyattack").innerHTML =
                    `<p>You finally meet in the middle of the hall, the only sound is that of crawling creatures. The Usurper 
                    looks at you and grins. He doesn't say anything, but you both know what comes next.</p>`;
                    if (player.items.includes("Rotten Jewel")) {
                        document.querySelector(".buttons").innerHTML =
                        `<button onclick="window.kingSlay()">Slay the Usurper</button>
                        <button onclick="window.usurp()">Wear the Rotten Crown</button>`;
                    } else {
                        document.querySelector(".buttons").innerHTML =
                        `<button onclick="window.kingSlay()">Slay the Usurper</button>`;
                    }
                    
                }
                else {
                    document.querySelector(".eventInfo").innerHTML = `
                    <p>You have come to the castle with the sacred crown the usurper gives up the throne!</p>
                    <p>You have won the game you are the King!</p>`;
                    map[0][1].eventCompleted = true;
                    alert("You have beat the game!");
                    location.reload(true);
                }
            }
        },
    a3:
        {
            name: "a3",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                window.clean();
                if (!this.eventCompleted) {
                    document.querySelector(".eventInfo").innerHTML =
                    `<p>To the east lies an old castle, smoke rising from its courtyard.</p>
                    <p>You're surrounded by the remains of battle. Arrows stick out of the ground, 
                    the earth is charred in some places. Worms crawl from every direction towards
                    the castle, and you feel a terrible sense of dread.</p>`;
                    this.eventCompleted=true;
                }
                else {
                    document.querySelector(".eventInfo").innerHTML =
                    `<p>To the east lies an old castle, smoke rising from its courtyard.</p>`;
                }
                
            }
        },
    a4:
        {
            name: "a4",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                window.clean();
                document.querySelector(".eventInfo").innerHTML =
                    `You're as far north as you can go, and you're starting to feel the cold in your bones.`;
            }
            
        },
    a5:
        {
            name: "a5",
            tile_type: tiles.tile[2]
        },
        // *************
    b1:
        {
            name: "b1",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            graveHealth: 9,
            event: function() {
                window.clean();
                if (!this.eventCompleted) {
                    window.graveFight = function() {
                        var damage = window.random(1,3);
                        document.querySelector(".enemyattack").innerHTML = "";
                        document.querySelector(".eventInfo").innerHTML =
                        `<p>The Gravekeeper swings his shovel, dealing ${damage} damage!</p>
                        <p style="color:red">You lose ${damage} health</p>`;
                        player.health -= damage;

                        damage = window.random(player.weapon.lowStat,player.weapon.highStat);
                        map[1][0].graveHealth -= damage;
                        document.querySelector(".playerattack").innerHTML =
                        `<p>You attack the gravekeeper, dealing ${damage} damage!</p>
                        <p>Gravekeeper Health: ${map[1][0].graveHealth}</p>`;

                        if (map[1][0].graveHealth > 0) {
                            document.querySelector(".enemyattack").innerHTML =
                            `<button onclick="window.graveFight()">Attack</button>`;
                        } else {
                            document.querySelector(".enemyattack").innerHTML =
                            `<p>The gravekeeper falls to the floor, motionless. He wasn't a young man, but you still find 
                            yourself breathless after the fight.</p>
                            <p>You approach the crypt and speak the words on the scroll. The door to the crypt crumbles, 
                            revealing small room, containing a broken crown, missing it's center jewel.</p>
                            <p style="color:blue">Obtained the Broken Crown</p>`;
                            map[1][0].eventCompleted = true;
                            player.items.push("Broken Crown");
                        }
                    }

                    window.burnScroll = function() {
                        document.querySelector(".eventInfo").innerHTML = 
                        `<p>For a tense moment you and the gravekeeper lock eyes. You toss the scroll into the fire, and sparks 
                        float to the skies.</p>
                        <p>Without saying anything, the gravekeeper tosses a bag at your feet, throws his shovel over his shoulder 
                        and wanders off.</p>
                        <p>You take your gold and leave. As you go, you can't help but wonder what's in the crypt.</p>
                        <p style="color:gold">Obtained 4 gold</p>`;
                        player.money +=4;
                        player.items.pop();
                        map[1][0].eventCompleted = true;
                    };

                    if (!this.eventCompleted && player.items.includes("Scroll") && !player.items.includes("Broken Crown")) {
                        document.querySelector(".eventInfo").innerHTML = 
                        `<p>As you enter the graveyard a man confronts you. He gestures to the scroll in your hand.</p>
                        <p>     "You don't know what you have there. This crypt is sealed for a reason."</p>
                        <p>Behind the gravekeeper is a small crypt, with symbols resembling those on the Scroll you hold.</p>
                        <p>     "Please... I'm not a wealthy man, but I will give you all I have if you destroy that scroll."</p>
                        <p>He kneels over and lights the fire pit between the two of you.</p>
                        <p>     "Burn the scroll. Within my power, I will not allow you to enter that crypt."</p>
                        <p>The gravekeeper holds his shovel like a spear. You can tell that if you want access to the crypt you'll 
                        need to get past him.</p>
                        <button onclick="window.graveFight()">Fight</button>
                        <button onclick="window.burnScroll()">Burn the Scroll</button>`;
                    }
                    else {
                        document.querySelector(".eventInfo").innerHTML = 
                        `There's an empty graveyard here, although it seems someone's been tending to it.`;
                    }
                } else {
                    document.querySelector(".eventInfo").innerHTML = 
                        `The graveyard is desolate, the groundskeeper is gone.`;
                }
            }
                    
        },
    b2:
        {
            name: "b2",
            tile_type: tiles.tile[2]
        },
    b3:
        {
            name: "b3",
            tile_type: tiles.tile[2]
        },
    b4:
        {
            name: "b4",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            event: function() {
                window.clean();
                if (!this.eventCompleted && player.items.includes("Broken Crown")) { 
                    if (!player.items.includes("Rotten Jewel")) { 
                        window.b4 = function(x) {
                            switch (x) {
                                case 0:
                                    document.querySelector(".eventInfo").innerHTML = 
                                    `<p>The mysterious old woman pulls out the missing jewel from the crown.</p>
                                    <p>     "Ah, the crown jewel. Not even stone is immune to the rot."</p>
                                    <p>She places the jewel in your hand, and gently puts a hand on your cheek.</p>
                                    <p style="color:blue">Obtained the Jewel</p>
                                    <p>     "Now to take what's mine..."</p>
                                    <p>Her fingernails press into the skin on your cheeks, and you feel something you've never  
                                    experienced before... For a moment you feel as helpless as a child, and as quick as the feeling came on 
                                    it disappears.</p>
                                    <p style="color:red">You lose 4 health!</p>
                                    <p>     "You've made your choice, child. I wish you well.</p>
                                    <p>You can hardly move as blood drips down your cheeks. Your body feels stiff, and in a puddle you 
                                    could swear your hair is grayer... Eventually you gather the strength to stand, and you carry on.</p>"`;
                                    player.health -= 4;
                                    player.items.push("Rotten Jewel");
                                    map_grid[1][3].eventCompleted = true;
                                    break;
                                case 1:
                                    document.querySelector(".eventInfo").innerHTML = 
                                    `<p>The mysterious woman pulls away, and you suddenly feel free to move again.</p>
                                    <p>     "Rot take you, child. It's already in you, I can see it."</p>
                                    <p>As soon as she begins to wander off, she disappears.</p>`;
                                    map_grid[1][3].eventCompleted = true;
                                    break;
                                default:
                                    document.querySelector(".eventInfo").innerHTML =
                                    `How did you do this? Explain yourself.`;
                                    break;
                            };
                        };
                    } else {
                        document.querySelector(".eventInfo").innerHTML = 
                    `<p>The mysterious old woman is nowhere to be found, but this place still gives you a terrible feeling.</p>`;
                    }

                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>As you traverse the swamp an old woman seemingly comes out of nowhere. She smiles at you in a way that makes 
                    your skin crawl.</p>
                    <p>     "I have something for you... And you have something for me..."</p>
                    <p>She touches your shoulder but you pull away, hand on the hilt of your sword.</p>
                    <p>     "I am not the rot, child. I only want your youth."</p>
                    <p>You begin to leave, but some force stops you.</p>
                    <p>     "I will not compel you. The choice is yours alone."</p>
                    <button onclick="window.b4(0)">Give your Youth</button>
                    <button onclick="window.b4(1)">Refuse</button>`;
                }
                else {
                    document.querySelector(".eventInfo").innerHTML = `This place gives you an eerie 
                    feeling like you are being watched...`;
                }
            }
                    
        },
    b5:
        {
            name: "b5",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                window.clean();
                if (!this.eventCompleted) {
                    window.b5 = function() {
                        document.querySelector(".eventInfo").innerHTML =
                        `<p>You take some time to bury the knight. You choose to bury him in the soft earth
                        just south by the swamp. As you lift the body into the grave, you notice something 
                        glimmering in the knights stiff hand. You open his curled fingers to find a gold 
                        piece.</p>
                        <p>You pocket the gold and bury the corpse.</p>
                        <p style="color:goldenrod">You gain 1 gold.</p>`
                        map[1][4].eventCompleted = true;
                        player.money += 1;
                        
                    }
                    document.querySelector(".eventInfo").innerHTML =
                    `<p>You stumble across the body of a knight lying against a tree stump, arrows
                     still stuck in his chest. His sword must have been taken by mauraders, there's
                     nothing but a corpse in worn armor left.<p>
                     <button onclick="window.b5()">Bury the knight</button>
                     <div id="story"></div>`;
                }
                else {
                    document.querySelector(".eventInfo").innerHTML =
                    `You can see the grave where you buried the knight. There are worms crawling in the dirt over
                    the grave.`;
                }
            }
        },
        // *************
    c1:
        {
            name: "c1",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            event: function() {
                window.clean();
                document.querySelector(".eventInfo").innerHTML = 
                `You're in a dank swamp. It reeks of death, and to the north you see what looks like a graveyard.`;
            }
        },
    c2:
        {
            name: "c2",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                window.clean();
                document.querySelector(".eventInfo").innerHTML = 
                `<p>To the north you see mountains, to the south a lake. This idyllic valley seems welcoming, but 
                seems completely void of animal life.</p>`;
            }
        },
    c3:
        {
            name: "c3",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            merchantHelped: false,
            event: function() {
                window.clean();
                if (this.merchantHelped) {
                    if (!this.eventCompleted) {
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>The merchant that was stuck in the mud approaches you and offers to heal you
                    since you helped him.</p>`;
                    if(player.health > 6) {
                        player.health = 10;
                    } else{
                       player.health += 4;
                    }
                    map_grid[2][2].merchantHelped = false;
                    this.eventCompleted = true;
                    document.querySelector(".playerattack").innerHTML =
                    `<p style="color:red">You gain 4 health</p>`;
                    }
                } else {
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>You can tell you're not the only one to travel this path. To south you see a small village.
                    It looks far more appealing than the swamps to the east or mountains to the north.</p>`;
                }
            }
        },
    c4:
        {
            name: "c4",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            banditHealth: 9,
            event: function() {
                window.clean();
                if (!this.eventCompleted) {
                    window.c4 = function() {
                        var damage = window.random(0,3);
                        document.querySelector(".enemyattack").innerHTML = "";
                        document.querySelector(".eventInfo").innerHTML =
                        `<p>The bandit lunges, dealing ${damage} damage!</p>
                        <p style="color:red">You lose ${damage} health</p>`;
                        player.health -= damage;

                        damage = window.random(player.weapon.lowStat,player.weapon.highStat);
                        map[2][3].banditHealth -= damage;
                        document.querySelector(".playerattack").innerHTML =
                        `<p>You swipe at the bandit, dealing ${damage} damage!</p>
                        <p>Bandit Health: ${map[2][3].banditHealth}</p>`;

                        if (map[2][3].banditHealth > 0) {
                            document.querySelector(".enemyattack").innerHTML =
                            `<button onclick="window.c4()">Attack</button>`;
                        } else {
                            document.querySelector(".enemyattack").innerHTML =
                            `<p>The bandit keels over from the blows he's taken. You land a final blow to finish him,
                            and notice the other bandits have fled.</p>
                            <p>You find the bandit had a couple gold pieces in his belt, so you pocket them and turn to
                            see a young boy tied to a tree.</p>
                            <p style="color:gold">You gain 1 gold.</p>
                            <p>You untie the boy and he tells you he was kidnapped, and asks you to help him find his mother.</p>`;
                            document.querySelector(".boy").innerHTML =
                            `You've rescued a young boy.`;
                            map[2][3].eventCompleted = true;
                            player.money += 1;
                        }
                    }

                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>You've stumbled upon a bandit camp!</p>
                    <button onclick="window.c4(0)">Fight</button>`
                } else {
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>It doesn't look like the bandits have returned. They didn't leave much anyway.</p>`;
                }
            }
        },
    c5:
        {
            name: "c5",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            dogHealth: 7,
            event: function() {
                window.clean();
                if (!this.eventCompleted) {
                    window.c5 = function() {
                        var damage = 1;
                        document.querySelector(".enemyattack").innerHTML = "";
                        document.querySelector(".eventInfo").innerHTML =
                        `<p>The dog jumps at you, dealing ${damage} damage!</p>
                        <p style="color:red">You lose ${damage} health</p>`;
                        player.health -= damage;

                        damage = window.random(player.weapon.lowStat,player.weapon.highStat);
                        map[2][4].dogHealth -= damage;
                        document.querySelector(".playerattack").innerHTML =
                        `<p>You stab at the rabid dog, dealing ${damage} damage!</p>
                        <p>Rabid Dog Health: ${map[2][4].dogHealth}</p>`;

                        if (map[2][4].dogHealth > 0) {
                            document.querySelector(".enemyattack").innerHTML =
                            `<button onclick="window.c5()">Attack</button>`;
                        } else {
                            document.querySelector(".enemyattack").innerHTML =
                            `<p>The rabid dog whines as you finish it off. You wipe the blood off your legs and realize 
                            that some of it is your own.</p>
                            <p>The chain that was around the dogs neck is still in good condition, enough to make you wonder 
                            how it became such a rabid beast in the first place. You can probably get a gold piece for the chain.</p>
                            <p style="color:goldenrod">You gain 1 gold.</p>`;
                            map[2][4].eventCompleted = true;
                            player.money += 1;
                        }
                    }
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>While wandering the swamp you come across a rabid dog. It growls at you, a warning to keep your distance.</p>
                    <p>You can probably get away, but there's a chain around it's neck. It might be worth something...</p>
                    <button onclick="window.c5(0)">Fight</button>`;
                } else {
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>You can barely tell where the rabid dog was, except for the mound of worms and flies.</p>`
                }
            }
        },
        // *************
     d1:
        {
            name: "d1",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                window.clean();
                if (!this.eventCompleted) {
                    window.d1 = function() {
                        document.querySelector(".eventInfo").innerHTML = `
                        <p>    "There are no knights here anymore. No shortage of worms though."</p>
                        <p>He can tell you're confused, so he continues.</p>
                        <p>    "The land here is rotten, and the usurper here is the reason. He's been driven mad by old prophecies."</p>
                        <p>The man continues muttering as he goes back to fishing. You can't understand him anymore, so you leave him be.</p> `
                        ;
                        map[3][0].eventCompleted = true;
                    };
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>There is a lake to the East, and a man fishing lazily. He sees you and beckons you over.</p>
                    <button onclick="window.d1()">Speak to the fisherman</button>`
                }
                else {
                    document.querySelector(".eventInfo").innerHTML = "You think you can still hear the fisherman muttering to himself."
                }
            }
        },
    d2:
        {
            name: "d2",
            tile_type: tiles.tile[5]
        },
    d3:
        {
            name: "d3",
            tile_type: tiles.tile[3],
            eventCompleted: false,
            scrollGot: false,
            event: function() {
                window.clean();
                window.monastary = function() {
                    document.querySelector(".eventInfo").innerHTML =
                    `<p>You head uphill to where the monastary is located. It's clear nobody has been here 
                    in some time.</p>
                    <p>You open the door with the key and wander inside. In the front on the chapel there 
                    is a an old scroll, with words in a strange language. Suddenly you hear footsteps behind you.</p>
                    <p>     "Since the usurper came to power my husband has preached from those scrolls every week.
                    Something about those words... It kept the rot out."</p>
                    <p>You look around; flies buzz through the air, spiders scurry in the corners.</p>
                    <p>     "Not anymore."</p>
                    <p>The woman leaves. Without anything else to say, you take the scroll.</p>
                    <p style="color:blue">Obtained the Scroll.</p>`;
                    player.items.push('Scroll');
                    map_grid[3][2].scrollGot = true;
                    document.querySelector(".buttons").innerHTML =
                    `<button onclick="window.d3()">Return to Village</button>`;
                }

                window.d3 = function() {
                    window.clean();
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>The village square is more empty than you expected.</p>
                    <p>There looks to be a blacksmith in town selling some decent blades.</p>
                    <p>If you have six gold pieces you should be able to afford a new sword.</p>
                    <button onclick="window.purchase()">Purchase Sword</button>`;
                }

                window.purchase = function() {
                    if(player.money >= 6){
                        document.querySelector(".eventInfo").innerHTML = 
                        `<p>You give six gold pieces to the blacksmith. He seems surprised, but hands you the new sword.</p>
                        <p style="color:goldenrod">You lose 6 gold.</p>`;
                        player.weapon = weapons[1];
                        player.money -= 6;
                   } else {
                    document.querySelector(".eventInfo").innerHTML = `<p>You don't have enough to purchase the sword.</p>`;
                   }
                }

                if (!map_grid[3][2].scrollGot && player.items.includes("Monastary Key")){
                    window.monastary();
                } else if (player.weapon.name === "Old Sword") {
                    window.d3();
                } else {
                    document.querySelector(".eventInfo").innerHTML =
                    `The village square is more empty than you expected.`;
                }
            }
                
            
        },
    d4:
        {
            name: "d4",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                window.clean();
                document.querySelector(".eventInfo").innerHTML =
                `The village lies to the west. There are a lot of broken down and abandoned wagons here.`;
            }
        },
    d5:
        {
            name: "d5",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                window.clean();
                window.eatFruit = function() {
                    document.querySelector(".eventInfo").innerHTML =
                    `<p>You pick some fruit and eat it in a small moment of tranquility.</p>
                    <p style="color:red">You gain 2 health</p>`;
                    if (player.health > 8) {
                        player.health = 10;
                    } else {
                        player.health += 2;
                    }
                    map[3][4].eventCompleted = true;
                }

                window.clean();
                if (!this.eventCompleted) {
                    document.querySelector(".eventInfo").innerHTML =
                    `<p>There's a small fruit tree here, one of the only living things that seems to be thriving around here.</p>
                    <button onclick="window.eatFruit()">Pick the Fruit</button>`;
                } else {
                    document.querySelector(".eventInfo").innerHTML =
                    `The fruit tree is here, although there's no fruit left.`;
                }
                
            }
        },
        // *************
    e1:
        {
            name: "e1",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                window.clean();
                document.querySelector(".eventInfo").innerHTML = 
                `You're back where you started. But you can't turn back now!`;
            }
        },
    e2:
        {
            name: "e2",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            ratHealth: 6,
            event: function() {
                window.clean();
                if (!this.eventCompleted) {
                    window.ratFight = function() {
                        var damage = window.random(0,1);
                        window.clean();
                        document.querySelector(".eventInfo").innerHTML =
                        `<p>The rat attacks, dealing ${damage} damage!</p>
                        <p style="color:red">You lose ${damage} health</p>`;
                        player.health -= damage;

                        damage = window.random(player.weapon.lowStat,player.weapon.highStat);
                        map[4][1].ratHealth -= damage;
                        document.querySelector(".playerattack").innerHTML =
                        `<p>You swing at the rat, dealing ${damage} damage!</p>
                        <p>Rat Health: ${map[4][1].ratHealth}</p>`;

                        if (map[4][1].ratHealth > 0) {
                            document.querySelector(".enemyattack").innerHTML =
                            `<button onclick="window.ratFight()">Attack</button>`;
                        } else {
                            //document.querySelector(".buttons").innerHTML = "";
                            document.querySelector(".enemyattack").innerHTML =
                            `<p>You slay the giant rat. It turns out the shiny object you saw was an old belt buckle.</p>
                            <p>You cut off the rat's tail, it's probably worth a gold coin to someone.</p>
                            <p style="color:goldenrod">You gain 1 gold.</p>`;
                            map[4][1].eventCompleted = true;
                            player.money += 1;
                        }
                    }

                    window.e2 = function(x) {
                        var damage;
                        switch(x) {
                            case 0:
                                damage = window.random(player.weapon.lowStat,player.weapon.highStat);
                                document.querySelector(".eventInfo").innerHTML =
                                `<p>You get the jump on the rat, dealing ${damage} damage!</p>`;
                                document.querySelector(".enemyattack").innerHTML =
                                `<button onclick="window.ratFight()">Attack</button>`;
                                break;
                            case 1:
                                document.querySelector(".eventInfo").innerHTML =
                                `<p>You reach for the shiny object but the rat quickly turns and lunges at you!</p>
                                <p>You hold your arm up to block the blow, but the rat bites down hard. You quickly shake the rat off.</p>
                                <p>Still, you feel the sting and a swell of blood where you were bitten.</p>
                                <p style="color:red">You lose 2 health</p>`;
                                player.health -= 2;
                                document.querySelector(".enemyattack").innerHTML =
                                `<button onclick="window.ratFight()">Attack</button>`;
                                break;
                            default:
                                document.querySelector(".eventInfo").innerHTML =
                                `How did you do this? Explain yourself.`;
                                break;
                        };
                        
                    }
                    document.querySelector(".eventInfo").innerHTML = 
                        `<p>While wading through the swamps you see massive rat. It's fangs are dripping with a pungent ooze.</p>
                        <p>You can probably avoid it, but you see something shiny at the rat's feet. You could try and swipe it...</p>
                        <button onclick="window.e2(0)">Attack</button>
                        <button onclick="window.e2(1)">Take shiny object</button>`;
                }
                else {
                    document.querySelector(".eventInfo").innerHTML =
                    `The giant rat lays dead, worms eating it's flesh.`;
                }
            }
        },
    e3:
        {
            name: "e3",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                window.clean();
                if (!this.eventCompleted) {
                    window.e3 = function(x) {
                        switch(x) {
                            case 0:
                                document.querySelector(".eventInfo").innerHTML = 
                                `<p>The merchant is easily overpowered, he collapses as soon as you draw your weapon.</p>
                                 <p>You hold your weapon to his throat, and demand he open the cashbox. He does so quickly 
                                 as he pleads for his life.</p>
                                 <p>    "Please, please... This land is rotten enough."</p>
                                 <p>You take the gold from the cashbox and leave the merchant pleading in the mud.</p>
                                 <p style="color:goldenrod">You gain 3 gold.</p>`;
                                 player.money +=3;
                                 map[2][2].merchantHelped = false;
                                 break;
                            case 1:
                                document.querySelector(".eventInfo").innerHTML =
                                `<p>Without saying anything you go to the rear of the cart and lift the wheel out of the 
                                mud. The cart isn't heavy, the merchant really must not have anything. With a strong push 
                                the cart is freed.</p>
                                <p>Without so much as a 'thank you', the merchant hurries off towards the village with his cart.</p>`;
                                map[2][2].merchantHelped = true;
                                break;
                            default:
                                document.querySelector(".eventInfo").innerHTML =
                                `How did you do this? Explain yourself.`;
                        }
                    }
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>On the road to the village you see an elderly merchant with a cart stuck in the mud.</p>
                     <p>    "Please, please... I don't have much, just leave me be."</p>
                     <p>The merchant is clearly nervous about your presence. He steps in front of what looks like a 
                     cashbox, clearly he has <i>something</i>.
                     <p>He could use some help, but it seems like he'd rather you just move on.</p>
                     <button onclick="window.e3(0)">Rob the merchant</button>
                     <button onclick="window.e3(1)">Unstuck the cart</button>`;
                     map[4][2].eventCompleted = true;
                }
                else if (map[3][2].merchantHelped) {
                    document.querySelector(".eventInfo").innerHTML = 
                    `You see the mud puddle where the merchant was stuck. The village is to the north.`;
                } else {
                    document.querySelector(".eventInfo").innerHTML = 
                    `The merchant is gone, the cashbox too. The cart is abandoned, but it's empty.`;
                }
            }
        },
    e4:
        {
            name: "e4",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            womanVisited: true,
            event: function() {
                window.clean();
                if (!this.eventCompleted) {
                    if (!map[2][3].eventCompleted) {
                        document.querySelector(".eventInfo").innerHTML = 
                        `<p>You come across a crying woman, kneeling over the corpse of a man. She begs you for help. 
                        Between the weeping you can make out a few words.</p>
                        <p>     "My son... Please..."</p>
                        <p>She points to the north, but you can't make out what she's saying anymore.</p>`;
                        map[4][3].womanVisited;
                    } else if (map[2][3].eventCompleted && !player.items.includes("key") && map[2][3].womanVisited) {
                        document.querySelector(".eventInfo").innerHTML = 
                        `<p>As soon as you approach the woman she sees her son. They run to each other and embrace. You turn 
                        to walk away, but the woman calls you over.</p>
                        <p>     "Please, take this. My husband taught at the village monastary. It might help protect 
                        you from the rot."</p>
                        <p>She hands you an old key. You nod and head on your way.</p>
                        <p style="color:blue">Obtained the Monastary Key.</p>`;
                        document.querySelector(".boy").innerHTML = "";
                        player.items.push('Monastary Key');
                        this.eventCompleted = true;
                    } else {
                        document.querySelector(".eventInfo").innerHTML = 
                        `<p>As you approach a wailing woman the boy following you runs to her. They both embrace, it must be his mother. 
                        You turn to walk away, but the woman calls you over.</p>
                        <p>     "Please, take this. My husband taught at the village monastary. It might help protect 
                        you from the rot."</p>
                        <p>She hands you an old key. You nod and head on your way.</p>
                        <p style="color:blue">Obtained the Monastary Key.</p>`;
                        document.querySelector(".boy").innerHTML = "";
                        player.items.push('Monastary Key');
                        this.eventCompleted = true;
                    }
                } else {
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>The woman and her son are gone, but in the field is a shallow grave. Nearby plants have completely 
                    withered since you were first here.</p>`;
                }
            }
        },
    e5:
        {
            name: "e5",
            tile_type: tiles.tile[5]
        }
};

export default areas;