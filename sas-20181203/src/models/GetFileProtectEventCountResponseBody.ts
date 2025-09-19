// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectEventCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned if the request is successful.
   * 
   * @example
   * 16
   */
  data?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B28EC81-2FA7-5097-80D9-0DBE1A3DBD59
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
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

