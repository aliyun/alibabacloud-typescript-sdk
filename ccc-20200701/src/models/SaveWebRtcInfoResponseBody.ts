// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveWebRtcInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CF1C21B9-2D49-4B54-880F-FBE248C16903
   */
  requestId?: string;
  /**
   * @remarks
   * The number of rows returned upon data storage, indicating how many records were successfully written. If this value is not 1, an abnormal condition may have occurred and requires attention.
   * 
   * @example
   * 1
   */
  rowCount?: number;
  /**
   * @remarks
   * Indicates whether the operation succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The time when the information was stored, formatted as a Unix timestamp in milliseconds.
   * 
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

