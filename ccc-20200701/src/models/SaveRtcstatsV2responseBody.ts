// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveRTCStatsV2ResponseBody extends $dara.Model {
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
   * BA03159C-E808-4FF1-B27E-A61B6E888D7F
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
   * 1647309061000
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

