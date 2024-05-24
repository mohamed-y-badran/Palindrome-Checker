
function isPal (str){
    var cleanstr = str.toLowerCase().replace(/[^a-z0-9]/g,'')
    var revstr = cleanstr.split('').reverse().join('')
    console.log(revstr)

    return cleanstr === revstr

}

function CheckPal(){

    var word = document.querySelector("#word")
    var result = document.querySelector("#result")

    if(isPal(word.value)){
        result.innerHTML = word.value + " is Pallindrome"

    } else {
        result.innerHTML = word.value + " is not Pallindrome"
    }
}



