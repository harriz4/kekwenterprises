const ICE_CREAM_DEFAULTS = "iceCreamDefault"
const CONE_MACROS = [
    "/em grabs a [cone] and carefully wraps it in a colorful paper sleeve.",
    "/em grabs a [cone] and wraps it in a colorful paper sleeve.",
    "/em grabs a [cone] and skillfully wraps it in a colorful paper sleeve."
]
const BOWL_MACROS = [
    "/em grabs a colorful paper bowl from beneath the counter.",
    "/em selects a colorful paper bowl from beneath the counter.",
    "/em retrieves a colorful paper bowl from beneath the counter."
]
const SAME_FLVR_MACROS = [
    "/em adds a scoop of [flavor] into the waiting [cone] before gingerly placing another atop it.",
    "/em adds two scoops of [flavor] to the [cone].",
    "/em skillfully stacks two scoops of [flavor] in the [cone]."
]
const DIFF_FLVR_MACROS = [
    "/em adds a scoop of [flavor1] into the [cone] before gingerly placing a scoop of [flavor2] atop it.",
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
    "/em takes a matcha waffle cone and adds two scoops of ice cream—one strawberry, one matcha. [pronounCap] then adds cut strawberries and white chocolate chips before drizzling it with strawberry syrup. [pronounCap] tops it off with whipped cream and a chocolate-dipped strawberry before lightly dusting it with powdered sugar.",
    "/em takes a chocolate-dipped waffle cone and adds two scoops of cookies ‘n cream. [pronounCap] scatters chocolate chips, cookie crumbles, and marshmallows over it before adding a dash of caramel syrup. Finally, [pronounLow] places a soft s’mores cookie on top.",
    "/em"
]
const MILK_MACROS = [
    "/em retrieves a cold bottle of [milk] milk from the refrigerator.",
    "/em selects a cold bottle of [milk] milk from the refrigerator.",
    "/em grabs a cold bottle of [milk] milk from the refrigerator."
]
const PIE_BREAD_WITH_ICE_MACROS = [
    "/em cuts a warm slice of [pie/bread] and plates it beside a scoop of [flavor].",
    "/em plates a warm slice of [pie/bread] and balances a scoop of [flavor] on top of it."
]
const CAKE_WITH_ICE_MACROS = [
    "/em plates a slice of [cake] and balances a scoop of [flavor] on top of it.",
    "/em cuts a slice of [cake] and plates it beside a scoop of [flavor]."
]
let globalCone = '_';
let globalFlavors = '_';
let pronoun = '_';
let globalPieFlavor = '_';
let globalPieIceFlvr = '_';
let globalCakeFlavor = '_';
let globalCakeIceFlvr = '_';
const macroHere = '----- Macro Here -----'

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
            [...document.getElementsByClassName(ICE_CREAM_DEFAULTS)].forEach( ele => ele.click() )
            break;
        case "rokutomi":
            break;
        case "cafe":
            break;
        case "beverages":
            document.getElementById("bevDefault").click()
            break;
        case "specials":
            document.getElementById("specialsDefault").click()
            getSpecialsMacros()
            break;
        case "banana":
            document.getElementById("bananaDefault").click()
            break;
        case "dragonberry":
            document.getElementById("dragonDefault").click()
            break;
        case "yummeh":
            document.getElementById("yummehDefault").click()
            break;
        case "pieBread":
            document.getElementById("pieWIceDefault").click()
            break;
        case "cake":
            document.getElementById("cakeWIceDefault").click()
            break;
        
    }


}

function handleConeChange(event, id) {
    let elem = [...document.getElementsByClassName(id)]
    const cone = event.target.value.toLowerCase();
    let idx = 0;
    switch (cone) {
        case "waffle cone":
        case "taiyaki":
            idx = 0;
            elem.forEach( ele => {
                ele.innerHTML = CONE_MACROS[idx].replaceAll('[cone]', cone);
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
        ele.style.color = 'black'
    })
    if (flavors.length > 2) {
        elem.forEach(ele => {
            ele.innerHTML = "Selected more than 2 flavors. Try again."
            ele.style.color = "red"
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
    elem.style.color = "black"
    if (flavors.length > 2) {
        elem.innerHTML = "Selected more than 2 flavors. Try again."
        elem.style.color = "red"
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
        ele.style.color = "black"
    })
    if (toppings.length > 3) {
        elem.forEach(ele => {
            ele.innerHTML = "Selected more than 3 toppings. Try again."
            ele.style.color = "red"
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
    let elem = [...document.getElementsByClassName("specials")]
    let idx = 0
    elem.forEach( ele => {
        ele.innerHTML = SPECIALS_MACROS[idx].replaceAll("[pronounCap]", pronoun).replaceAll("[pronounLow]", pronoun.toLowerCase())
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
        document.getElementById('pieNoIceMacro').innerHTML = `/em plates a warm slice of freshly-baked ${event.target.value}.`
        globalPieFlavor = event.target.value;
        if (globalPieIceFlvr !== '_') {
            let elem = [...document.getElementsByClassName("pieWIceMacro")]
            let idx = 0;
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
        document.getElementById('cakeNoIceMacro').innerHTML = `/em plates a decadent slice of homemade ${event.target.value}.`
        globalCakeFlavor = event.target.value;
        if (globalCakeIceFlvr !== '_') {
            let elem = [...document.getElementsByClassName("cakeWIceMacro")]
            let idx = 0;
            elem.forEach(ele => {
                ele.innerHTML = PIE_BREAD_WITH_ICE_MACROS[idx].replaceAll("[cake]", globalCakeFlavor.toLowerCase()).replaceAll('[flavor]', globalCakeIceFlvr.toLowerCase())
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
