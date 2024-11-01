from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dorks', methods=['POST'])
def get_dorks():
    data = request.json
    target = data.get('target')

   
    with open('dorks/dorks.json') as f:
        dorks_data = json.load(f)

    
    for category in dorks_data['categories']:
        for dork in category['dorks']:
            dork['query'] = dork['query'].replace("TARGET", target)
    
    return jsonify(dorks_data)

if __name__ == '__main__':
    app.run(debug=True)
