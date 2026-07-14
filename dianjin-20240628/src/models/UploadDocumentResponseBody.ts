// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDocumentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The processing time, in milliseconds.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * 1782981430906818562
   */
  data?: string;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
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
   * ff3fef67-48d9-4379-a237-9ba8143fe739
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

