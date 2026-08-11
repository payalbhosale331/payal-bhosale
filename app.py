from flask import Flask, render_template, request, redirect, session, flash
import os
import firebase_admin
from firebase_admin import credentials, db

app = Flask(__name__)
app.secret_key = "secret123"

# --------------------------------------------------
# Firebase Connection
# --------------------------------------------------

firebase_key = os.path.join(
    os.path.dirname(__file__),
    "firebase_key.json"
)

cred = credentials.Certificate(firebase_key)

firebase_admin.initialize_app(
    cred,
    {
        "databaseURL": "https://al-resume-screening-system-default-rtdb.europe-west1.firebasedatabase.app"
    }
)


# --------------------------------------------------
# Home
# --------------------------------------------------

@app.route("/")
def home():
    return render_template("register.html")


# --------------------------------------------------
# Login Page
# --------------------------------------------------

@app.route("/login")
def login():
    return render_template("login.html")


# --------------------------------------------------
# Register Page
# --------------------------------------------------

@app.route("/register")
def register():
    return render_template("register.html")


# --------------------------------------------------
# Dashboard
# --------------------------------------------------

@app.route("/dashboard")
def dashboard():

    if "user" not in session:
        return redirect("/login")

    return render_template(
        "dashboard.html",
        name=session.get("name", "User")
    )


# --------------------------------------------------
# Logout
# --------------------------------------------------

@app.route("/logout")
def logout():

    session.clear()

    flash("Logout Successful")

    return redirect("/login")


# --------------------------------------------------
# Firebase Test Route
# --------------------------------------------------

@app.route("/firebase-test")
def firebase_test():

    try:

        test_ref = db.reference("system")

        test_ref.set({
            "status": "Firebase Connected",
            "project": "AI Resume Screening System"
        })

        return "Firebase Connected Successfully!"

    except Exception as e:

        return f"Firebase Error: {str(e)}"


# --------------------------------------------------
# Run Flask
# --------------------------------------------------

if __name__ == "__main__":
    app.run(debug=True)