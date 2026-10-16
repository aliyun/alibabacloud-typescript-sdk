// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendVerificationCodeForBindSecureMobilePhoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the verification code. The time is in RFC 3339 UTC format, indicated by Z for UTC.
   * 
   * @example
   * 2021-12-17T07:38:41.747Z
   */
  expirationDate?: string;
  /**
   * @remarks
   * The request ID.
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

