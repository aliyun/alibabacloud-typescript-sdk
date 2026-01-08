// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenChatappServiceResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * true
   */
  openStatus?: boolean;
  /**
   * @example
   * 3D2FFEE6-368D-532D-87AA-F45B02DD28B7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      openStatus: 'OpenStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      openStatus: 'boolean',
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

