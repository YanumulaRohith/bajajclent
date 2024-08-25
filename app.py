from flask import Flask, request, jsonify

app = Flask(__name__)

# Static Information
USER_ID = "john_doe_17091999"
EMAIL = "john@xyz.com"
ROLL_NUMBER = "ABCD123"

def process_data(data):
    numbers = [item for item in data if item.isdigit()]
    alphabets = [item for item in data if item.isalpha()]
    lowercase_alphabets = [item for item in alphabets if item.islower()]
    highest_lowercase_alphabet = max(lowercase_alphabets, default=None)

    return {
        "is_success": True,
        "user_id": USER_ID,
        "email": EMAIL,
        "roll_number": ROLL_NUMBER,
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": [highest_lowercase_alphabet] if highest_lowercase_alphabet else []
    }

@app.route('/bfhl', methods=['POST'])
def post_endpoint():
    try:
        data = request.get_json().get('data', [])
        if not isinstance(data, list):
            return jsonify({"is_success": False, "message": "Invalid input format"}), 400
        response = process_data(data)
        return jsonify(response), 200
    except Exception as e:
        return jsonify({"is_success": False, "message": str(e)}), 500

@app.route('/bfhl', methods=['GET'])
def get_endpoint():
    return jsonify({"operation_code": 1}), 200

if __name__ == '__main__':
    app.run(debug=True)
