const Button = (props) => {
  const {title, click} = props;
  return (
    <button onClick={click}>{title}</button>
  );
}

class OmenDrawer extends React.Component {
  state = {
    isClicked: false,
    identifier: 0,
    newOmenContent: '',
    omens: [
      {
        id: 1,
        content: 'Pierwsza wróżba'
      },
      {
        id: 2,
        content: 'Druga wróżba'
      },
      {
        id: 3,
        content: 'Trzecia wróżba'
      },
    ]
  }

  handleDrawID = () => {
    const max = this.state.omens.length;
    const min = 0;
    let flag = true;
    let drawedNumber = 0;
    while(flag) {
      drawedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (drawedNumber > 0) {
        flag = false;
      }
    }

    this.setState({
      identifier: drawedNumber,
      isClicked: true
    });
  }

  getRandomOmen(array, bool) {
    if (bool) {
      const newArray = array.filter(singleArray => singleArray.id === this.state.identifier);
      alert(`Dostępne wróżby: ${array.map(singleArray => singleArray.content)}`);
      return newArray.map(singleNewArray => singleNewArray.content);
    } else return null;
  }

  handleChange = e => {
    this.setState({
      newOmenContent: e.target.value,
      isClicked: false
    });
  }

  handleAddNewOmen = () => {
    const text = this.state.newOmenContent;

    if (text.length) {
     let newID = this.state.omens[this.state.omens.length - 1].id + 1;
     this.setState(prevState => ({
       omens: [...prevState.omens, {id: newID, content: text}],
       isClicked: false,
       newOmenContent: ''
     }));
    }
  }

  render() {
    const {omens, isClicked, newOmenContent} = this.state;
    const text = this.getRandomOmen(omens, isClicked);
    return (
      <>
        <Button title='Losuj wróżbę' click={this.handleDrawID}/>
        <br />
        <input value={newOmenContent} type="text" onChange={this.handleChange}/>
        <Button title='Dodaj wróżbę' click={this.handleAddNewOmen}/>
        <br />
        {text ? <h1>{text}</h1> : null}
      </>
    );
  }
}

ReactDOM.render(<OmenDrawer />, document.getElementById('root'));