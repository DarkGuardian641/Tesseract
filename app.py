from flask import Flask, render_template

app = Flask(__name__)

# Home Page
@app.route('/')
def home():
    return render_template('index.html')

# Events Page
@app.route('/events')
def events():
    return render_template('events.html')

# Schedule Page (This was missing)
@app.route('/schedule')
def schedule():
    return render_template('schedule.html')

# Contact Page
@app.route('/contact')
def contact():
    return render_template('contact.html')

# Registration Page
@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/techsavy')
def techsavy():
    return render_template('techsavy.html')

@app.route('/valorant')
def valorant():
    return render_template('valorant.html')

@app.route('/escaperoom')
def escaperoom():
    return render_template('escaperoom.html')

@app.route('/tracex')
def tracex():
    return render_template('tracex.html')

@app.route('/roborace')
def roborace():
    return render_template('roborace.html')

@app.route('/obstacleblitz')
def obstacleblitz():
    return render_template('obstacleblitz.html')

@app.route('/coderelay')
def coderelay():
    return render_template('coderelay.html')

@app.route('/ideafusion')
def ideafusion():
    return render_template('ideafusion.html')

@app.route('/startupmania')
def startupmania():
    return render_template('startupmania.html')

@app.route('/bgmi')
def bgmi():
    return render_template('bgmi.html')

@app.route('/cadgenesis')
def cadgenesis():
    return render_template('cadgenesis.html')

@app.route('/craftncreate')
def craftncreate():
    return render_template('craftncreate.html')

@app.route('/qrquest')
def qrquest():
    return render_template('qrquest.html')

@app.route('/reelit')
def reelit():
    return render_template('reelit.html')
@app.route('/aiprompt')
def aiprompt():
    return render_template('aiprompt.html')

@app.route('/clashofminds')
def clashofminds():
    return render_template('clashofminds.html')

@app.route('/techarena')
def techarena():
    return render_template('techarena.html')
if __name__ == '__main__':
    app.run(debug=True)
