// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLibraryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Processing time in milliseconds
   * 
   * @example
   * 300
   */
  cost?: number;
  /**
   * @remarks
   * Response data
   * 
   * @example
   * a1b2c3
   */
  data?: string;
  /**
   * @remarks
   * Data type
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Operation success status
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Timestamp
   * 
   * @example
   * null
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
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

