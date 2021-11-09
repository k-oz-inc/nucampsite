import React, { Component } from 'react';
import { Card, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import CardImg from 'reactstrap/lib/CardImg';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }

    render() {
        const directory = this.props.campsites.map(campsites => {
            return (
                <div key={campsites.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={campsites.image} alt={campsites.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsites.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;