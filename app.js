let height=[],sortedHeights=[],height_array,children,sze,maxLimit,speed=1;
function addHeightsToDiv(){
    document.getElementById("height-array").innerHTML=" ";
    height=[];
    let rand=0;
    maxLimit=300;
    sze=document.getElementById("arr_sz").value;
    speed=document.getElementById("speed_input").value;
    for(let i=0;i<sze;i++){
        while(rand==0) rand=Math.floor(Math.random()*maxLimit);
        height.push(rand);
        rand=0;
    }
    let new_element,new_h;
    let class_name="heights";
    for(let i=0;i<sze;i++){
        new_element=document.createElement("div");
        new_element.classList.add(class_name);
        new_h=height[i]+"px";
        new_element.style.backgroundColor="red";
        new_element.style.width="8px";
        new_element.style.height=new_h;
        document.getElementById("height-array").appendChild(new_element);
    }
    sortedHeights=[];
    for(let i=0;i<sze;i++) sortedHeights[i]=height[i];
    sortedHeights.sort(function(a, b){return a - b});
    height_array=document.getElementById("height-array");
    children=document.getElementById("height-array").children;
    console.log(height);
}

addHeightsToDiv();
document.getElementById("new-array").addEventListener("click",addHeightsToDiv);

let arraySize = document.querySelector('#arr_sz');
    arraySize.addEventListener('input', function(){
    addHeightsToDiv();
});

let arraySpeed = document.querySelector('#speed_input');
arraySpeed.addEventListener('input', function(){
speed=document.getElementById("speed_input").value;
});

function disableSortingButton(){
    document.querySelector("#bubbleSort").disabled = true;
    document.querySelector("#insertionSort").disabled = true;
    document.querySelector("#mergeSort").disabled = true;
    document.querySelector("#quickSort").disabled = true;
    document.querySelector("#selectionSort").disabled = true;
}
function enableSortingBtn(){
    document.querySelector("#bubbleSort").disabled = false;
    document.querySelector("#insertionSort").disabled = false;
    document.querySelector("#mergeSort").disabled = false;
    document.querySelector("#quickSort").disabled = false;
    document.querySelector("#selectionSort").disabled = false;
}
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}
function disableNewArrayBtn(){
    document.querySelector("#new-array").disabled = true;
}
function enableNewArrayBtn(){
    document.querySelector("#new-array").disabled = false;
}
