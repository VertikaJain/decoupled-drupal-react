# Progressively Decoupled Drupal

## Technology Stack
1. Drupal - Backend
2. ReactJS - Frontend
3. MAMP tool - server setup

## Progressive Decoupled Drupal Project Diagram
![Progressive Decoupled Drupal Project Diagram](/public/images/progressively_decoupled_drupal.jpg)

## Drupal Setup
1. Downloaded and install **drupal 9** and **MAMP**
2. copy drupal files to Applications->MAMP->htdocs
3. change file name in drupal->sites->default->default.services.yml to services.yml
4. enable cors.config by setting it to true and ensure these values- 
    ```
    cors.config:
    enabled: true
    # Specify allowed headers, like 'x-allowed-header'.
    allowedHeaders: []
    # Specify allowed request methods, specify ['*'] to allow all possible ones.
    allowedMethods: ['*']
    # Configure requests allowed from specific origins.
    allowedOrigins: ['*']
    # Sets the Access-Control-Expose-Headers header.
    exposedHeaders: false
    # Sets the Access-Control-Max-Age header.
    maxAge: false
    # Sets the Access-Control-Allow-Credentials header.
    supportsCredentials: false
    ```
5. in case of permission issue, use command `sudo chmod 777 default` to enable it
6. open MAMP server and select web server as APACHE and put Name as `localhost`
7. start MAMP server and open url - http://localhost:8888/ to check if the server is up and running

## Drupal login/site settings
1. login as required username (usually admin)
2. go to configuration->basic site settings and create/edit your site details there

## Drupal Extension settings
1. go to extend and enable extensions - **Serialization**, **RESTful Web Services**, **JSON:API** 
2. also add CORS UI extension by downloading it from https://www.drupal.org/project/cors_ui 
3. In extensions section click on Install new module and enter the url https://ftp.drupal.org/files/projects/cors_ui-8.x-1.0.tar.gz and click Install
4. go to configuration -> **CORS Configuration** in Web services section and Select box **Enable CORS** and save settings

## Drupal Content settings
1. go to structure->content type->click on **Add Content Type** then create Products content type
2. click on **Save and Manage fields**, then create the required fields and save them
3. go back to home page and click on **Add Content** for adding data to the fields specified in the previous step

## Drupal View settings
1. go to structure->Views-> click on **Add View** 
2. Provide a View name as required and check on **Provide a REST Export**
3. After saving, go to the View that you created just now and **Add fields** to display in the JSON output
4. you can alter the JSON output by using the **Rewrite Results** options for each field
5. Click on **Apply** and later **Save** the changes to preview the JSON output
6. You need to provide a path (url of your choice) in **Path settings** 
7. then change Access restrictions to **Unrestricted** and Save it
8. Lastly, you can go to the URL path that you specified and view your data in JSON format that you added in Content settings

## React setup
1. in a separate folder create a new react application using command `npx create-react-app react-ecommerce`
2. create a component `Products` in src folder
3. use the URL created in drupal to display the data on frontend using **fetch()** and **json()**
4. create another component `Product` to display each product by passing it as props in a loop
