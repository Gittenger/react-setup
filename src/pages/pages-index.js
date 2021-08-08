import HomePageContent from './HomePageContent/HomePageContent.component.jsx'
import PortfolioPageContent from './PortfolioPageContent/PortfolioPageContent.component.jsx'
import LoginPageContent from './LoginPageContent/LoginPageContent.component.jsx'
import ContactPageContent from './ContactPageContent/ContactPageContent.component.jsx'

import getPage from './PageComponent.jsx'

const pages = {
  HomePage: getPage('Home', HomePageContent),
  PortfolioPage: getPage('Portfolio', PortfolioPageContent),
  LoginPage: getPage('Login', LoginPageContent),
  ContactPage: getPage('Contact', ContactPageContent),
}

export const { HomePage, PortfolioPage, LoginPage, ContactPage } = pages
