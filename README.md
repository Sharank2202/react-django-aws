# My Project

## Overview
This project is a full-stack application with a React frontend and a Django backend. The frontend is hosted on AWS S3, and the backend is hosted on an AWS EC2 instance.


## Setup Instructions

### Prerequisites
- Node.js and npm installed for the frontend
- Python and pip installed for the backend
- AWS account for deployment

### Frontend
1. Navigate to the frontend directory:
   cd frontend
2. Install the dependencies:
   npm install
3. Build the project:
   npm run build
4. Deploy the build files to AWS S3.

### Backend
1. Navigate to the backend directory:
  cd backend
2. Create and activate a virtual environment:
  python3 -m venv venv
  source venv/bin/activate
3. Install the dependencies:
  pip install Django
  pip install djangorestframework
  pip install django-cors-headers
4. Run the development server:
  python manage.py runserver
5. Deploy the application to an AWS EC2 instance.

Deployment Instructions
  Frontend Deployment on AWS S3
  Create an S3 bucket.
  Enable static website hosting and configure the bucket policy for public access.
  Upload the contents of the build directory to the S3 bucket.
Backend Deployment on AWS EC2
  Launch an EC2 instance with an Ubuntu AMI.
  Connect to the instance using EC2 Instance Connect.
  Install necessary packages and set up the environment.
  Transfer your Django project files using WinSCP.
  Run your Django application on the EC2 instance.

Note - Update the API endpoint URLs in the React app to point to the EC2 instance. Configure CORS in Django to allow requests from the S3 domain.
