import Card from "./Card";



function Tours({tours, removeTour}) {
   return(
       <div className="container">
           <div>
              <h2 className="title">Plan with Love</h2> 
            </div>
            <divn className="cards">
               {
                tours.map( (tour) => {
                    return <Card key= {tour.id} {...tour} removeTour={removeTour}></Card>
                })
               }
            </divn>
 
        </div>

    );

}

export default Tours;