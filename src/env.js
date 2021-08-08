const env = 'development'

const EMAIL = 'contact@mySite.com'
const MAIN_TITLE = 'My Website Title'

let API, PUBLIC
if (env == 'production') {
	// this is the IP or URL of the website
	API = 'https://www.mywebsite.com/api'
	PUBLIC = 'https://www.mywebsite.com'
} else {
	API = 'http://localhost:8080/api'
	PUBLIC = 'http://localhost:8080'
}

export { EMAIL, MAIN_TITLE, API, PUBLIC }
