const ICE_CREAM_DEFAULTS = "iceCreamDefault"
const CONE_MACROS = [
    "/em grabs an egg waffle and carefully wraps it in a colorful paper sleeve.",
    "/em grabs an egg waffle and wraps it in a colorful paper sleeve.",
    "/em grabs an egg waffle and skillfully wraps it in a colorful paper sleeve."
]
const BOWL_MACROS = [
    "/em grabs a colorful paper bowl from beneath the counter.",
    "/em selects a colorful paper bowl from beneath the counter.",
    "/em retrieves a colorful paper bowl from beneath the counter."
]
const SAME_FLVR_MACROS = [
    "/em adds a scoop of [flavor] into the waiting [cone] before carefully placing another atop it.",
    "/em adds two scoops of [flavor] to the [cone].",
    "/em skillfully stacks two scoops of [flavor] in the [cone]."
]
const DIFF_FLVR_MACROS = [
    "/em adds a scoop of [flavor1] into the [cone] before carefully placing a scoop of [flavor2] atop it.",
    "/em adds one scoop of [flavor1] and another of [flavor2] to the [cone].",
    "/em scoops [flavor1] and [flavor2] into the [cone]."
]
const ONE_TOP_MACROS = [
    "/em scatters a handful of [topping1] over the sundae.",
    "/em showers the sundae with [topping1].",
    "/em adds [topping1] to the sundae."
]
const TWO_TOP_MACROS = [
    "/em scatters a handful of [topping1] and [topping2] over the sundae.",
    "/em showers the sundae with a blend of [topping1] and [topping2].",
    "/em adds both [topping1] and [topping2] to the sundae."
]
const THREE_TOP_MACROS = [
    "/em carefully adds a blend of [topping1], [topping2], and [topping3] to the sundae.",
    "/em scatters [topping1], [topping2], and [topping3] over the sundae.",
    "/em hits the sundae with a splash of [topping1], [topping2], and [topping3]."
]
const SYRUP_MACROS = [
    "/em drizzles a generous amount of [syrup] syrup over the sundae.",
    "/em carefully pours [syrup] syrup onto the sundae.",
    "/em adds a swirl of [syrup] syrup to the sundae."
]
const FIN_MACROS_WHIP = [
    "/em neatly tops the sundae off with a heap of whipped cream.",
    "/em plops a stylish spoonful of whipped cream onto the sundae.",
    "/em adds two swirls of whipped cream to the sundae."
]
const FIN_MACROS_SPRINK = [
    "/em finishes up by raining sprinkles on the sundae.",
    "/em adds sprinkles to the sundae as a finishing touch.",
    "/em tops off the sundae with colorful sprinkles."
]
const FIN_MACROS_CHERRY = [
    "/em places a single cherry on top of the sundae.",
    "/em neatly places a cherry on top of the sundae.",
    "/em finishes up the sundae with a plump red cherry."
]
const FIN_MACROS_WHIP_SPRINK = [
    "/em neatly tops the sundae with a heap of whipped cream and sprinkles.",
    "/em plops a stylish spoonful of whipped cream and sprinkles onto the sundae.",
    "/em finishes up with a swirl of whipped cream and some sprinkles."
]
const FIN_MACROS_WHIP_CHERRY = [
    "/em adds a swirl of whipped cream before topping it with a red cherry.",
    "/em tops the sundae with whipped cream and a red cherry.",
    "/em neatly finishes off the sundae with whipped cream and a red cherry."
]
const FIN_MACROS_SPRINK_CHERRY = [
    "/em adds sprinkles to the sundae before topping it off with a single red cherry.",
    "/em rains colorful sprinkles onto the sundae and then places a red cherry on top.",
    "/em finishes up the sundae with sprinkles and a cherry."
]
const FIN_MACROS_ALL = [
    "/em neatly tops the sundae with a heap of whipped cream, sprinkles, and a red cherry.",
    "/em finishes up with a swirl of whipped cream, some sprinkles, and a red cherry.",
    "/em adds whipped cream, sprinkles, and a red cherry to the top of the sundae."
]
const SPECIALS_MACROS = [
    "/em takes a matcha egg waffle and adds two scoops of ice cream—one strawberry, one matcha. [pronounCap] then adds cut strawberries and white chocolate chips before drizzling strawberry syrup over it and topping it off with whipped cream and a chocolate-dipped strawberry. Finally, [pronounLow] lightly dusts it with matcha powder.",
    "/em takes a chocolate-dipped egg waffle and adds two scoops of cookies ‘n cream. [pronounCap] scatters chocolate chips and marshmallows over the ice cream before pouring marshmallow syrup on it. Finally, [pronounLow] places a single soft s’mores cookie on top.",
    "/em takes an egg waffle and loads it with one scoop of coffee almond fudge ice cream and another scoop of vanilla. [pronounCap] gives it a light drizzle of chocolate syrup before following it up with a sea salt sprinkle and topping it with a biscoff cookie."
]
const MILK_MACROS = [
    "/em retrieves a cold bottle of [milk] milk from the refrigerator.",
    "/em selects a cold bottle of [milk] milk from the refrigerator.",
    "/em grabs a cold bottle of [milk] milk from the refrigerator."
]
const TRIPLE_MACROS = [
    "/em grabs a bowl and neatly lines it with two halves of a banana. [pronounCap] then follows up with scoops of chocolate, strawberry, and vanilla ice cream before giving it a healthy drizzle of chocolate syrup and chopped nuts. [pronounCap] tops each individual scoop with whipped cream and cherries.",
    "/em adds two halves of a banana to a glass bowl before loading it with chocolate, strawberry, and vanilla ice cream. [pronounCap] douses the sundae with chocolate syrup and chopped nuts before topping it with whipped cream and cherries.",
    "/em quickly whips up a Triple Threat—a banana and three scoops of chocolate, strawberry, and vanilla ice cream topped with chocolate syrup and chopped nuts. [pronounCap] beds the cherries on a generous amount of whipped cream."
]
const LUNA_MACROS = [
    "/em takes a matcha egg waffle and adds two scoops of ice cream—one strawberry, one matcha. [pronounCap] then adds cut strawberries and white chocolate chips before drizzling strawberry syrup over it and topping it off with whipped cream and a chocolate-dipped strawberry. Finally, [pronounLow] lightly dusts it with matcha powder.",
    "/em adds strawberry and matcha ice cream to a fluffy matcha egg waffle. [pronounCap] then loads it with freshly-cut strawberries, white chocolate chips, strawberry syrup, and a plop of whipped cream. [pronounCap] finishes it off with matcha powder and a chocolate-dipped strawberry.",
    "/em quickly whips up a Lunaberry Matcha—a double-scoop of strawberry and matcha ice cream, fresh strawberries, white chocolate chips, strawberry syrup, and whipped cream all delicately wrapped in a custom matcha egg waffle. [pronounCap] tops it off with a chocolate-dipped strawberry and finely ground matcha powder."
]
const CHAI_MACROS = [
    "/em takes a chocolate-dipped egg waffle and adds two scoops of cookies ‘n cream. [pronounCap] scatters chocolate chips and marshmallows over the ice cream before pouring marshmallow syrup on it. Finally, [pronounLow] places a single soft s’mores cookie on top.",
    "/em adds two scoops of cookies ‘n cream to a chocolate-dipped egg waffle before loading it up with chocolate chips, marshmallows, and a special marshmallow syrup. [pronounCap] tops it off with a melt-in-your-mouth s’mores cookie.",
    "/em quickly puts together a Cookies ‘n Chai—two scoops of cookies ‘n cream, an absurd amount of chocolate chips, marshmallows, and a healthy drizzle of marshmallow syrup in a chocolate-dipped egg waffle. [pronounCap] adds a couple more marshmallows for good measure before topping it with a homemade s’mores cookie."
]
const ROKU_MACROS = [
    "/em takes an egg waffle and loads it with one scoop of coffee almond fudge ice cream and another scoop of vanilla. [pronounCap] gives it a light drizzle of chocolate syrup before following it up with a sea salt sprinkle and a biscoff cookie.",
    "/em adds scoops of coffee almond fudge and vanilla ice cream to a classic egg waffle before hitting it with some chocolate syrup and a gourmet sea salt sprinkle. [pronounCap] then tops it off with a homemade biscoff cookie.",
    "/em quickly assembles a Coffee Beanilla—coffee almond fudge and vanilla ice cream, chocolate syrup, and a sea salt sprinkle elegantly wrapped in a classic egg waffle. [pronounCap] then adds a homemade biscoff cookie on top."
]
const PIE_BREAD_NO_ICE_MACROS = [
    "/em slices and plates a warm slice of freshly-baked [pie/bread].",
    "/em slices and plates a warm slice of traditional [pie/bread].",
    "/em plates a heaping slice of [pie/bread]."    
]
const PIE_BREAD_WITH_ICE_MACROS = [
    "/em cuts a warm slice of [pie/bread] and plates it beside a scoop of [flavor].",
    "/em plates a warm slice of [pie/bread] and balances a scoop of [flavor] on top of it.",
    "/em carefully cuts a warm slice of [pie/bread] and plates it alongside a scoop of [flavor]."
]
const CAKE_NO_ICE_MACROS = [
    "/em slices and plates a decadent slice of homemade [cake].",
    "/em slices and plates a multilayered slice of [cake].",
    "/em plates a heaping slice of [cake]."    
]
const CAKE_WITH_ICE_MACROS = [
    "/em plates a slice of [cake] and balances a scoop of [flavor] on top of it.",
    "/em cuts a slice of [cake] and plates it beside a scoop of [flavor].",
    "/em carefully cuts a slice of [cake] and plates it alongside a scoop of [flavor]."
]
const SPEEDY_MACROS = {
    ALL: "/em [SC] and [base]. [pronounCap] then [toppings] before [finishes]",
    TOPPINGS: "/em [SC] and [base]. [pronounCap] then [toppings]",
    FINISHES: "/em [SC] and [base]. [pronounCap] then [finishes]"
}
const SPEEDY_CONE = "folds an egg waffle into a paper sleeve and"
const SPEEDY_BOWL = "grabs a paper bowl and"
const SPEEDY_SAME_FLVR = "adds two scoops of [base]"
const SPEEDY_DIFF_FLVR = "adds one scoop of [base1] and another of [base2]"
const SPEEDY_TOPPINGS = {
    ONE: "scatters a handful of [topping1] over it",
    TWO: "adds both [topping1] and [topping2] to it",
    THREE: "showers it with [topping1], [topping2], and [topping3]"
}
const SPEEDY_FINISHES_NO_TOP = {
    WHIP: "tops the sundae off with a heap of whipped cream.",
    SPRINKLES: "adds sprinkles as a finishing touch.",
    CHERRY: "places a single cherry on top.",
    SYRUP: "pours a generous amount of [syrup] onto the sundae.",
    WHIPSPRINK: "tops the sundae with a heap of whipped cream and sprinkles.",
    CHERRYSPRINK: "finishes up the sundae with sprinkles and a cherry.",
    SYRUPSPRINK: "adds a swirl of [syrup] and some sprinkles.",
    SYRUPWHIP: "tops the sundae with a plop of whipped cream and [syrup].",
    SYRUPCHERRY: "pours [syrup] on the sundae before adding a cherry.",
    CHERRYWHIP: "adds a swirl of whipped cream before topping it with a red cherry.",
    WHIPSPRINKCHERRY: "neatly tops the sundae with a heap of whipped cream, sprinkles, and a red cherry.",
    ALL: "finishes the sundae off with whipped cream, [syrup], sprinkles, and a cherry."
}
const SPEEDY_FINISHES_W_TOP = {
    WHIP: "topping it off with a heap of whipped cream.",
    SPRINKLES: "adding sprinkles.",
    CHERRY: "placing a single cherry on top.",
    SYRUP: "pouring on a generous amount of [syrup].",
    WHIPSPRINK: "topping it off with a heap of whipped cream and sprinkles.",
    CHERRYSPRINK: "finishing up with sprinkles and a cherry.",
    SYRUPSPRINK: "adding a swirl of [syrup] and some sprinkles.",
    SYRUPWHIP: "topping it off with a plop of whipped cream and [syrup].",
    SYRUPCHERRY: "adding [syrup] and a cherry.",
    CHERRYWHIP: "adding a swirl of whipped cream and a cherry.",
    WHIPSPRINKCHERRY: "neatly topping it off with a heap of whipped cream, sprinkles, and a cherry.",
    ALL: "finishing it off with whipped cream, [syrup], sprinkles, and a cherry."
}
let globalCone = '_';
let globalFlavors = '_';
let pronoun = '_';
let globalPieFlavor = '_';
let globalPieIceFlvr = '_';
let globalCakeFlavor = '_';
let globalCakeIceFlvr = '_';
const macroHere = '----- Macro Here -----'
let topButton = document.getElementById("back-to-top");
window.onscroll = function() {scrollFunction()};
let scrollLimit = 600
function scrollFunction() {
    if (document.body.scrollTop > scrollLimit || document.documentElement.scrollTop > scrollLimit) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
}


