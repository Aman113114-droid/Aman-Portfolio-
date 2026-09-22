from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/resume")
def resume():
    return send_from_directory(
        os.path.join(app.root_path, "static"),
        "Aman_Sharma_Resume.pdf",
        as_attachment=True
    )


if __name__ == "__main__":
    app.run(debug=True)