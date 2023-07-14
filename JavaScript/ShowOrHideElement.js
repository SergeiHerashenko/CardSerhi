function Show(element){
    let pageElement = [
        { elementid: "HomePage", namediv: "StartContent" },
        { elementid: "AboutMePage", namediv: "AboutMeContent" },
        { elementid: "WorkPage", namediv: "WorkContent" },
        { elementid: "SkillPage", namediv: "SkillContent" },
        { elementid: "ConectionPage", namediv: "ConectioContent" }
    ];

    let elementConteiner = [
        { NameContent: "AboutMeContent", name_conteiner : "StikerContainer"},
        { NameContent: "AboutMeContent", name_conteiner : "StikerContainer1"},
        { NameContent: "WorkContent", name_conteiner : "Education"},
        { NameContent: "SkillContent", name_conteiner : "Content"},
        { NameContent: "ConectioContent", name_conteiner : "StikerConection"}
    ];

    let Stroka = element.id;
    let NewStroka = Stroka.replace("Page", "Title");

    if (element.id == "HomePage") {

        for (let i = 0; i < pageElement.length; i++) {

          if (pageElement[i].namediv !== "StartContent") {

            document.getElementsByClassName(pageElement[i].namediv)[0].classList.add("Hide");

          } else {

            document.getElementsByClassName(pageElement[i].namediv)[0].classList.remove("Hide");
            document.getElementsByClassName(pageElement[i].namediv)[0].classList.add("Show");

          }
        }
        
    } else {

        for(let i = 0; i < pageElement.length; i++){

            if(element.id == pageElement[i].elementid){

                document.getElementsByClassName(pageElement[i].namediv)[0].classList.remove("Hide");
                document.getElementsByClassName(pageElement[i].namediv)[0].classList.add("Show");

                let animatedElement = document.getElementsByClassName(NewStroka)[0];
      
                if (animatedElement.classList.contains("animation")) {
                  animatedElement.classList.remove("animation");
                }
                
                animatedElement.addEventListener("animationend", function() {

                    for (let j = 0; j < elementConteiner.length; j++) {

                        if(pageElement[i].namediv == elementConteiner[j].NameContent){

                            let addClass = document.getElementsByClassName(elementConteiner[j].name_conteiner);

                            for (let k = 0; k < addClass.length; k++){
                                addClass[k].classList.remove("Hide")
                                addClass[k].classList.add("Show");
                            }

                        } else {

                            let remoweClass = document.getElementsByClassName(elementConteiner[j].name_conteiner);

                            for (let k = 0; k < remoweClass.length; k++){
                                remoweClass[k].classList.add("Hide")
                                remoweClass[k].classList.remove("Show");
                            }

                        }
                    }

                }, { once: true });

                setTimeout(function() {
                  animatedElement.classList.add("animation");
                }, 10);

            } else {

                document.getElementsByClassName(pageElement[i].namediv)[0].classList.add("Hide");
          }
        }
    }
}