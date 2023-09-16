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
    if (condition === 'bishnupur') {
        const url1 = 'bishnupur/index.html';
        window.location.href = url1; // Open in the same tab
    } else if (condition === 'shantiniketan') {
        const url2 = 'shantiniketan/index.html';
        window.location.href = url2; // Open in the same tab
    } else if (condition === 'condition3') {
        const url3 = 'https://www.example3.com';
        window.location.href = url3; // Open in the same tab
    } else {
        alert('No match found. (STILL IN DEVELOPMENT)');
    }
}
