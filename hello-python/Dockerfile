FROM python:latest

WORKDIR /app
COPY app/* /app/
RUN python3 -m pip --no-cache-dir install -r requirements.txt

EXPOSE 5000
CMD ["python3", "/app/main.py"]
