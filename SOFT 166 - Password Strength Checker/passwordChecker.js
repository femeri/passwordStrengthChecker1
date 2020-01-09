function switchLightOn(checkColor)
{
    //This code below sends commands to the HUE lights.
    var lightCommandGreen = {"on" : true, "hue" : 25500};
    var lightCommandRed = {"on" : true, "hue" : 65535};
    var lightCommandBlue = {"on" : true, "hue" : 46920};
    var lightCommandNEC = {"on" : true, "hue" : 12299};
    var lightCommandSpace = {"on" : true, "hue" : 33333};   //Each color of the HUE light has a number allocated to it, those are the numbers on the end.
    var lightURI = "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/1/state/"; //This is the link that connects the HUE lights to the HTML code.
    console.log(lightURI);
    
    if(checkColor == 1)
        {
            $.ajax({
                url: lightURI,
                type: "PUT",
                data: JSON.stringify(lightCommandRed)
            })
        }
    if(checkColor == 2)
        {
            $.ajax({
                url: lightURI,
                type: "PUT",
                data: JSON.stringify(lightCommandBlue)
            })
        }
    
    if(checkColor == 3)
        {
            $.ajax({
                url: lightURI,
                type: "PUT",
                data: JSON.stringify(lightCommandGreen)
            })
        }
    if(checkColor == 4)
        {
            $.ajax({
                url: lightURI,
                type: "PUT",
                data: JSON.stringify(lightCommandSpace)
            })
        }
    if(checkColor == 5)
        {
            $.ajax({
                url: lightURI,
                type: "PUT",
                data: JSON.stringify(lightCommandNEC)
            })
        }
}

function showPass()
    {
        var symbols , pass , symCheck , html , newHtml , space , alph , num , sym , check;
        alph = 0;
        space = 0;
        num = 0;
        sym = 0;
        symCheck = 0;
        pass = document.querySelector("#lock").value;
        symbols = ["~","!","@","#","$","%","^","&","*","(",")","_","-","=","+",";",":","<",">","?"];      //The list of symbols that would be searched for.
        html = '%text%';
        
        if(pass.length > 6)
        {
             //These check the spacing and characters in the password.
            for(var j = 0; j < pass.length; j++)
                {
                    console.log(pass[j]);
                    if(pass[j] == " ")
                        {
                            console.log("space");
                            
                            space = 1;
                        }
                    if(!isNaN(pass[j]))
                        {
                            console.log("Number");
                            num = 1;
                        }
                    if(isNaN(pass[j]))
                        {
                            symCheck=0;
                            symbols.forEach(function(e){
                                if(pass[j] == e)
                                {
                                    symCheck = 1;  
                                }
                            });
                            if(symCheck == 1)
                                {
                                    console.log("Symbol");
                                    sym = 1;
                                }
                            else
                                {
                                    alph = 1;
                                    console.log("Alphaet");
                                }
                            
                        }
                }

            check = alph + sym + num;   //This makes sure that all checks are done.



            if(space == 1)
                {   //Code to check spacing in password.
                    newHtml = html.replace("%text%","Please remove space.");
                    document.querySelector("#strength").textContent = newHtml;
                    switchLightOn(4);
                }
            else
                {
                    if(check == 1)
                        {   //If password does not have numbers, letters or if they are too long this displays a The text below and signals the lights
                            newHtml = html.replace("%text%","Your password is weak.");
                            document.querySelector("#strength").textContent = newHtml;
                            switchLightOn(1);
                        }
                    else if(check == 2)
                        {   // If password has appropriate number of numbers, letters and if long enough this displays it and signals the lights
                            newHtml = html.replace("%text%","password OK.");
                            document.querySelector("#strength").textContent = newHtml;
                            switchLightOn(2);
                        }
                    else if(check == 3)
                        {   // If password is strong having numbers, letters, symbols and no spaces
                            newHtml = html.replace("%text%","Your password is strong.");
                            document.querySelector("#strength").textContent = newHtml;
                            switchLightOn(3);
                        }
                }
        }
        else
            {
                console.log("Short");
                newHtml = html.replace("%text%","Your password must be at least 7 characters long");
                document.querySelector("#strength").textContent = newHtml;
                switchLightOn(5);
            }
        
    }
function pageChanger1() //pageChangers are used to navigate between one page and another using buttons
    {
        document.querySelector("#changeBtn-1").classList.add("show");
        document.querySelector("#page-1").classList.add("showPage");
        document.querySelector("#strength").classList.remove("showPage");
        for(var x = 1; x < 6; x++)
            {
                if(x!=1)
                    {
                        document.querySelector("#changeBtn-"+x).classList.remove("show");
                        document.querySelector("#page-"+x).classList.remove("showPage");
                    }
            }
    }
function pageChanger2()
    {
        document.querySelector("#changeBtn-2").classList.add("show");
        document.querySelector("#page-2").classList.add("showPage");
        document.querySelector("#strength").classList.add("showPage");
        for(var x = 1; x < 6; x++)
            {
                if(x!=2)
                    {
                        document.querySelector("#changeBtn-"+x).classList.remove("show");
                        document.querySelector("#page-"+x).classList.remove("showPage");
                    }
            }
    }
function pageChanger3()
    {
        document.querySelector("#changeBtn-3").classList.add("show");
        document.querySelector("#page-3").classList.add("showPage");
        document.querySelector("#strength").classList.remove("showPage");
        for(var x = 1; x < 6; x++)
            {
                if(x!=3)
                    {
                        document.querySelector("#changeBtn-"+x).classList.remove("show");
                        document.querySelector("#page-"+x).classList.remove("showPage");
                    }
            }
    }
function pageChanger4()
    {
        document.querySelector("#changeBtn-4").classList.add("show");
        document.querySelector("#page-4").classList.add("showPage");
        document.querySelector("#strength").classList.remove("showPage");
        for(var x = 1; x <6; x++)
            {
                if(x!=4)
                    {
                        document.querySelector("#changeBtn-"+x).classList.remove("show");
                        document.querySelector("#page-"+x).classList.remove("showPage");
                    }
            }
    }
function pageChanger5()
{
    document.querySelector("#changeBtn-5").classList.add("show");
    document.querySelector("#page-5").classList.add("showPage");
    document.querySelector("#strength").classList.remove("showPage");
    for(var x = 1; x <6; x++)
    {
        if(x!=5)
        {
            document.querySelector("#changeBtn-"+x).classList.remove("show");
            document.querySelector("#page-"+x).classList.remove("showPage");
        }
    }
}

document.querySelector("#analyzeButton").addEventListener("click",showPass);
document.addEventListener("keyup",function(event){if(event.keyCode==13){showPass()}});
document.querySelector("#changeBtn-1").addEventListener("click",pageChanger1);
document.querySelector("#changeBtn-2").addEventListener("click",pageChanger2);
document.querySelector("#define").addEventListener("click",pageChanger2);
document.querySelector("#changeBtn-3").addEventListener("click",pageChanger3);
document.querySelector("#changeBtn-4").addEventListener("click",pageChanger4);
document.querySelector("#changeBtn-5").addEventListener("click",pageChanger5);

//Background Image reference: (The cybersecurity place, 2016)
//references : The cybersecurity place (2016). Serious security: Three changes that could turn the tide on hackers | ZDNet. [image] Available at: https://thecybersecurityplace.com/serious-security-three-changes-that-could-turn-the-tide-on-hackers-zdnet/ [Accessed 9 Jan. 2020].