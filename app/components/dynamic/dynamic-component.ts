import Component from '@glimmer/component';

export default class DynamicComponent extends Component {
  public constructor() {
    super(...arguments);
    console.log(1);
  }
}
