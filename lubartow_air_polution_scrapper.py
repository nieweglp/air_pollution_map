# -*- coding: utf-8 -*-
"""
Created on Sat Feb 16 17:05:26 2019

@author: Paul
"""
# web scrapping lubartow24.pl info about air polution

import requests
from bs4 import BeautifulSoup
import re
import datetime
import pandas as pd

def air_scrapper():
	url = 'https://lubartow24.pl/'
	soup = BeautifulSoup(requests.get(url).text, 'lxml')

	soup.find_all('div',class_='panel')[-6:]
	
	now = str(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
	
	l = []
	for element in soup.find_all('div',class_='panel')[-6:]:
		l.append(now + '\n' + 
		    element.get_text().strip().replace(' · ','\n'))
	
	str_list = ['Indeks Jakości Powietrza:  ','PM2.5: ','PM10: ']
	str_place = ['INTERDUO.pl','Kancelaria']
	
	ln = []
	for i in l:
		ni = re.sub('|'.join(str_list),'',re.sub('|'.join(str_place),'Lubartów',i))
		ln.append(ni.splitlines())
		
	df = pd.DataFrame(ln, columns=['timestamp','loc','status','PM2_5','PM10'])
	
	now = now.replace(':','')
	out_name = ('C:/Users/Paul/Desktop/python/datasets/Lubartow_air' + now + '.csv')
	
	return df.to_csv(out_name,index=False)
	
air_scrapper()

try:
	air_scrapper()
	print("You scrapped air polution data succesfully!")
except:
	print("Your script has falied :( !")



