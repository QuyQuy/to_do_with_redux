import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllItems } from '../actions'


class List extends Component {
    componentDidMount() {
        this.props.getAllItems()
    }

    renderList() {
        const {todos} = this.props;
        if(!todos) {
            return <h1 className='center'> Loading...</h1>
        }

        if (!todos.length) {
            return <h5> No to do items</h5>;
        }
        const listElements = todos.map(item => {
            return <li className='collection-item' key={item._id}>{item.title}</li>
        });
        return (
            <ul>

            </ul>
        )

        return (
                <div>
                    <div className='center'>
                        <h1>to Do List</h1>
                        <h5 className="grey-text">Now with Redux!</h5>
                    </div>
                    {this.renderList()}
                </div>
            );
        }
    }

function mapStateToProps(state) {
    return {
        todos: state.list.all
    }
}

export default connect(mapStateToProps, {
    getAllItems: getAllItems
})(List);