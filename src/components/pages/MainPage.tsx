import { h, Component } from 'preact';
import { useState } from 'preact/hooks';

import './MainPage.less';

export interface MainPageProps {
    label: string;
}

const names = ['Viktor', 'Dmytro'];

function TestHookUseState() {
    const [ name, setName ] = useState(names[0]);
    const handleToggleName = () => setName(name === names[0] ? names[1] : names[0]);

    return (
        <div class='TestHook'>
            <span>TestHook: useState</span>
            <span>{`Name: ${name}`}</span>
            <button onClick={handleToggleName}>Toggle name</button>
        </div>
    );
}

class MainPage extends Component<MainPageProps> {
    render() {
        return (
            <div class='MainPage'>
                <span class='MainPage__label'>{this.props.label}</span>
                <TestHookUseState />
            </div>
        );
    }
}

export default MainPage;
