# -*- coding: utf-8 -*-
"""
Created on Sat Apr 27 10:03:35 2019

@author: Paul
"""

from flask import Flask
import matplotlib.pyplot as plt

app = Flask(__name__)

@app.route("/")
def hello():
	x = [1,3,52,1]
	fig = plt.figure()
	plt.plot(x)
	plt.show()
	return fig

if __name__ == '__main__':
	app.run(debug=True)
	
	