import React, { Component } from 'react'

export default class Cart extends Component {
    
    render() {
        const {cartItem,deleteItem} = this.props;
        return (
            <div>

                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{ maxWidth: '800px', width: '800px' }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Your Cart</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                        <th>Id</th>
                                        <th>Img</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                        
                                        </tr>
                                       
                                    </thead>
                                    <tbody>
                                    {cartItem.map((item)=>{
                                                return  <tr key={item.id}>
                                           
                                                <td>{item.id}</td>
                                                <td><img src={item.image} width={50} alt="..." /></td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <button className='btn btn-primary'>-</button>
                                                    {item.quantity}
                                                    <button className='btn btn-primary'>+</button>
    
                                                </td>
                                                <td>{item.price * item.quantity}</td>
                                                <td>
                                                <button  className='btn  btn-danger' onClick={()=>{
                                                    deleteItem(item.id);    
     
                                                }}>
                                                    <i className='fa fa-trash'></i>
                                                </button>
                                                </td>
    
    
                                            </tr>
                                            })}
                                       
                                    </tbody>

                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
