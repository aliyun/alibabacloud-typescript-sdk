// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgUserGroupAddOrUpdateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the operation. Valid values:
   * 
   * - `true`: The operation succeeded.
   * 
   * - `false`: The operation failed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error code that is returned if the request fails.
   * 
   * @example
   * 1029030003
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request fails.
   * 
   * @example
   * param error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request. This is a common parameter. We recommend that you save this ID. If an issue occurs, you can use the ID to locate logs for troubleshooting.
   * 
   * @example
   * 102400001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
   * 
   * - `true`: The request succeeded.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