const CLEAR_FORM_IDS = [
    ""
]

document.getElementById("defaultOpen").click();

function openTab(evt, tabName, contentName, linkName) {

    //TODO: CLEAR FORMS
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class=contentName and hide them
    tabcontent = document.getElementsByClassName(contentName);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class=linkName and remove the class "active"
    tablinks = document.getElementsByClassName(linkName);
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    switch (tabName) {
        case "carnivalCreamery":
        case "iceCream":
            [...document.getElementsByClassName(ICE_CREAM_DEFAULTS)].forEach( ele => ele.click() )
            document.getElementById("bottom-reset").style.display = "block"
            break;
        case "rokutomi":
            break;
        case "cafe":
            break;
        case "beverages":
            document.getElementById("bevDefault").click()
            document.getElementById("bottom-reset").style.display = "none"
            break;
        case "specials":
            document.getElementById("specialsDefault").click()
            document.getElementById("bottom-reset").style.display = "none"
            getSpecialsMacros()
            break;
        case "lunarie":
            document.getElementById("lunarieMacroDefault").click();
            break;
        case "chai":
            document.getElementById("chaiMacroDefault").click();
            break;
        case "roku":
            document.getElementById("rokuMacroDefault").click();
            break;
        case "triple":
            document.getElementById("tripMacroDefault").click();
            break;
        case "banana":
            document.getElementById("bananaDefault").click()
            break;
        case "dragonberry":
            document.getElementById("dragonDefault").click()
            break;
        case "affogato":
            document.getElementById("affogatoDefault").click()
            break;
        case "spicedCider":
            document.getElementById("ciderDefault").click()
            break;
        case "yummeh":
            document.getElementById("yummehDefault").click()
            document.getElementById("bottom-reset").style.display = "none"
            break;
        case "pieBread":
            document.getElementById("pieWIceDefault").click()
            document.getElementById("pieNoIceDefault").click()
            break;
        case "cake":
            document.getElementById("cakeWIceDefault").click()
            document.getElementById("cakeNoIceDefault").click()
            break;
        case "speedy":
            document.getElementById("bottom-reset").style.display = "block"
        
    }


}

