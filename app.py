from flask import Flask, render_template, request
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("adoptee_entry_form.html")

@app.route('/thanks', methods=["GET", "POST"])
def thanks():
    return request.form.get("firstName")



if __name__ == '__main__':
  app.run(host='127.0.0.1', port=8000, debug=True)
