import React from "react";
import { useEffect, useState } from "react";

import "./post.css";
import love from "../../images/love.png";
import moreoptions from "../../images/moreoptions.png";
import share from "../../images/share.png";
import Navbar from "../nav";

const Post = () => {
  const [data, setData] = useState([]);
  const all_posts = [];
  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let k = 0;
  for (let i = data.length - 1; i >= 0; i--) {
    all_posts[k] = data[i];
    k++;
  }

  return (
    <>
      <Navbar />
      <div className="all_posts">
        {all_posts.map((udata) => {
          return (

            <section className="post">
              <section className="post_header">
                <div className="first_line">
                  <span className="name">{udata.name}</span>
                  <span className="dots">
                    <img
                      className="more_icon"
                      src={moreoptions}
                      alt="dots"
                      style={{ width: "50px", marginTop: "22px" }}
                    ></img>
                  </span>
                </div>
                <div className="second_line">
                  <p className="location">{udata.location}</p>
                </div>
              </section>
              <section className="post_img">
                <img
                  src={udata.PostImage}
                  alt={udata.name}
                  style={{ width: "100%", height: "400px" }}
                ></img>
              </section>
              <section className="footer">
                <img
                  className="heart_icon"
                  src={love}
                  alt="like"
                  style={{ width: "50px", height: "30px", padding: "15px" }}
                ></img>
                <img
                  className="share_icon"
                  src={share}
                  alt="share"
                  style={{ width: "50px", height: "30px", padding: "15px" }}
                ></img>
                <span className="date">{udata.date}</span>
                <div className="likes">
                  <p className="likes">{udata.likes} likes</p>
                </div>
                <div className="desc">
                  <span className="desc">{udata.description}</span>
                </div>
              </section>
            </section>
  
          );
        })}
      </div>
    </>
  );
};
export default Post;
  