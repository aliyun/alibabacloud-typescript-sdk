// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokePluginResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response time in milliseconds.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Response data.
   * 
   * @example
   * {\\"jobWaiting\\": [0, 0], \\"timestamps\\": [1713383820, 1713383880], \\"jobUsage\\": [0, 0], \\"quotaUsage\\": [123, 32]}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * Data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 915AAAB9-4908-5224-9E53-9E9D7D0AA94B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Timestamp in YYYY-MM-DD HH:MM:SS format.
   * 
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

