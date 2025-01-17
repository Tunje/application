const gridElements = ['grid-item_1','grid-item_2','grid-item_3','grid-item_4','grid-item_5','grid-item_6','grid-item_7','grid-item_8','grid-item_9','grid-item_10','grid-item_11A','grid-item_12','grid-item_13','grid-item_14']
console.log("script functioning");

function ToggleChidrensClassRemover(element){
    let children = element.children;
    console.log("Number of children:", children.length)
    for (let g = 0; g < children.length; g++)
        {
        if(!children[g].classList.contains("title"))
            {
            if(children[g].classList.contains("remove"))
                {
                 children[g].classList.remove("remove");
                }
            else
                {
                children[g].classList.add("remove");
                }
            }
        }
    }
function nav(element)
    {
    
    }


function centralize(button)
    {
    let hide = document.getElementsByClassName("shade");
    let count = gridElements.length;
    let k = false;
    for(let j = 0; j < hide.length; j++)
        {
        if(hide[j].classList.contains("grid-item_majoris"))
            {
            k = true;
            break;
            }
        }
    if(k === false)//// if their is no majoris
        {
        for(let i = 0; i < hide.length; i++)
            {
            if(hide[i].classList.contains("seven") || hide[i].classList.contains("eight") || hide[i].classList.contains("nine") || hide[i].classList.contains("twelve") || hide[i].classList.contains("thirteen"))
                {
                if(!button.classList.contains("thirteen"))
                    {
                    hide[i].classList.add("remove");
                    }
                else if(!hide[i].classList.contains("thirteen"))
                    {
                    hide[i].classList.add("remove");
                    }
                }
            else if(hide[i].classList.contains("grid-item_11A"))
                {
                hide[i].classList.remove("grid-item_11A");
                hide[i].classList.add("grid-item_11B");
                }
            }
        for(let i = 0; i < count; i++)
            {
            if(button.classList.contains(gridElements[i]))
                {
                button.classList.remove(gridElements[i]);
                button.classList.add("grid-item_majoris");
                button.classList.add("centralized");
                ToggleChidrensClassRemover(button);
                }
            }
        }
    else //// fi there is a majoris and its the button that you clicked
        {
        if(button.classList.contains("grid-item_majoris"))
            {
            for (let j = 0; j < hide.length; j++) 
                {
                if (hide[j].classList.contains("grid-item_majoris")) 
                    {
                    hide[j].classList.remove("grid-item_majoris");
                    hide[j].classList.remove("centralized");
                    hide[j].classList.add(gridElements[j]);
                    ToggleChidrensClassRemover(hide[j]);
                    }
                if (hide[j].classList.contains("remove")) 
                    {
                    hide[j].classList.remove("remove");
                    }
                if(hide[j].classList.contains("grid-item_11B"))
                    {
                    hide[j].classList.remove("grid-item_11B");
                    hide[j].classList.add("grid-item_11A");
                    }
                }
            }
        else ///// if there is a majoris and its not the button you click
            {
            for (let j = 0; j < hide.length; j++) 
                {
                if (hide[j].classList.contains("grid-item_majoris")) 
                    {
                    hide[j].classList.remove("grid-item_majoris");
                    hide[j].classList.remove("centralized");
                    hide[j].classList.add(gridElements[j]);
                    if(hide[j].classList.contains("thirteen"))
                        {
                        hide[j].classList.add("remove");
                        }
                     ToggleChidrensClassRemover(hide[j]);
                    }
                }
            for(let i = 0; i < count; i++)
                {
                if(button.classList.contains(gridElements[i]))
                    {
                    button.classList.remove(gridElements[i]);
                    button.classList.add("grid-item_majoris");
                    button.classList.add("centralized");
                    ToggleChidrensClassRemover(button);
                    }
                }
            }
        }
    }