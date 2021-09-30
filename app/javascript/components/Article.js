import React from "react"
import PropTypes from "prop-types"
import Timestamp from "react-timestamp"

class Article extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="article-title">
          <a href={this.props.path}>{this.props.title}</a>
        </div>
        <div className="article-body">
          {this.props.description}
          <div className="article-meta-details">
            <small>Created by: {this.props.author}, <Timestamp relative date={this.props.created_at} />,
                  last updated: <Timestamp relative date={this.props.updated_at}/></small>  
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    // this._timer = setInterval(function() {this.forceUpdate()}, 1000)
  }

  componentWillUnmount() {
    // if (this._timer) {
    //   clearInterval(this._timer)
    //   this._timer = null
    // }
  }
}

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  path: PropTypes.string
};
export default Article
