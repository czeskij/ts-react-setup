import { FunctionComponent } from 'react';
import React from 'react';

export const App: FunctionComponent = (): JSX.Element => {
    const [text, setText] = React.useState<string>("");

    React.useEffect(() => {
        setText('Up and running!');
    }, []);

    return <div>{text}</div>;
}