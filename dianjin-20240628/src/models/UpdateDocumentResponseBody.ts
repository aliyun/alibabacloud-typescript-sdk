// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDocumentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Time consumed
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
   * null
   */
  data?: string;
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
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  requestId?: string;
  /**
   * @remarks
   * Success status.
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

