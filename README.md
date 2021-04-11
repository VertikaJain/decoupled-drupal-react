# Progressively Decoupled Drupal

## Technology Stack
1. Drupal - Backend
2. ReactJS - Frontend
3. MAMP tool - server setup

## Progressive Decoupled Drupal Project Diagram
![Progressive Decoupled Drupal Project Diagram](/public/images/progressively_decoupled_drupal.jpg)

## Drupal Setup
- Downloaded and install **drupal 9** and **MAMP**
- copy drupal files to Applications->MAMP->htdocs
- change file name in drupal->sites->default->default.services.yml to services.yml
- enable cors.config by setting it to true and ensure these values- `allowedMethods: ['*'] and allowedOrigins: ['*']`
- in case of permission issue, use command `sudo chmod 777 default` to enable it
- open MAMP server and select web server as APACHE and put Name as `localhost`
- start MAMP server and open url - http://localhost:8888/ to check if the server is up and running

## Drupal login/site settings
- login as required username (usually admin)
- go to configuration->basic site settings and create/edit your site details there

## Drupal Extension settings
- go to extend and enable extensions - **Serialization**, **RESTful Web Services**, **JSON:API** 
- also add CORS UI extension by downloading it from https://www.drupal.org/project/cors_ui 
- In extensions section click on Install new module and enter the url https://ftp.drupal.org/files/projects/cors_ui-8.x-1.0.tar.gz and click Install
- go to configuration -> **CORS Configuration** in Web services section and Select box **Enable CORS** and save settings

## Drupal Content settings
- go to structure->content type->click on **Add Content Type** then create Products content type
- click on **Save and Manage fields**, then create the required fields and save them
- go back to home page and click on **Add Content** for adding data to the fields specified in the previous step

## Drupal View settings
- go to structure->Views-> click on **Add View** 
- Provide a View name as required and check on **Provide a REST Export**
- After saving, go to the View that you created just now and **Add fields** to display in the JSON output
- you can alter the JSON output by using the **Rewrite Results** options for each field
- Click on **Apply** and later **Save** the changes to preview the JSON output
- You need to provide a path (url of your choice) in **Path settings** 
- then change Access restrictions to **Unrestricted** and Save it
- Lastly, you can go to the URL path that you specified and view your data in JSON format that you added in Content settings

## React setup
- in a separate folder create a new react application using command `npx create-react-app react-ecommerce`
- create a component `Products` in src folder
- use the URL created in drupal to display the data on frontend using **fetch()** and **json()**
- create another component `Product` to display each product by passing it as props in a loop
