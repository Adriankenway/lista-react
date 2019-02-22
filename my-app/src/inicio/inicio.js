import React,{Component} from 'react';

import Campos from './Campos';

class Inicio extends Component{
    render(){
        return(
            <div className="container inicio-body">
                <div className="row">
                    <div className="col-md-12 slide">
                        <Campos/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Inicio;