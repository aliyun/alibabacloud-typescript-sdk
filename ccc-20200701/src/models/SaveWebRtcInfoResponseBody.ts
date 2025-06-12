// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveWebRtcInfoResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * CF1C21B9-2D49-4B54-880F-FBE248C16903
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  rowCount?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1647262108395
   */
  timeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      rowCount: 'RowCount',
      success: 'Success',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      rowCount: 'number',
      success: 'boolean',
      timeStamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

