from flask import Flask, request, jsonify
import google.generativeai as genai
import os
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model = genai.GenerativeModel('gemini-pro')

@app.route('/api/hello', methods=['GET'])
def hello_world():
    return jsonify({"message": "Hello from Flask!"})

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data['message']
    chat = model.start_chat()
    response = chat.send_message(user_message)
    return jsonify({'reply': response.text})
    
if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000)
    # app.run(debug=True)