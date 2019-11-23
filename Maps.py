#!/usr/bin/env python
# coding: utf-8

import folium
import pandas as pd
from geopy.geocoders import Nominatim
from folium.plugins import MarkerCluster
from lubartow_air_polution_scrapper import air_scrapper
import branca.colormap as cm
import datetime

df = pd.read_csv(air_scrapper())

df = df[~(pd.isna(df.status))]
df.reset_index(inplace=True)

geolocator = Nominatim()
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

m = folium.Map(addr_loc[0], zoom_start=13, control_scale=True)

legend = cm.StepColormap(df_col['Color'].values.tolist(), vmin = 0, vmax=12)

now = datetime.datetime.now()
last_update = 'Ostatnia aktualizacja: {}'.format(now.strftime('%Y-%m-%d %H:%M:%S'))

legend_html =   '''
                <div style="position: fixed; 
                            top: 50px; right: 150px; width: 300px; height: 90px; 
                            border:3px dark grey; z-index:9999; font-size:14px;
                            ">&nbsp; {} <br>
		     </div>
                ''' .format(last_update)
     
m.get_root().html.add_child(folium.Element(legend_html))

legend.caption = df_col['Status'].to_string(index=False).replace('\n','->')
legend.index = [0,1,3,5,7,10,16]
m.add_child(legend)

for i in range(len(addr_loc)):
    info = 'Status: ' + df.iloc[i]['status'] +'<br>PM 2.5: '+ str(df.iloc[i]['PM2_5']) + '<br>PM 10: '+ str(df.iloc[i]['PM10'])
   
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
