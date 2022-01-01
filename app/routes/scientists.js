import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return ['Emmanuel Ejim', 'Andy Ejim', 'Father', 'Poochi'];
  }
}
