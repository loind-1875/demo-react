import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super()
    }

    handleDelete (user) {
        if(window.confirm('Are you sure')) {
            this.props.deleteUser(user);
        }
    }

    render() {
        return (
            <div className="col-md-6 body-info pt-4">
                <h5>List</h5>
                <table className="table table-striped table-bordered table-hover mt-2">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users?.length > 0 ? (
                                this.props.users.map((user) => {
                                    const {name, email, id} = user;
                                    return (
                                        <tr
                                            key={id}
                                        >
                                            <td>{name}</td>
                                            <td className="hover">
                                                <span>{email}</span>
                                                <div className="button-action">
                                                    <button
                                                        type="reset"
                                                        className="btn btn-sm btn-success mr-2"
                                                        onClick={(e) => {this.props.getUserEdit(user)}}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        type="reset"
                                                        className="btn btn-sm btn-danger"
                                                        onClick={(e) => this.handleDelete(user)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan="2">No data</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;