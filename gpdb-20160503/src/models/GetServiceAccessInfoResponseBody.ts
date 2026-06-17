// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceAccessInfoResponseBody extends $dara.Model {
  /**
   * @example
   * http://xxxxxxxxx
   */
  callbackUrl?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @example
   * dcwedsxcx
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      requestId: 'RequestId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      requestId: 'string',
      verifyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

