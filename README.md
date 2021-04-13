# `Deploy web-app` on GCP using GitHub Action

1. Create a docker image of your spring boot based backend and react based front end and store it in Google Container Registry
2. Deploy your, above created, docker images on Cloud Run in GCP

## Table of Contents

* [Setting up a GCP Project](#Setting-up-a-GCP-Project)
* [Creating a Service Account in GCP Project](#Create-Service-Account)
* [Creating Github Secrets](#Creating-github-secrets)
* [Deploying the web-app](#Deploying-the-web-app)


## Setting up a GCP Project

###You can skip this step if you already have a GCP Project

*  Go to [Google Cloud](https://cloud.google.com/) and click on **Get Started for FREE**.
*  Login using your gmail account, choose your country, accept terms and conditions and click **Continue**.
*  In the next step, fill your details, like account type, Name, Address, credit card details, tax information, etc. If you have old Gmail account and all the information is already there it would take it and you might not have to fill all the details.
*  After filling all the details click on **Start my free trial**.
*  Google will setup your cloud account and in few seconds your Google Cloud Platform account will be ready to start deploying applications on it. It will look like below:
![Project Setup](/assets/gcp-project-setup-modified.jpg)

## Creating a Service Account in GCP Project

* Go to **Navigation Menu(Top left Corner) > IAM & Admin > Service Accounts**
*  - Click on **Create Service Account**
*  - Under **Service Account Details** provide service account **name** and **description** of your choice and click on **Create**
  ![Service Account Details](/assets/service-account-details-modified.jpg)
*  - Under **Service Account Permissions** , add following roles one by one and click on **Continue**:
	* Cloud Run Admin
	* Cloud SQL Admin
	* Container Registry Service Agent
  ![Service Account Permissions](/assets/service-account-permissions-modified.jpg)
*  - Keep **User Access Section** unchanged and click on **Done**
*  - On Service Account Page click on Actions hamburger menu of Service Account you just created and Click on Create Key
  ![Service Account Create Key](/assets/service-account-create-key-modified.jpg)
*  - Select **JSON** option and Click on **Create**. A JSON file will get downloaded on your local system, save it we will need it later*
  ![Service Account JSON](/assets/service-account-json-modified.jpg)

## Creating Github Secrets
* Fork this repository
* Go to **Settings > Secrets** in your forked repository.
* Click on **New Secret** and add Name as **GCP_PROJECT_ID** and value as Project ID of your GCP Project and click on Add Secret
  ![New Secret](/assets/secret-project.JPG)

* Again click on New Secret and add Name as **SA_KEY** and value as contents of json file that you downloaded and click on Add Secret
* Similarly add following secrets with name and value as below:

| Name          | Value        | 
| ------------- | -----------  |
| SA_NAME       | Name of service account that you created in second step. |
| CONNECTION    | Any connection name that you like for your SQL instance. |
| DATABASE_NAME | The name of database that you like to use. | 
| DB_USER       | The user name that you like to create to access your database |
| DB_PASSWORD   | Password you like to set for your user | 
  
* KEEP IN MIND, not to change Secret Names otherwise you will need to alter .github/workflows/cloud.yaml file

## Deploying the web app
* The workflow to deploy the application is already set in .github/workflows/cloud.yaml file in your forked repo. The workflow can be triggered manually by visiting actions tab in your forked github repo or automatically whenever some code is pushed.
* Firstly, Visit the Actions tab in your forked repo and Click **I understand my workflows, go ahead & enable them**
   ![Enable-workflows](/assets/understand-workflows.JPG)

* Open the workflow by clickng on workflow name - **Build and Deploy to Google Cloud Run** in this case
   ![Open-workflow](/assets/open-workflow.JPG)
   
* Trigger the workflow manually by visiting actions tab in your github repo and let Github Actions do the magic.
  ![Run-Workflow](/assets/run-workflow.JPG)
  
* In the Actions tab in your forked repo and open the latest the workflow run and see the progress. You will see something like this when pipeline completes.
  ![Pipeline-Run](/assets/pipeline-run.JPG)
  
* Once workflow is successful, head towards google cloud console and search cloud run on search bar, you can see the front end and back end services deployed there.
 ![Cloud Run Services](/assets/cloud-run-services.JPG)
 
* Click on react-app service and you will find the URL of deployed app. Click on URL to see the application. 
 ![React-App-Console](/assets/react-app-console.JPG)
 
* You will see a front-end like this. Reload to see the counter of visitor changing. 
   ** Initial Request can take some time due to initialization
   ![Front-end](/assets/front-end.JPG)
