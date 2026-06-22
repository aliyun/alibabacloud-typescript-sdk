// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallCloudMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the operation failed.
   * 
   * @example
   * IllegalParam
   */
  code?: string;
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
   * The detailed information about the error code.
   * 
   * @example
   * There was an error with your request.
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * F92AFB96-FACC-57E7-928E-678D04B94CAE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - **true**: The operation was successful.
   * - **false**: The operation failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
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