function handleConeChange(event, id) {
    let elem = [...document.getElementsByClassName(id)]
    const cone = event.target.value.toLowerCase();
    let idx = 0;
    switch (cone) {
        case "egg waffle":
            idx = 0;
            elem.forEach( ele => {
                ele.innerHTML = CONE_MACROS[idx]
                idx++;
            })
            break;
        case "bowl":
            idx = 0;
            elem.forEach( ele => {
                ele.innerHTML = BOWL_MACROS[idx];
                idx++;
            })
            break;
        default:
            idx = 0;
            elem.forEach(ele => {
                ele.innerHTML = macroHere
            })

    }
    globalCone = cone;
    
}

function handleSyrupChange(event, id) {
    let elem = [...document.getElementsByClassName(id)]
    const syrup = event.target.value.toLowerCase()
    let idx = 0
    elem.forEach( ele => {
        ele.innerHTML = SYRUP_MACROS[idx].replaceAll('[syrup]', syrup)
        idx++
    })
}

function handlePronounChange(event) {
    pronoun = event.target.value
    getSpecialsMacros()
}

function copy(target, isSingle = false) {
    let copyText;
    if (isSingle) {
        copyText = document.getElementById(target)
        navigator.clipboard.writeText(copyText.innerHTML)
    } else {
        // Get the text field
        copyText = [...document.getElementsByClassName(target)].filter(ele => ele.style.display === 'block');
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText[0].innerHTML);
    }
    
}

