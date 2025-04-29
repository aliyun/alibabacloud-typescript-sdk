// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CorpTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * 70000
   */
  expire?: number;
  /**
   * @example
   * 37j76df
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expire: 'expire',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expire: 'number',
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

