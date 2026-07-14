// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time spent, in milliseconds.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * The download URL for the document. The URL expires in 1 hour.
   * 
   * @example
   * https://path_to_file
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
   * 66249B43-8C2B-5EE7-AE78-B382306621C6
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
   * The UNIX timestamp.
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

