// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Total number of data entries under the conditions of this request. This parameter is optional and is not returned by default.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Details
   * 
   * @example
   * null
   */
  details?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * Response message of the request
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 90ABA848-AD74-1F6E-84BC-4182A7F1F29E
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
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

