import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import { Redirect } from 'react-router-dom';
import Moment from 'react-moment';

const Article = () => {
    const {  article} = useContext(GlobalContext);
 

        if(article === null){
            return <Redirect to="/" />
        } 

    return (
        <div>
            <section data-jarallax data-speed=".8" className="py-12 py-md-15 bg-cover jarallax" style={{ backgroundImage: `url(/static/img/cover-8.jpg)` }} />
  
    <section className="pt-8 pt-md-11">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-8">

            <h1 className="display-4 text-center">
              {article.title}
            </h1>

 
            <p className="lead mb-7 text-center text-muted">
             {article.description}
            </p>


            <div className="row align-items-center py-5 border-top border-bottom">
              <div className="col-auto">

                <div className="avatar avatar-lg">
                  <img src="/static/img/avatar-3.jpg" alt="..." className="avatar-img rounded-circle" />
                </div>

              </div>
              <div className="col ml-n5">

                <h6 className="text-uppercase mb-0">
                  {article.author}
                </h6>

                <time className="font-size-sm text-muted" dateTime="2019-05-20">
                 <Moment format="YYYY/MM/DD">{article.createdAt}</Moment>
                </time>

              </div>
              <div className="col-auto">

           
                <span className="h6 text-uppercase text-muted d-none d-md-inline mr-4">
                  Share:
                </span>

            
                <ul className="d-inline list-unstyled list-inline list-social">
                  <li className="list-inline-item list-social-item mr-3">
                    <a href="#!" className="text-decoration-none">
                      <img src="/static/img/instagram.svg" className="list-social-icon" alt="..." />
                    </a>
                  </li>
                  <li className="list-inline-item list-social-item mr-3">
                    <a href="#!" className="text-decoration-none">
                      <img src="/static/img/facebook.svg" className="list-social-icon" alt="..." />
                    </a>
                  </li>
                  <li className="list-inline-item list-social-item mr-3">
                    <a href="#!" className="text-decoration-none">
                      <img src="/static/img/twitter.svg" className="list-social-icon" alt="..." />
                    </a>
                  </li>
                </ul>

              </div>
            </div>

          </div>
        </div> 
      </div>
    </section>

    <section className="pt-6 pt-md-8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-8">

            
            <figure className="figure mb-7">

             
              <img className="figure-img img-fluid rounded lift lift-lg" src="/static/img/photo-27.jpg" alt="..." />

              
              <figcaption className="figure-caption text-center">
                This is a caption on this photo for reference
              </figcaption>

            </figure>

          
            <p>
             {article.content}
            
            </p>
   

          </div>
        </div> 
      </div> 
    </section>
        </div>
    )
}

export default Article
