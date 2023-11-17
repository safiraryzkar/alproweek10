from flask import Flask
from flask import render_template, request, jsonify, send_from_directory
import csv

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/skills')
def skills():
    return render_template("skills.html")

@app.route('/projects')
def projects():
    return render_template("projects.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/fibonaci')
def fibonaci():
    return render_template("fibonaci.html")

@app.route('/getdata')
def getdata():
    return render_template("getdata.html")

@app.route('/form')
def form():
    return render_template("form.html")

@app.route('/hasil', methods=['GET', 'POST'])
def hasil():
    if request.method == 'POST':
        nama = request.form['nama']
        email = request.form['email']
        return render_template('hasil.html', nama=nama, email=email)
    return render_template('form.html')

if __name__ == '__main__':
    app.run(debug=True)