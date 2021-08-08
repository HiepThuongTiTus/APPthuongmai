import React from 'react';
import {Row, Col} from 'antd';
import {useDispatch} from 'react-redux';
import * as actions from '../../actions'
import LayoutShopping from "../../components/Layout";

const HomeShopping =() =>{
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(actions.getDataProducts());
      }, [dispatch]);
    return (
            <LayoutShopping sub_1 = "Home" sub_2="List" sub_3 = "App">
                <Row>
                    <Col span= "24">
                        <h3> This is Hiep </h3>
                    </Col>
                </Row>
            </LayoutShopping>

    );
};
export default React.memo(HomeShopping);