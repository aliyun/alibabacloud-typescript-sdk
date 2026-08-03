// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceAccessInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The redirect URL for logging on to the service console.
   * 
   * @example
   * http://xxxxxxxxx
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The verification code for the service console logon URL.
   * 
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

