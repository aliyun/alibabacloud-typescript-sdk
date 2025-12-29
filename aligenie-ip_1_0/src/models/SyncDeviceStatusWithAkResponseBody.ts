// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncDeviceStatusWithAkResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @example
   * F12B6147-5925-19E5-A3AD-E1EE1360F34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      result: 'Result',
      statusCode: 'StatusCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      result: 'boolean',
      statusCode: 'number',
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

