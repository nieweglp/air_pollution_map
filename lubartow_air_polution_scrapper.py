#!/usr/bin/env python
# coding: utf-8

import requests
from bs4 import BeautifulSoup
import re
import datetime
import pandas as pd


def main():
    url = 'https://lubartow24.pl/'
    soup = BeautifulSoup(requests.get(url).text, 'lxml')
    now = str(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

    l = []
    for element in soup.find_all('div', class_='panel')[-5:]:
        l.append(now + '\n' +
                 element.get_text().strip().replace(' · ', '\n'))

    str_list = ['Indeks Jakości Powietrza:  ', 'PM2.5: ', 'PM10: ']
    str_place = ['INTERDUO.pl', 'Kancelaria']

    ln = []
    for i in l:
        ni = re.sub('|'.join(str_list), '', re.sub(
            '|'.join(str_place), 'Lubartów', i))
        ln.append(ni.splitlines())

    df = pd.DataFrame(
        ln, columns=['timestamp', 'loc', 'status', 'PM2_5', 'PM10'])

    now = now.replace(':', '').replace(' ', '_')
    out_name = (
        r'\data\data_' + now + '.csv')
    df.to_csv(out_name, index=False)


if __name__ == "__main__":
    main()
