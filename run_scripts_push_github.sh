echo `pwd`
echo `date`

python maps.py

git add .
git commit -m "Change made in `date`" 
git push