function getFlavorMacro(checkId, macroId) {
    const flavors = [...document.querySelectorAll(`.${checkId}:checked`)].map( flvr => flvr.value.toLowerCase());
    let elem = [...document.getElementsByClassName(macroId)]
    let idx = 0;
    elem.forEach(ele => {
        ele.style.color = 'white'
    })
    if (flavors.length > 2) {
        elem.forEach(ele => {
            ele.innerHTML = "Selected more than 2 flavors. Try again."
            ele.style.color = "#f54336"
        })
        return
    }
    
    switch (flavors.length) {
        case 1:
            idx = 0;
            elem.forEach(ele => {
                ele.innerHTML = SAME_FLVR_MACROS[idx].replaceAll('[cone]', globalCone).replaceAll('[flavor]', flavors[0])
                idx++;
            })
            break;
        case 2:
            idx = 0;
            elem.forEach(ele => {
                ele.innerHTML = DIFF_FLVR_MACROS[idx].replaceAll('[cone]', globalCone).replaceAll('[flavor1]', flavors[0]).replaceAll('[flavor2]', flavors[1])
                idx++;
            })
            break;
        default:
            idx = 0;
            elem.forEach(ele => {
                ele.innerHTML = macroHere
            })
    }
    globalFlavors = flavors
}


