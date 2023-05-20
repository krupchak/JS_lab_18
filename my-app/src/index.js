import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Task1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Іван',
            age: 25
        }
    }

    render() {
        let info = (<h1>1</h1>);
        return (
            <div>
                { info }
                Ім'я: {this.state.name} , вік: {this.state.age}
            </div>
        );
    }
}

class Task2 extends React.Component {
    showMessage() {
        alert("Hello");
    }

    render() {
        let info = (<h1>2</h1>);
        return (
            <div>
                { info }
            <button onClick={this.showMessage}>
                Натисни на мене
            </button>
            </div>
        );
    }
}

class Task3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Іван',
            age: 25
        }

        this.showName = this.showName.bind(this);
    }

    showName() {
        alert("Ім'я: " + this.state.name);
    }

    render() {
        let info = (<h1>3</h1>);
        return (
            <div>
                { info }
            <button onClick={this.showName}>
                Натисни на мене
            </button>
            </div>
        );
    }
}

class Task4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Іван',
            age: 25
        }

        this.changeObj = this.changeObj.bind(this);
    }

    changeObj() {
        this.setState({
            name: "Коля",
            age: 30
        });
    }

    render() {
        let info = (<h1>4</h1>);
        return (
            <div>
                { info }
                <p>
                    Ім'я: {this.state.name} , вік: {this.state.age}
                </p>
                <button onClick={this.changeObj}>
                    Натисни на мене
                </button>
            </div>
        );
    }
}

class Task5 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
            name: "Іван",
            text: "Привіт"
        };

        this.message = this.message.bind(this);
    }

    message() {
        if (this.state.show)
            this.setState({text: "Пока"});
        else
            this.setState({text: "Привіт"});

        this.setState({show: !this.state.show});
    }

    render() {
        let info = (<h1>5</h1>);
        return (
            <div>
                { info }
                <p>{this.state.text}, {this.state.name}</p>
                <button onClick={this.message}>
                   Натисни на мене
                </button>
            </div>
        );
    }
}

class Task6 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Іван',
            age: 25
        }

        this.showNameAge = this.showNameAge.bind(this); 
    }

    showNameAge() {
        ReactDOM
            .createRoot(document.getElementById("root"))
            .render(
                <div>
                    <p>Ім'я: {this.state.name} , вік: {this.state.age}</p>
                    <button onClick={this.showNameAge}>Натисни на мене</button>
                </div>
            );
    }

    render() {
        let info = (<h1>6</h1>);
        return (
            <div>
                { info }
                <button onClick={this.showNameAge}>Натисни на мене</button>
            </div>
        );
    }
}

class Task7 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Іван',
            age: 25,
            isShow: true,
        }

        this.showNameAge = this.showNameAge.bind(this);
    }

    showNameAge() {
        ReactDOM
            .createRoot(document.getElementById("root"))
            .render(
                <div>
                    {
                        this.state.isShow && 
                        <p>Ім'я: {this.state.name} , вік: {this.state.age}</p>
                    }
                    <button onClick={this.showNameAge}>Натисни на мене</button>
                </div>
            );
            
        this.setState({isShow: !this.state.isShow});
    }

    render() {
        let info = (<h1>7</h1>);
        return (
            <div>
                { info }
                <button onClick={this.showNameAge}>Натисни на мене</button>
            </div>
        );
    }
}

class Task8 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Іван',
            age: 25,
            isShow: true,
            btnText: "Показати"
        }

        this.showNameAge = this.showNameAge.bind(this);
    }

    showNameAge() {
        ReactDOM
            .createRoot(document.getElementById("root"))
            .render(
                <div>
                    {
                        this.state.isShow && 
                        <p>Ім'я: {this.state.name} , вік: {this.state.age}</p>
                    }
                    <button onClick={this.showNameAge}>
                        {this.state.btnText}
                    </button>
                </div>
            );
            
        this.setState({
            isShow: !this.state.isShow,
            btnText: this.state.isShow ? "Показати" : "Приховати"
        });
    }

    render() {
        let info = (<h1>8</h1>);
        return (
            <div>
                { info }
                <button onClick={this.showNameAge}>Показати</button>
            </div>
        );
    }
}

class Task9 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: [
                "Коля",
                "Вася",
                "Петро",
            ]
        }
    }

    render() {
        let info = (<h1>9</h1>);
        let list = '';

        list = this.state.name.map((item, index) => {
            return (<li>{ item }</li>)
        });

        return (
            <div>
                { info }
                <ul>
                    { list }
                </ul>
            </div>
        );
    }
}

class Task10 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: [
                "Коля",
                "Вася",
                "Петро",
            ]
        }
    }

    render() {
        let info = (<h1>10</h1>);
        let list = '';

        list = this.state.name.map((item, index) => {
            return (<li>{ item } - {index + 1}</li>)
        });

        return (
            <div>
                { info }
                <ul>
                    { list }
                </ul>
            </div>
        );
    }
}

class Task11 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hrefs: [
                {href: '1.html', text: 'посилання 1'},
                {href: '2.html', text: 'посилання 2'},
                {href: '3.html', text: 'посилання 3'},
            ]
        }
    }

    render() {
        let info = (<h1>11</h1>);
        let list = '';

        list = this.state.hrefs.map((item, index) => {
            return (<li><a href={item.href}>
                {item.text}
            </a></li>)
        });

        return (
            <div>
                { info }
                <ul>
                    { list }
                </ul>
            </div>
        );
    }
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <div>
            <Task1 />
            <Task2 />
            <Task3 />
            <Task4 />
            <Task5 />
            <Task6 />
            <Task7 />
            <Task8 />
            <Task9 />
            <Task10 />
            <Task11 />
        </div>
    );