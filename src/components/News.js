import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {

  capitlizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    }
    document.title =`NewsNet ${this.capitlizeFirstLetter(this.props.category)}`
  }

  async updateNews() {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(35)
    let parsedData = await data.json()
    this.props.setProgress(60)
    console.log(parsedData);   
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
    })
    this.props.setProgress(100)
}
  async componentDidMount() {
   this.updateNews();
  }
  fetchMoreData = async () => {  
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults
    })
  };
  
  render() {
    return (
      <>
        <h1 className="text-center" style={{color:"white"}}>Top HeadLines</h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
        
        
        <div className="row">
          {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    author={element.author}
                    date={element.publishedAt}
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div> 
        </InfiniteScroll>



      </>
    );
  }
}

export default News;
