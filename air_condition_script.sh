cd C:/Users/Paul/Desktop/gs/air_map_lubartow
echo `pwd`
echo `date`

python Maps.py

git add .
git commit -m "Change made in `date`" 
git push
