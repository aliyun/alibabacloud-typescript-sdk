// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOfficeSiteSsoStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether SSO is enabled.
   * 
   * @example
   * false
   */
  ssoStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ssoStatus: 'SsoStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ssoStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

