import { ToyReact, Component } from "./ToyReact";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <div>child</div>
        <div>{this.children}</div>
      </div>
    );
  }
}

const a = (
  <MyComponent name="a" id="idx">
    <div>1111</div>
    <div>2222</div>
    <div>3333</div>
  </MyComponent>
);

ToyReact.render(a, document.getElementById("app"));
