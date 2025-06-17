// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCdnFullDomainsBlockIPResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 0 indicates that the call is successful. If another status code is returned, the call fails.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The additional information returned. If the request was successful, OK is returned. If the request failed, an error message is returned.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 23ACE7E2-2302-42E3-98F8-E5E697FD86C3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
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

