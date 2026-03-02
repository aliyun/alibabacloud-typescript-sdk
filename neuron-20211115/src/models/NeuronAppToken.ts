// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NeuronAppToken extends $dara.Model {
  /**
   * @example
   * 1343424sdadsa
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

