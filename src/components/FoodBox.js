import { Card, Col, Button } from 'antd';
import React from 'react';

// Iteration 2
function FoodBox(props) {
    const { key, name, image, calories, servings, clickToDelete } = props;
  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary" onClick={(e) => clickToDelete(name)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;