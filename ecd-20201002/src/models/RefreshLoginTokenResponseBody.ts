// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshLoginTokenResponseBody extends $dara.Model {
  /**
   * @example
   * v1c27bab6c205b2fdfac916434306375722776d6aa89e30b7836d18c95ade9137f0f5ac4325260782184e96ee2b3f0****
   */
  loginToken?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginToken: 'LoginToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

