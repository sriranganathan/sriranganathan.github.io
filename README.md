# sriranganathan.github.io
This is my first attempt in developing any kind of a web page. This may look a bit amateurish right now. A lot of updates will be made to this page.


This webpage is designed using HTML,CSS and JavaScript.
The webpage consists of two main blocks. The first block contains my image and my name and description.
When you scroll down you get to view the second block which has a 'h' tag and 'p' tag which is initially 
set to my intro. When you click the icons present in the navigation bar which is present on the top of 
webpage on all occasions it calls a JavaScript function which changes the content of the 'h' and 'p' tag.
lastly the webpage consists of a footer which contains my roll no and contact icons.

THE CALCULATOR:

The calculator is present as one of the icons in the navigation bar. when clicked a image is displayed in 
the second block of the webpage. When the image is clicked it opens a new webpage containing the calculator.

The calculator is constructed using different div for each and every box(numbers,operators). the div are 
positioned absolutely by the help of css. the color of different boxes are set using css. This gives us the 
design of the calculator. When ever a box is clicked a function is called with the value inside the box is 
passed as its argument. Inside the function the argument is concatenated with a  string called 'input' which
is empty when the webpage is loaded. According to the length 'input' the font-size of inputarea is decreased
or increased. Then the 'input' string is separated into numbers and operators which is stored into a array
of strings called 'separated'. Then the 'separated' array is searched for operators like '^' 'sq root' '!'
(which are not compatable with eval()). If found then the numbers stored in separated array according to the
operator are selected and the operation is done manually and the result is stored in the position after deleting
the operator and the operands. This 'sepatated' array is used to construct a new string which is passed to the 
eval() function. The output is set to the return value of eval().



Screenshot of my CAL-C:



![Screenshot of my CAL-C:](https://github.com/sriranganathan/sriranganathan.github.io/blob/master/images/mycalc.png)

Screenshot of standard lollipop calc:
![Screenshot of standard lollipop calc:](https://github.com/sriranganathan/sriranganathan.github.io/blob/master/images/mobile-screenshot.png)
