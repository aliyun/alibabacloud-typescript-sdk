// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMFAAuthenticationStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether MFA is enabled for users. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  MFAAuthenticationStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E688346-DF1A-5537-9BFC-8A9974D29586
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      MFAAuthenticationStatus: 'MFAAuthenticationStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFAAuthenticationStatus: 'string',
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

