# -*- coding: utf-8 -*-
"""
Created on Sat Apr 13 22:39:53 2019

@author: Paul
"""

import geocoder

g = geocoder.google('San Diego, California')

# geocoder.keys(')

import geopy
import pandas as pd
import time

df = pd.read_csv(r'C:\Users\Paul\Desktop\python\om\model\miasta.csv', 
		     names = ['miasto','ilosc'])

lm = list(df['miasto'])

g = geopy.Nominatim()


loc = []
def get_loc():
	for i in lm[86:]:
		try:
			loc.append([i, g.geocode(i).longitude,g.geocode(i).latitude])
		except:
			time.sleep(2)
			i = lm.index(i) - 1
	return loc

loc2 = get_loc()

(pd.DataFrame(loc)).to_csv(r'C:\Users\Paul\Desktop\python\om\model\loc_city.csv',
header=['name','lon','lat'])

