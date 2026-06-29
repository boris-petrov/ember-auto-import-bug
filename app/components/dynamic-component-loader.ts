import { importSync } from '@embroider/macros';
import Component from '@glimmer/component';

export default class DynamicComponentLoaderComponent extends Component {
  private staticComponent: string = 'static-component';

  public constructor(owner, args) {
    super(owner, args);

    console.log(importSync(`/components/static/${this.staticComponent}`).default);
  }
}
