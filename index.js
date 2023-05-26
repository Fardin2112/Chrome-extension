let myLeads = []
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("save-el")
const ulEl = document.getElementById("ul-el")


// document.getElementById('textbox_id').value    to get the value of desired box
inputbtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))

    renderLeads()
    console.log(localStorage.getItem("myLeads"))
  
})

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
function renderLeads(){   
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
        //listItems += "<li><a target='_blank' href='"+ myLeads[i] +"'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href="${ myLeads[i]}">
                    ${myLeads[i]} 
                </a>
            </li>
        `
    }
    // 3. Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems
}