function getSorbetFlavorMacro() {
    const flavors = [...document.querySelectorAll('.sorbet-flavor:checked')].map( flvr => flvr.value.toLowerCase());
    let elem = document.getElementById('sorbetFlvrMacro')
    elem.style.color = "white"
    if (flavors.length > 2) {
        elem.innerHTML = "Selected more than 2 flavors. Try again."
        elem.style.color = "#f54336"
        return;
    }
    switch (flavors.length) {
        case 1:
            elem.innerHTML = `/em adds a scoop of ${flavors[0]} sorbet into the waiting ${globalCone} before gingerly placing another atop it.`
            break;
        case 2:
            elem.innerHTML = `/em adds a scoop of ${flavors[0]} sorbet into the waiting ${globalCone} before gingerly placing a scoop of ${flavors[1]} atop it.`
            break;
        default:
            elem.innerHTML = macroHere
    }
    globalFlavors = flavors
}

function getToppingsMacro(checkId, macroId) {
    const toppings = [...document.querySelectorAll(`.${checkId}:checked`)].map( top => top.value.toLowerCase());
    let elem = [...document.getElementsByClassName(macroId)]
    let idx = 0;
    elem.forEach(ele => {
        ele.style.color = "white"
    })
    if (toppings.length > 3) {
        elem.forEach(ele => {
            ele.innerHTML = "Selected more than 3 toppings. Try again."
            ele.style.color = "#f54336"
        })
        return;
    }
    switch (toppings.length) {
        case 1:
            idx = 0
            elem.forEach(ele => {
                ele.innerHTML = ONE_TOP_MACROS[idx].replaceAll('[topping1]', toppings[0])
                idx++
            })
            break;
        case 2:
            idx = 0
            elem.forEach(ele => {
                ele.innerHTML = TWO_TOP_MACROS[idx].replaceAll('[topping1]', toppings[0]).replaceAll('[topping2]', toppings[1])
                idx++
            })
            break;
        case 3:
            idx = 0
            elem.forEach(ele => {
                ele.innerHTML = THREE_TOP_MACROS[idx].replaceAll('[topping1]', toppings[0]).replaceAll('[topping2]', toppings[1]).replaceAll('[topping3]', toppings[2])
                idx++
            })
            break;
        default:
            idx = 0;
            elem.forEach(ele => {
                ele.innerHTML = macroHere
            })
    }
}

