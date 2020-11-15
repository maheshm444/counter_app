import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        tags: []
    }
    render() {
        return (
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement } className="btn btn-secondary btn-sm">Increment</button>
                {/* {this.renderTags()}
                {this.state.tags.length === 0 && <p>Please create new tags</p>} */}
        </React.Fragment>);
    }
    /* Bind this to the event handlers
     constructor() {
         super();
         this.handleIncrement = this.handleIncrement.bind(this);
     }
     Bind this to the event handlers */
    handleIncrement = ()=> {
        this.setState({ count: this.state.count + 1 });
    }
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags to display</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;