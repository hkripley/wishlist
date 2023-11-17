import React, {Component} from "react";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        };

    }

    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1) 
    }

    render() {
      const data = this.props.data;  
      let content;
      if (this.state.hovered) {
        let fields = [];
        for (const [key, value] of Object.entries(data.properties)) {
            fields.push(
            <p className='card-field'>
                <b>{this.capitalize(key)}: </b> {value}
            </p>);
        }
        content = (
            <a className='card-link' href={data.url} target="_blank" rel="noopener noreferrer">
            <div className='card-content'>
                {fields}
            </div>
            </a>
        );
      } else {
        content = (
            <div className='content' style={{ 
                backgroundImage: `url(${require(`../img/items/${data.img}`)})`,
                height: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}/>
        );
      }

      return (
        <div className='crd'
            onMouseOver={() => this.setState({hovered: true})}
            onMouseLeave={() => this.setState({hovered: false})}
        >
            <div className='card-header'>{data.name}</div>
            {content}
        </div>
      );
    }
}