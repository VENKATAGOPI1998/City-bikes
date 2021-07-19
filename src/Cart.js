import React, { useEffect, useState } from "react";
import { getOutput } from "./axios";

function Cart() {
  let [item, setItem] = useState([]);

  useEffect(() => {
    async function getdata() {
      let details = await getOutput();
      setItem(details.data.networks);
    }
    getdata();
  }, []);

  return (
    <>
      <div className="row">
        {item.map((user, index) => {
          return (
            <div className="col-md-6 col-sm-12 col-lg-4 mt-5">
              <div class="card">
                <div class="card-body bg-success">
                  <h5 class="card-title">{user.name}</h5>
                  <h6 className="card-text">company: {user.company}</h6>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">City : {user.location.city}</li>
                  <li class="list-group-item">
                    Country : {user.location.country}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
