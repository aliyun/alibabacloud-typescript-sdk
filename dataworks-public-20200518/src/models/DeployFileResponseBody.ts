// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment package. You can then use this ID as a parameter when calling the [GetDeployment](https://help.aliyun.com/document_detail/173950.html) API to obtain the details of the deployment.
   * 
   * @example
   * 30000001
   */
  data?: number;
  /**
   * @remarks
   * Error code.
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
   * The request ID is used to troubleshoot issues when an error occurs.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
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
      data: 'number',
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