function getFinishesMacro(checkId, macroId) {
    const finishes = [...document.querySelectorAll(`.${checkId}:checked`)].map( fin => fin.value.toLowerCase());
    let elem = [...document.getElementsByClassName(macroId)]
    let idx = 0
    
    switch (finishes.length) {
        case 1:
            idx = 0;
            if (finishes[0] === 'whipped cream') {
                elem.forEach(ele => {
                    ele.innerHTML = FIN_MACROS_WHIP[idx]
                    idx++
                })
            } else if (finishes[0] === 'sprinkles') {
                elem.forEach(ele => {
                    ele.innerHTML = FIN_MACROS_SPRINK[idx]
                    idx++
                })
            } else {
                elem.forEach(ele => {
                    ele.innerHTML = FIN_MACROS_CHERRY[idx]
                    idx++
                })
            }
            break;
        case 2:
            idx = 0;
            if (finishes.includes('whipped cream') && finishes.includes("sprinkles")) {
                elem.forEach(ele => {
                    ele.innerHTML = FIN_MACROS_WHIP_SPRINK[idx]
                    idx++
                })
            } else if (finishes.includes('whipped cream') && finishes.includes("cherry")) {
                elem.forEach(ele => {
                    ele.innerHTML = FIN_MACROS_WHIP_CHERRY[idx]
                    idx++
                })
            } else {
                elem.forEach(ele => {
                    ele.innerHTML = FIN_MACROS_SPRINK_CHERRY[idx]
                    idx++
                })
            }
            break;
        case 3:
            idx = 0;
            elem.forEach(ele => {
                ele.innerHTML = FIN_MACROS_ALL[idx]
                idx++
            })
            break;
        default:
            idx = 0;
            elem.forEach(ele => {
                ele.innerHTML = macroHere
            })
    }
}

function getSpecialsMacros() {
    let lunaElems = [...document.getElementsByClassName("lunarieMacro")]
    let chaiElems = [...document.getElementsByClassName("chaiMacro")]
    let rokuElems = [...document.getElementsByClassName("rokuMacro")]
    let tripElems = [...document.getElementsByClassName("tripMacro")]
    let idx = 0
    lunaElems.forEach( ele => {
        ele.innerHTML = LUNA_MACROS[idx].replaceAll("[pronounCap]", pronoun).replaceAll("[pronounLow]", pronoun.toLowerCase())
        idx++
    })
    idx = 0
    chaiElems.forEach( ele => {
        ele.innerHTML = CHAI_MACROS[idx].replaceAll("[pronounCap]", pronoun).replaceAll("[pronounLow]", pronoun.toLowerCase())
        idx++
    })
    idx = 0
    rokuElems.forEach( ele => {
        ele.innerHTML = ROKU_MACROS[idx].replaceAll("[pronounCap]", pronoun).replaceAll("[pronounLow]", pronoun.toLowerCase())
        idx++
    })
    idx = 0
    tripElems.forEach( ele => {
        ele.innerHTML =TRIPLE_MACROS[idx].replaceAll("[pronounCap]", pronoun).replaceAll("[pronounLow]", pronoun.toLowerCase())
        idx++
    })
}

function handleMilkChange(event) {
    let elem = [...document.getElementsByClassName("milkMacro")]
    let idx = 0
    elem.forEach( ele => {
        ele.innerHTML = MILK_MACROS[idx].replaceAll("[milk]", event.target.value.toLowerCase())
        idx++
    })
}

