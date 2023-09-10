const $html = document.querySelector('html')
const $checkbox = document.querySelector('#s1')

console.log($html)
console.log($checkbox)

if($checkbox){
$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})}