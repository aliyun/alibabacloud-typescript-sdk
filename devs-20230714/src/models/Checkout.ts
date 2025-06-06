// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Checkout extends $dara.Model {
  /**
   * @example
   * +001691d0768ca49e9550beeb59fbc163f33b7e88:refs/remotes/origin/master
   */
  ref?: string;
  /**
   * @example
   * https:/your_token/@github.com/buptwzj/test-initRepo4.git
   */
  remote?: string;
  static names(): { [key: string]: string } {
    return {
      ref: 'ref',
      remote: 'remote',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ref: 'string',
      remote: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

