import { h, Component } from 'preact';

import './MainPage.less';

export interface MainPageProps {
    label: string;
}

class MainPage extends Component<MainPageProps> {
    render() {
        return (
            <div class='MainPage'>
                <span class='MainPage__label'>{this.props.label}</span>
            </div>
        );
    }
}

export default MainPage;