function handlePieBreadChange(event, caller) {
    if (caller === 'pieBread') {
        globalPieFlavor = event.target.value;
        let elem = [...document.getElementsByClassName("pieNoIceMacro")]
        let idx = 0
        elem.forEach(ele => {
            ele.innerHTML = PIE_BREAD_NO_ICE_MACROS[idx].replaceAll("[pie/bread]", globalPieFlavor.toLowerCase())
            idx++;
        })        
        if (globalPieIceFlvr !== '_') {
            elem = [...document.getElementsByClassName("pieWIceMacro")]
            idx = 0;
            elem.forEach(ele => {
                ele.innerHTML = PIE_BREAD_WITH_ICE_MACROS[idx].replaceAll("[pie/bread]", globalPieFlavor.toLowerCase()).replaceAll('[flavor]', globalPieIceFlvr.toLowerCase())
                idx++;
            })
        }
    } else if(caller === 'iceCream') {
        let elem = [...document.getElementsByClassName("pieWIceMacro")]
        let idx = 0;
        globalPieIceFlvr = event.target.value;
        elem.forEach(ele => {
            ele.innerHTML = PIE_BREAD_WITH_ICE_MACROS[idx].replaceAll("[pie/bread]", globalPieFlavor.toLowerCase()).replaceAll('[flavor]', event.target.value.toLowerCase())
            idx++
        })
    }
    
}

function handleCakeChange(event, caller) {
    if (caller === 'cake') {
        globalCakeFlavor = event.target.value;
        let elem = [...document.getElementsByClassName("cakeNoIceMacro")]
        let idx = 0
        elem.forEach(ele => {
            ele.innerHTML = CAKE_NO_ICE_MACROS[idx].replaceAll("[cake]", globalCakeFlavor.toLowerCase())
            idx++;
        }) 
        if (globalCakeIceFlvr !== '_') {
            elem = [...document.getElementsByClassName("cakeWIceMacro")]
            idx = 0;
            elem.forEach(ele => {
                ele.innerHTML = CAKE_WITH_ICE_MACROS[idx].replaceAll("[cake]", globalCakeFlavor.toLowerCase()).replaceAll('[flavor]', globalCakeIceFlvr.toLowerCase())
                idx++;
            })
        }
    } else if(caller === 'iceCream') {
        let elem = [...document.getElementsByClassName("cakeWIceMacro")]
        let idx = 0;
        globalCakeIceFlvr = event.target.value
        elem.forEach(ele => {
            ele.innerHTML = CAKE_WITH_ICE_MACROS[idx].replaceAll("[cake]", globalCakeFlavor.toLowerCase()).replaceAll('[flavor]', event.target.value.toLowerCase())
            idx++
        })
    }
    
}

