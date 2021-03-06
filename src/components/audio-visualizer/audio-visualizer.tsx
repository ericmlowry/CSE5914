import React, { Component } from 'react';

interface Props {
    audioData: any
}

export default class AudioVisualiser extends Component<Props,any> {

    private canvas = React.createRef<HTMLCanvasElement>()

    constructor(props: any) {
        super(props);
    }

    componentDidUpdate() {
    this.draw();
    }

    draw() {
    const { audioData } = this.props;
    const canvas = this.canvas.current;
    const height = canvas!.height;
    const width = canvas!.width;
    const context = canvas!.getContext('2d');
    let x = 0;
    const sliceWidth = (width * 1.0) / audioData.length;

    context!.lineWidth = 2;
    context!.strokeStyle = '#FFF';
    context!.clearRect(0, 0, width, height);

    context!.beginPath();
    context!.moveTo(0, height / 2);
    for (const item of audioData) {
        const y = (item / 255.0) * height;
        context!.lineTo(x, y);
        x += sliceWidth;
    }
    context!.lineTo(x, height / 2);
    context!.stroke();
    }

    render() {
        return <canvas width="352" height="27" ref={this.canvas}/>;
    }
}