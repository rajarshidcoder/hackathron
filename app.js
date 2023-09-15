Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup',(el)=>{
        if (e.value.length>0){
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(180deg)";

        }else{
            document.getElementsByClassName('bi-caret-down-fill ')[i].style.transform="rotate(0deg)";


        }
    })
})


function openWeb() {
    // Get the condition from the input box
    const condition = document.getElementById('location_given').value;

    // Check if the condition is met
    if (condition === 'shop') {
        const url1 = 'Shop/index.html';
        window.location.href = url1; // Open in the same tab
    } else if (condition === 'condition2') {
        const url2 = 'https://www.example2.com';
        window.location.href = url2; // Open in the same tab
    } else if (condition === 'condition3') {
        const url3 = 'https://www.example3.com';
        window.location.href = url3; // Open in the same tab
    } else {
        alert('No matching condition found. Website will not be opened.');
    }
}
