// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendVerificationCodeForBindSecureMobilePhoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the verification code expires.
   * 
   * @example
   * 2021-12-17T07:38:41.747Z
   */
  expirationDate?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DCD43660-75DD-5D15-B342-1B83FCA5B913
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      expirationDate: 'ExpirationDate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationDate: 'string',
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