function getSpeedyMacro() {
    const cone = document.getElementById("speedy-cone").value.toLowerCase()
    const flavors = [...document.querySelectorAll(`.speedy-flavor:checked`)].map( flvr => flvr.value.toLowerCase())
    const toppings = [...document.querySelectorAll(`.speedy-toppings:checked`)].map( top => top.value.toLowerCase())
    const syrup = document.getElementById("speedy-syrup").value.toLowerCase()
    const finishes = [...document.querySelectorAll(`.speedy-finish:checked`)].map( fin => fin.value.toLowerCase())
    let macroDiv = document.getElementById("speedy-macro")
    macroDiv.style.color = "white"
    macroDiv.innerHTML = macroHere
    /* ERROR HANDLERS */
    if (!cone) {
        macroDiv.innerHTML = "Please select a cone"
        macroDiv.style.color = "#f54336"
        return
    } else if (flavors.length > 2) {
        macroDiv.innerHTML = "Selected more than 2 flavors. Try again."
        macroDiv.style.color = "#f54336"
        return
    } else if (toppings.length > 3) {
        macroDiv.innerHTML = "Selected more than 3 toppings. Try again."
        macroDiv.style.color = "#f54336"
        return
    } else if (toppings.length < 1 && flavors.length < 1) {
        macroDiv.innerHTML = "Please enter a topping and/or a flavor."
        macroDiv.style.color = "#f54336"
        return
    }

    let macro;
    let coneMacro = cone === "bowl" ? SPEEDY_BOWL : SPEEDY_CONE;
    let flvrMacro = flavors.length > 1 ? SPEEDY_DIFF_FLVR.replace("[base1]", flavors[0]).replace("[base2]", flavors[1]) : SPEEDY_SAME_FLVR.replace("[base1]", flavors[0]);
    let toppingsMacro;
    let fin = toppings.length > 0 ? SPEEDY_FINISHES_W_TOP : SPEEDY_FINISHES_NO_TOP;
    let finishesMacro;

    /* SET BIG MACRO */
    if (toppings.length > 0 && finishes.length > 0) {
        macro = SPEEDY_MACROS.ALL
    } else if (toppings.length > 0) {
        macro = SPEEDY_MACROS.TOPPINGS
    } else if (finishes.length > 0) {
        macro = SPEEDY_MACROS.FINISHES
    }

    /* SET TOPPINGS MACRO */
    switch (toppings.length) {
        case 1:
            toppingsMacro = SPEEDY_TOPPINGS.ONE.replace("[topping1]", toppings[0])
            break
        case 2:
            toppingsMacro = SPEEDY_TOPPINGS.TWO.replace("[topping1]", toppings[0]).replace("[topping2]", toppings[1])
            break
        case 3:
            toppingsMacro = SPEEDY_TOPPINGS.THREE.replace("[topping1]", toppings[0]).replace("[topping2]", toppings[1]).replace("[topping3]", toppings[2])
            break
        default:
            toppingsMacro = ""
    }

    /* SET FINISHES MACRO */
    if (finishes.length === 3 && syrup) {
        finishesMacro = fin.ALL.replace('[syrup]', syrup)
    } else if (finishes.length === 3) {
        finishesMacro = fin.WHIPSPRINKCHERRY
    } else if (finishes.includes('whipped cream') && finishes.includes('sprinkles')) {
        finishesMacro = fin.WHIPSPRINK
    } else if (finishes.includes('cherry') && finishes.includes('sprinkles')) {
        finishesMacro = fin.CHERRYSPRINK
    } else if (syrup && finishes.includes('sprinkles')) {
        finishesMacro = fin.SYRUPSPRINK.replace('[syrup]', syrup)
    } else if (syrup && finishes.includes('whipped cream')) {
        finishesMacro = fin.SYRUPWHIP.replace('[syrup]', syrup)
    } else if (syrup && finishes.includes('cherry')) {
        finishesMacro = fin.SYRUPCHERRY.replace('[syrup]', syrup)
    } else if (finishes.includes('cherry') && finishes.includes('whipped cream')) {
        finishesMacro = fin.CHERRYWHIP
    } else if (finishes.includes('cherry')) {
        finishesMacro = fin.CHERRY
    } else if (finishes.includes('whipped cream')) {
        finishesMacro = fin.WHIP
    } else if (finishes.includes('sprinkles')) {
        finishesMacro = fin.SPRINKLES
    } else if (syrup) {
        finishesMacro = fin.SYRUP.replace('[syrup]', syrup)
    }

    /* FINISH BIG MACRO */
    macroDiv.innerHTML = macro.replace("[SC]", coneMacro)
        .replace("[base]", flvrMacro)
        .replace("[pronounCap]", pronoun)
        .replace("[toppings]", toppingsMacro)
        .replace("[finishes]", finishesMacro)
}

function reset() {
    [...document.getElementsByClassName("reset-select")].forEach( ele => {
        ele.value = ""
    });
    [...document.getElementsByClassName("reset-form")].forEach( ele => {
        console.log("ele >>> ", ele)
        ele.reset()
    });
    [...document.getElementsByClassName("reset-macro")].forEach( ele => {
        ele.innerHTML = macroHere
        ele.style.color = "white"
    })
    globalCone = '_';
    globalFlavors = '_';
    globalPieFlavor = '_';
    globalPieIceFlvr = '_';
    globalCakeFlavor = '_';
    globalCakeIceFlvr = '_';
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
