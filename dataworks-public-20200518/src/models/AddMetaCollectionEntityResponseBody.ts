// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMetaCollectionEntityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 9999
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified product does not exist.
   */
  errorMessage?: string;
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
   * The request ID. You can use the request ID to query logs and troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-E****
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the operation. Valid values:
   * 
   * *   true: succeeded
   * *   false: failed
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * true false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      status: 'boolean',
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

