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

if __name__ == '__main__':
    app.run(debug=True)
