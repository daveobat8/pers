import React, { useState, useEffect } from 'react'
import { Button, Card, CardBody, CardImg, CardTitle, Col, Row } from 'react-bootstrap';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [])

  return (
    <div>
      <Row>
        {movies.map((movie) => (
          <Col sm>
          <Card style={{marginLeft:"0px", marginRight:"0px", backgroundColor:"black"}}>
            <CardImg style={{height:"250px"}} src={movie.poster}/>
            <CardBody>
              <CardTitle style={{color:"white", fontSize:"15px"}}>{movie.name}</CardTitle>
              <Button
                    variant="dark"
                    className="nav-item "
                    style={{ marginTop: "0px" }}
                  >
                    {movie.rating}
                  </Button>
            </CardBody>
            
          </Card>
          </Col>
        ))}
      </Row>

    </div>
  )
}

export default Movies