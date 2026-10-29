// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIdentityProviderSCIMCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. Handle failures based on the HTTP status code and message.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code of the request. This does not indicate the final result of the background task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned for the request. For asynchronous tasks, query the task result by calling the corresponding API operation.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. You can use this ID to troubleshoot issues. Keep the ID if the request fails.
   * 
   * @example
   * request-example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates that the request was successful. For asynchronous write operations, you must still query the task result.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
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

