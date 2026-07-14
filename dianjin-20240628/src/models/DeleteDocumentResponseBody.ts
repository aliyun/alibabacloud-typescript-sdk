// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDocumentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Time consumed.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Returned data.
   * 
   * @example
   * True
   */
  data?: boolean;
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
   * Request ID.
   * 
   * @example
   * 67C7021A-D268-553D-8C15-A087B9604028
   */
  requestId?: string;
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
   * Timestamp.
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
      data: 'boolean',
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

