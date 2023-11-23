from flask import Flask, render_template, request, make_response, escape, Markup
import os

app = Flask(__name__)

FLAG = os.environ.get('CTF_FLAG')

def filter_query(query):
    # 필터링 없이 그대로 반환
    return escape(query)

@app.route("/", methods=["GET"])
def index():
    # 플래그 값은 쿠키에 저장하지 않고 직접 템플릿에 전달
    return render_template("index.html", flag=FLAG)

@app.route("/set_cookie")
def set_cookie():
    response = make_response(render_template("index.html", flag=FLAG))
    response.set_cookie("ctf_cookie", FLAG)
    return response

@app.route("/execute_query", methods=["GET"])
def execute_query():
    # POST 요청에서 입력값 받기
    query = request.args.get("query", "")
   
    forbidden_strings = ["iframe", "src", "script", "on", "window", "href", "javascript"]
    for forbidden_str in forbidden_strings:
        query = query.replace(forbidden_str, "")
    # 필터링 없이 쿼리를 템플릿에 전달하고 safe 필터를 사용하여 이스케이프 피하기
    return render_template("index.html", flag=FLAG, query=Markup(query))

if __name__ == "__main__":
    app.run(debug=True, port=8001)


