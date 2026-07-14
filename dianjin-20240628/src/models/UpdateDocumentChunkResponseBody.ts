// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDocumentChunkResponseBody extends $dara.Model {
  /**
   * @remarks
   * Processing time
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
   * SUCCESS
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
   * 003D019A-1BB3-53EC-A0D2-CE76DA5D73B1
   */
  requestId?: string;
  /**
   * @remarks
   * Is successful.
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
   * 2024-01-01 00:00:00
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

