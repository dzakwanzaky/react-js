import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
     // active : "Merah",
     color: 'Merah',
     img: 'merah.png'
    };
  }
  clicked(menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
    this.setState({
      name: menu.name,
      color: menu.color,
      img: menu.img,
      //active: menu,
    });
  }
 /* menusaya(){
    return <img src={this.state.active+".jpg"} width="200"></img>
  }*/
 /* menusaya(){
    var gambar;
    if (this.state.active.toLocaleLowerCase() === 'merah'){
      gambar = "apel";
    }else if(this.state.active.toLocaleLowerCase() === 'kuning'){
      gambar = "nanas";
    }else if(this.state.active.toLocaleLowerCase() === 'hijau'){
      gambar = "alpukat";
    }else if(this.state.active.toLocaleLowerCase() === 'biru'){
      gambar = "anggur";
    }
    return <img src={gambar+".jpg"} width="200"></img>
  }*/
  render() {
    return (
      <div id="app">
        { /* map akan loop sebanyak menu yang didefinisikan*/ }
        {/* kemudian mengembalikan elemen <a/> */}
        <nav className="nav">{this.props.items.map((menu,index) => {
            var style = 'menu';

            if(this.state.color === menu.color){ // if(this.state.active === menu){
                style = `${style} is-active`;
            }

            return <a
              className = {style+" "+menu.color}
              //bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked'
              onClick = {this.clicked.bind(this,menu)}
              key = {index}
            >
              {/*{menu.color}*/}
              {menu.name}
            </a>;
          }
        )}
        </nav>

        <div className = "info">
          Ini adalah <span className = {"selected "+this.state.color}>
          {this.state.name}</span> <br></br>
          <br></br>
        <img src={this.state.img} width="200"></img>
        {/*{this.menusaya()}*/}
        </div>

        
      </div>
    );
  }
}

export default App;
