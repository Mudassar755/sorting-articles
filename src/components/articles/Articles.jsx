import {useEffect, useContext} from 'react';
import Moment from 'react-moment';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const Articles = () => {
    const { getArticles, articles, getArticleBySlug, getMostUpvoted, getMostRecent } = useContext(GlobalContext);

    useEffect(()=>{
      getArticles();
    },[])

    return (
        <div>
             <section data-jarallax data-speed=".8" className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover jarallax" style={{ backgroundImage: `url(/static/img/cover.jpg)` }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7 text-center">
                            
                            <h1 className="display-2 font-weight-bold text-white">
                                Our Newsroom
                            </h1>
                           
                            <p className="lead mb-0 text-white-75">
                                Keep up to date with what we're working on! Landkit is an ever evolving theme with regular updates.
                            </p>
                        </div>
                    </div> 
                </div> 
            </section>
            <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor" /></svg>
                </div>
            </div>

            <section className="mt-n6">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Form */}
                            <form className="rounded shadow mb-4">
                                <div className="input-group input-group-lg">

                                    <span className="input-group-text border-0 pr-1">
                                        <i className="fe fe-search" />
                                    </span>

                                    <input className="form-control border-0 px-1" type="text" aria-label="Search our blog..." placeholder="Search our blog..." />

                                    <span className="input-group-text border-0 py-0 pl-1 pr-3">
                                        <a className="btn btn-sm btn-primary" href="#">
                                            Search
                                        </a>
                                    </span>
                                </div>
                            </form>
                          
                        </div>
                    </div>
                </div>
            </section>


            <section className="pt-7 pt-md-10">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-12 col-md">

                            <h3 className="mb-0">
                                Latest Stories
                            </h3>

                            <p className="mb-0 text-muted">
                                Here’s what we've been up to recently.
                            </p>
                        </div>
                        <div className="col-12 col-md-auto">

                            <button onClick={getMostUpvoted} className="btn btn-sm btn-outline-gray-300 d-none d-md-inline">
                                Most Upvoted
                             </button>{' '}
                            <button onClick={getMostRecent} className="btn btn-sm btn-outline-gray-300 d-none d-md-inline">
                                Most Recent
                             </button>
                        </div>
                    </div>
                    <div className="row">
                        {articles && articles.map((article, index) => (
                        <div className="col-12 col-md-6 col-lg-4 d-flex"
                        key={index}
                        >

                            <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg" onClick={() => getArticleBySlug(article.slug)}>

                                <Link className="card-img-top"
                                to={`/articles/${article.slug}`}
                                >
                                    <img src={article.articleImg} alt="..." className="card-img-top" />

                                    <div className="position-relative">
                                        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                            <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor" /></svg>
                                        </div>
                                    </div>
                                </Link>

                                <Link className="card-body"
                                to={`/articles/${article.slug}`}
                                >

                                    <h3>
                                        {article.title}
                                    </h3>

                                    <p className="mb-0 text-muted">
                                        {article.description}
                                    </p>
                                </Link>

                                <a className="card-meta mt-auto" to="#">

                                    <hr className="card-meta-divider" />

                                    {/* <div className="avatar avatar-sm mr-2">
                                        <img src={article.avatar} alt="..." className="avatar-img rounded-circle" />
                                    </div> */}

                                    <h6 className="text-uppercase text-muted mr-2 mb-0">
                                       Viewed: {article.upvotes}
                                    </h6>

                                    <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                                        <time dateTime="2019-05-02">
                                        <Moment format="YYYY/MM/DD">{article.createdAt}</Moment>
                                        </time>
                                    </p>
                                </a>
                            </div>
                        </div>
                        ))}
                       
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Articles
