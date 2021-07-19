import React, {useState} from 'react';
import Assistant from './assistant/Preferences';
import Programs from './programs/Programs';
import Home from './Home';
import Results from './assistant/Results';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import SingleProgram from './programs/SingleProgram';

/* DATA MODELS */
class Program {
    constructor(index, keywords, name, faculty, shortDescription, longDescription, imageLink) {
        this.index = index;
        this.keywords = keywords
        this.name = name;
        this.faculty = faculty;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.imageLink = imageLink;
    }
}


class App extends React.Component {

    /* program1 = new Program("0", 
    {en: ["arts", "sciences"], fr: ["arts", "sciences"]},
    {en: "African Studies Option", fr: "Option en études africaines"}, 
    {en: "Faculty of Arts", fr: "Faculté des Arts"}, 
    {en: "You will gain skills to critically address the stereotypical depictions of Africa to better capture its diversity", 
    fr: " Les étudiants développeront leur esprit critique notamment face aux stéréotypes dont le continent fait l’objet pour mieux en saisir toute la diversité"}, 
    {en: "The 12-course-unit cross-disciplinary option in African Studies proposes to increase your knowledge on the main societal, cultural and demographic issues at stake on the African continent (Maghreb and sub-Saharan). The option is structured around 3 compulsory courses in sociology and anthropology and 1 optional course taken within a choice of courses in other social sciences disciplines. In particular, you will gain skills to critically address the stereotypical depictions of Africa to better capture its diversity, richness and huge socio-cultural, economic and political role it is already playing in the contemporary globalized world and will continue to play in the next decades.", 
    fr: "L’option de 12 crédits en Études africaines permet aux étudiants d’acquérir des connaissances générales sur les grands enjeux sociétaux, culturels et démographiques auxquels fait face le continent (Maghreb et sub-saharien). Cette option se décline en 3 cours obligatoires en sociologie et anthropologie et 1 cours optionnel au choix dans d’autres disciplines des sciences sociales. Les étudiants développeront leur esprit critique notamment face aux stéréotypes dont le continent fait l’objet pour mieux en saisir toute la diversité, la richesse et l’immense poids socio-culturel, économique et politique qu’il pèse déjà et pèsera dans les prochaines décennies dans l’ordre mondial."}, 
    0); */
    program1 = new Program("0", ["arts", "sciences"],"African Studies Option", "Faculty of Arts", 
    "You will gain skills to critically address the stereotypical depictions of Africa to better capture its diversity.", 
    "The 12-course-unit cross-disciplinary option in African Studies proposes to increase your knowledge on the main societal, cultural and demographic issues at stake on the African continent (Maghreb and sub-Saharan). The option is structured around 3 compulsory courses in sociology and anthropology and 1 optional course taken within a choice of courses in other social sciences disciplines. In particular, you will gain skills to critically address the stereotypical depictions of Africa to better capture its diversity, richness and huge socio-cultural, economic and political role it is already playing in the contemporary globalized world and will continue to play in the next decades.", 0);
    program2 = new Program("1", ["sciences"],"BASc in Computer Engineering", "Faculty of Engineering", 
    "Building on a solid foundation of traditional engineering skills, this program covers many different aspects of computer software and hardware design", 
    "Building on a solid foundation of traditional engineering skills, this program covers many different aspects of computer software and hardware design, and allows for more specialized studies in microprocessor-based systems, computer architecture, programming concepts, real-time operating systems, software engineering and robotics. This program provides multiple paths to a variety of careers.", 1);
    program3 = new Program("2", ["sciences"],"Honours BSc in Biochemistry", "Faculty of Sciences", 
    "Biochemistry is the chemistry of life. It provides the foundation for understanding all biological processes as well as the molecular basis and treatment of human disease.", 
    "The biochemistry bachelor's provides you with the education you need to play a leading role in new and exciting areas of medical research. You will be exposed to cutting-edge research and knowledge. Our program prepares you for graduate studies and for an academic or research career in the medical sciences. What's more, biochemistry provides an excellent foundation for further studies in medicine and other areas of health care. ", 2);
    program4 = new Program("3", ["arts"],"B.A. spécialisé en lettres françaises", "Faculty of Arts", 
    "Using a number of critical and theoretical approaches, you will expand your understanding of cultural diversity, sharpen your critical thinking skills and enrich your oral and written expression. ", 
    "Specialized courses give you the tools to improve your syntax, enrich your vocabulary and polish your style. Other courses give you theoretical knowledge as well as practical experience with writing tools and writing and publishing methods used in many work settings, including educational institutions, businesses, the public service, public relations agencies and the media. As sought after as it is rare, a mastery of French is a real asset when looking for a job. ", 3);
    program5 = new Program("4", ["sciences"],"BASc in Software Engineering", "Faculty of Engineering", 
    "Software engineering is a CO-OP only program that emphasizes innovation and teamwork to develop practical, solution-driven thinking", 
    "Software engineering is a CO-OP only program that emphasizes innovation and teamwork to develop practical, solution-driven thinking. During their fourth-year project, students in this program can form teams and leverage their work experience to create real applications; some students even start their own companies. They learn how to apply engineering principles—including rapid prototyping, requirements analysis, system modelling, design, implementation, testing and project management—to develop software", 4);
    program6 = new Program("5", ["arts"],"Bachelor of Arts in Interdisciplinary Studies", "Faculty of Arts", 
    "Are you curious by nature and interested in studying many subjects at the same time?", 
    "The BA in Interdisciplinary Studies program is meant for you. It is flexible and provide you not only with a solid general education in a setting known for its vibrancy, but also with the opportunity to take a range of courses in Arts-specific fields (fine arts, humanities, languages and literatures) or even in other faculties. You can also do a minor – but it is not compulsory – in a specific subject, like foreign languages, art history, music, theatre, communication, history, geography, religious studies, linguistics, etc.", 5);

    programsArr = [this.program1, this.program2, this.program3, this.program4, this.program5, this.program6];
    constructor() {
        super();
        this.state = {lang: "en", programsArr: this.programsArr};
    }

    handleLanguageChange(newLang) {
        this.setState({lang: newLang});
    }

    render() {
        return (
            <Router>
                <div className="header">
                </div>
                <div className="navigation-bar">
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand>
                                <Link to="/">uoGuide</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link>
                                    <Link to="/assistant">Assistant</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/programs">Programs</Link>
                                </Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#" onClick={() => this.handleLanguageChange("en")}>English</Nav.Link>
                                <Nav.Link eventKey={2} href="#" onClick={() => this.handleLanguageChange("fr")}>Français</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home lang={this.state.lang}/>
                        </Route>
                        <Route path="/assistant">
                            <Assistant lang={this.state.lang}/>
                        </Route>
                        <Route path="/programs">
                            <Programs lang={this.state.lang} programs={this.state.programsArr}/>
                        </Route>
                        <Route path="/program/:programId">
                            <SingleProgram lang={this.state.lang} programs={this.state.programsArr}/>
                        </Route>
                        <Route path="/results/:preference">
                            <Results lang={this.state.lang} programs={this.state.programsArr}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;