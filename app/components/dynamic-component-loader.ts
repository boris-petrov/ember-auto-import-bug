import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DynamicComponentLoaderComponent extends Component {
  @tracked
  private component?: any;

  public constructor(owner, args) {
    super(owner, args);

    import('ember-auto-import-bug/components/dynamic/dynamic-component').then(
      ({ default: js }) => {
        this.component = js;
      },
    );
  }
}
