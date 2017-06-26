import BaseError from './BaseError';

export default class extends BaseError {
  constructor(public auth: string) {
    super();
  }
}
