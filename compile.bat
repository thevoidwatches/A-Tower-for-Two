@echo off
..\Tweego\tweego.exe -o index.html code/twee code/js code/css
for %%I in (.) do set CurrDirName=%%~nxI
"C:\Program Files\7-Zip\7za.exe" a "%CurrDirName%.zip" index.html images
pause
:: This .bat compiles both a free release and a patreon release (without including patreon content in the free release).