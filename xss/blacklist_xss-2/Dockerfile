# Use an official Python runtime as a parent image
FROM python:3.8

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Define environment variable
ENV CTF_FLAG='BLACKLIST_CTF{CTF_Flag_12345}'

# Make port 8001 available to the world outside this container
EXPOSE 8001

# Run app.py when the container launches
ENTRYPOINT ["flask", "run", "--host=0.0.0.0", "--port=8001", "--no-debugger", "--no-reload"]