import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import e from 'cors';


class  Products extends React.Component{
	constructor(propos){
        super(propos);
        this.state = {

			
            price:"",
            data:[]
            
			
            
		}
	}
 componentDidMount(){
		const user = {
			
			 sku:this.sku,

			 
			  }
			  const config = {
			headers: {
			'Content-Type': 'application/json',
			'Authorization':'Bearer fwa2dq5vl6l6cp1cqc6j8ogkvrd2coad'
			},
			}
		axios.get(`http://projetmagento.com/rest/all/V1/products/${this.props.id}`,config,user)
		.then(response => { 
			console.log(response.data)

			
			this.setState({
				data:response.data
			})
		})
		.catch(error => {
			console.log(error.response)
		});
		
		
		}

		

        render(){
		return ( 
            <div>
							
			{ (this.state.data )? this.state.data.map((el, index) => 
			
			<ul >
			
				 <li>{el.name}</li>
				
				
			
			</ul>
			 ):<em></em>}							
			 
			 
			 
	
</div>
								 
							 
							 
					
				
							

							 

                        
				
		)}}


export default Products;