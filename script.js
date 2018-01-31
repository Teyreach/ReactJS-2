

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
	pic: 'https://i.imgur.com/OXy5eZj.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
	pic: 'http://i.imgur.com/FqUk8jU.jpg'
  },
  {
    id: 3,
    title: 'Matrix',
    desc: 'Historia człowieka, który rzucił narkotyki, ustabilizował się i znalazł pracę',
	pic: 'https://i.imgur.com/mqLGzs7.jpg'
  },
  {
	id: 4,
	title: 'Władca Pierścieni',
	desc: 'Film jak książka, tylko inny',
	pic: 'http://i.imgur.com/lkEvk.jpg'
  }
];

var Movie = React.createClass({
  render: function() {
    return React.createElement('li', {key: this.props.movieX.id},
      React.createElement(MovieTitle, {title: this.props.movieX.title}), 
      React.createElement(MovieDescription, {desc: this.props.movieX.desc}),
      React.createElement(MovieImage, {src: this.props.movieX.pic})
    );
  }
});

var MovieTitle = React.createClass({
  render: function() {
    return React.createElement('h2', {}, this.props.title)
  }
});

var MovieDescription = React.createClass({
  render: function() {
    return React.createElement('p', {}, this.props.desc)
  }
});

var MovieImage = React.createClass({
  render: function() {
    return React.createElement('img', {src: this.props.src})
  }
});

var MovieList = React.createClass({
  render: function() {
    return React.createElement('ul', {}, moviesElements)
  }
});

var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, {movieX: movie})
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
  );
 
 ReactDOM.render(element, document.getElementById('app'));