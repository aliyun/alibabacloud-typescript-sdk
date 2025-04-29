// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CorpTokenResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 70000
   */
  expire?: number;
  /**
   * @example
   * 1635744378301
   */
  start?: number;
  /**
   * @example
   * 37j76df
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expire: 'expire',
      start: 'start',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expire: 'number',
      start: 'number',
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

