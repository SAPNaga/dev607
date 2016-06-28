# dev607
SAP TechEd 2016: Mini CodeJam; Get a First Look at SAP Web IDE for SAP HANA
In this session you will receive your first hands-on experience with the new SAP Web IDE for SAP HANA, for native SAP HANA development. Using SAP Web IDE for SAP HANA, you will build database development artifacts, Node.js-based services, and SAP Fiori and SAPUI5 user interfaces based upon SAP HANA extended application services, advanced model, and the deployment infrastructure for SAP HANA (aka HDI).

EXERCISE 1 – HELLO WORLD
Objective
In this first exercise, we will connect to the remote system, run the new project wizard, and then create an HTML5 module to serve as the application endpoint and proxy all of our services and client-side content. At the end of this exercise you will be able to connect to your server via web browser and see a Hello World message.

EXERCISE 2 – CLONE/IMPORT EXISTING PROJECT
Objective
With XSA/HDI based development we no longer use the HANA database as the design time repository.  We use a central Git to store all design time artifacts. Therefore when you launch the Web IDE for SAP HANA, you only see the projects which have been pulled from Git or which you have created locally in your workspace. There is no repository browser. In this exercise we will see how we can clone a project from Git to bring it into our local SAP Web IDE for SAP HANA workspace. If you do not have a github.com account or don’t wish to create one, you can alternatively import the project from the file system. 

EXERCISE 3 –DATABASE ARTIFACTS
Objective
In this exercise, we will continue to explore our overall application. Applications in the HANA/XS Advanced world, are often made up of multiple modules at design time which deploy to separate micro-services or database container content. We created client side UI application content in the first exercise using the HTML5 module. In this exercise we will create database artifacts, such as database table, stored procedures and user defined functions, using the HDB (HANA Database) module. We will then see how we build these database artifacts using the new container-based, schema-less HDI (HANA Deployment Infrastructure) concepts. 

Exercise Description 
•	Database Tables via HDBCDS
•	Stored Procedures via HDBPROCEDURE
•	User Defined Functions via HDBFUNCTION
•	Initial table data load via CSV
•	Calculation Views
•	Deploy to HANA via HDI
•	View runtime objects 

EXERCISE 4 – REST SERVICES: XSJS AND NODE.JS
Objective
For this exercise we will now build the XSJS and XSODATA services used to expose our data model to the user interface. Although XS Advanced runs on node.js, SAP has added modules to node.js to provide XSJS and XSODATA backward compatibility. Therefore you can use the same programming model and much of the same APIs from XS, classic even within this new environment. .

Exercise Description 
•	Node.js XSJS Bootstap
•	XSJS Services
•	XSODATA Services

EXERCISE 5 – NODE.JS 
Objective
In exercise 4 we created a Node.js module, but didn’t really do much Node.js specific programming.  We only were using Node.js to run XSJS and XSODATA services. The support for XSJS and XSODATA is an important feature for XS Advanced. It not only allows backward compatible support for much of your existing development; but it provides a simplified programming model as an alternative to the non-block I/O event driven programming model normally used by Node.js. 

But we certainly aren’t limited to only the functionality provided by XSJS and XSODATA.  We have access to the full programming model of Node.js as well. In this exercise we will learn how to extend our existing Node.js module in the SAP Web IDE for SAP HANA. 

You will learn about how to create and use reusable code in the form of node.js modules. You will use packages.json to define dependencies to these modules which make the installation of them quite easy. You will use one of the most popular modules – express; which helps with the setup the handling of the request and response object. You will use express to handle multiple HTTP handlers in the same service by using routes. 

Our final part of this exercise will demonstrate the ease at which you can tap into the powerful web sockets capabilities of Node.js. We will use web sockets to build a simple chat application. Any message sent from the SAPUI5 client side application will be propagated by the server to all listening clients. 

Exercise Description 
•	Modules
•	Express Module and package.json
•	Web Sockets chat application

EXERCISE 6 – PACKAGING FOR TRANSPORT 
Objective
Now that we have a completed application we can package it for transport

Exercise Description 
•	Build project to create MTAR
•	Download MTAR

