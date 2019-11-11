#!/usr/bin/env python
# coding: utf-8

import folium
import pandas as pd
from geopy.geocoders import Nominatim
from folium.plugins import MarkerCluster

df = pd.read_csv(air_scrapper())

geolocator = Nominatim(user_agent="specify_your_app_name_here")
addr = []
for i in range(len(df)):
	addr.append(geolocator.geocode(df['loc'][i]))

addr_loc = []
for i in addr:
	try:
		addr_loc.append(i[-1])
	except:
		continue

df_loc = pd.DataFrame(addr_loc,columns=['latitude','longitude'])

df = pd.concat([df,df_loc],axis=1)

df_col = pd.DataFrame({'Status': ["Bardzo dobry", "Dobry", "Umiarkowany", "Dostateczny", "Zły", "Bardzo zły"],
              'Color': ['blue','green','yellow','orange','red','black']})

m = folium.Map(addr_loc[0],zoom_start=13)

for i in range(len(addr_loc)):
    info = 'Status: ' + df.iloc[i]['status'] +'<br>PM 2.5: '+ str(df.iloc[i]['PM2_5']) +     '<br>PM 10: '+ str(df.iloc[i]['PM10'])
   
    marker_cluster = MarkerCluster().add_to(m)
    
    folium.CircleMarker(
        location=addr_loc[i],
        popup=info,
        radius=20,
        color=str(df_col.loc[df_col['Status'] == df.iloc[i]['status'],['Color']]).rsplit()[-1],
        fill=True
    ).add_to(marker_cluster)

filepath = r'C:\Users\Paul\Desktop\gs\air_map_Lubartow\index.html'

m.save(filepath)
