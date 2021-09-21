// Utilisons lafonction Inserytn afin de voir less nombres inserés.
function insert(num) 
{
document.form1.textview.value = document.form1.textview.value + num;
}

// fonction Equals capable  de retourner les resultats.
function equal()
{
var exp = document.form1.textview.value;
if(exp)
{
document.form1.textview.value = eval(exp)
}
}


/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */
function backspace()
{
var exp = document.form1.textview.value;
document.form1.textview.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
}
 function sqrt(){
     sqrt=Math.sqrt();
 }
