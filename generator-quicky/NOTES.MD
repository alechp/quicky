#Notes
Structured notes to guide development

##Prompts
* Name
* Description
* Eslint enabled?(Y/n) 
* Testing with jest & enzyme?(Y/n)
* Routing with react-router?(Y/n)
* Redux, relay, or other? (redux/relay/other)

##Command Causality
* Yo quicky = App > “./app, ./app/configs + /constants.js, ./app/components, ./app/containers, ./app/images, ./app/reducers, ./app/styles”
* Yo quicky:testing = Testing > “./test”
* Yo quick:linting = Linting > “./.eslintrc”
* Yo quicky:router = Router > “./configs/routes.js”
* Yo quicky:redux = Redux > “./app/configs/actions.js, ./app/configs/store.js”	
	
##Generator Breakdown

###App
* index.html
* index.js
* /images
* webpack.config.babel.js
* README.MD

###Testing
* 

###Linting
* 

###Router
* 

###Redux
* 