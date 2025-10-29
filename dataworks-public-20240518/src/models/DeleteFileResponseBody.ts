// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * If the file has already been submitted, the DeleteFile operation also triggers an asynchronous deletion process in the scheduling system. You must use the DeploymentId returned by the DeleteFile operation to call GetDeployment and poll the status of the triggered asynchronous deletion process.
   * 
   * If this field is empty, the file has been deleted and no further polling is required.
   * 
   * @example
   * 1000000001
   */
  deploymentId?: number;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The connection does not exist.
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
   * The request ID. Used for troubleshooting when an error occurs.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   true: success.
   * *   false: failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'DeploymentId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'number',
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

