const Button = (props) => {
  const {title, click} = props;

  return (
    <button onClick={click}>{title}</button>
  );
}

class Draw extends React.Component {
  state = {
    drawedID: 0,
    text: '',
    omens: [
      {
        id: 1,
        content: 'Pierwsza wróżba',
      },
      {
        id: 2,
        content: 'Druga wróżba',
      },
      {
        id: 3,
        content: 'Trzecia wróżba',
      },
    ]
  }

  drawIndex = () => {
    let maxIndex = 0;
    if (this.state.omens) {
      maxIndex = this.state.omens.length + 1;

      this.setState({
        drawedID: Math.floor((Math.random() * maxIndex))
      });
    }
    this.drawOmen(this.state.drawedID);
  }

  drawOmen(id) {
      if (id) {
        const omen = this.state.omens.filter(omen => omen.id === id);

        this.setState({
          text: omen.map(singleText => singleText.content)
        });
        alert(`Dostępne wróżby: ${this.state.omens.map(omen => omen.content)}`);
      }
  }

  render() {
    const {text} = this.state;
    return (
      <>
        <Button title='Zobacz wróżbę' click={this.drawIndex}/>
        <br />
        <input type="text"/>
        <Button title='Dodaj wróżbę'/>
        <br />
        <h1>{text}</h1>
      </>
    );
  }
}

ReactDOM.render(<Draw />, document.getElementById('root'));