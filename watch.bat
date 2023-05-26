:try
..\Tweego\tweego.exe -o index.html -w code/twee code/js code/css
pause
goto try
:: This .bat recompiles the free release file any time a change to a file in ./src is made, allowing you to simply reload the page in a web browser to check that things are correct. Be aware that some errors may break compilation.