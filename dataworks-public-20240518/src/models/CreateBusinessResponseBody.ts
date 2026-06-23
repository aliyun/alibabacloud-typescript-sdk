// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBusinessResponseBody extends $dara.Model {
  /**
   * @remarks
   * Business Process ID.
   * 
   * @example
   * 100001
   */
  businessId?: number;
  /**
   * @remarks
   * Error code. The value is as follows:
   * 
   * - If the request succeeds, the ErrorCode field is not returned.
   * 
   * - If the request fails, the ErrorCode field is returned.
   * 
   * For more information, see the error code list in this topic.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The unique ID of this request.<br>
   * If an error occurs, you can use this ID to troubleshoot the issue.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the invocation succeeded. Valid values:
   * 
   * - true: The invocation succeeded.
   * 
   * - false: The invocation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
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

