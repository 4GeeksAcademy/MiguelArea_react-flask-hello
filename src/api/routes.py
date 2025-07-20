"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def signup():
    body = request.get_json()
    email = body.get("email")
    password = body.get("password")

    if not email or not password:
        return jsonify({"msg": "Faltan datos"}), 400

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"msg": "El usuario ya existe"}), 400

    new_user = User(email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    response = jsonify({"msg": "Usuario registrado exitosamente"})
    response.headers["Content-Type"] = "application/json"
    return response, 201

@api.route('/login', methods=['POST'])
def login():
    body = request.get_json()
    email = body.get("email")
    password = body.get("password")

    if not email or not password:
        return jsonify({ "msg": "Faltan datos" }), 400

    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({ "msg": "Usuario no encontrado" }), 404

    if not user.check_password(password):
        return jsonify({ "msg": "Contraseña incorrecta" }), 401

    return jsonify({ "msg": "Inicio de sesión exitoso", "user": user.serialize() }), 200



@api.route('/private', methods=['GET'])
def private():
    return jsonify({
        "msg": "Contenido privado",
        "data": "Solo usuarios autenticados pueden ver esto"
    }), 200