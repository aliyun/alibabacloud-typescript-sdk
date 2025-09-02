// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. You can troubleshoot errors based on the ID.
   * 
   * @example
   * 1000000001
   */
  deploymentId?: number;
  /**
   * @remarks
   * The ID of the file. You can use the ListFiles interface to query the ID of the corresponding file.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request is successful.
   * *   false: The request fails.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the deployment task that deploys the file. If the file has been committed, an asynchronous process is triggered to delete the file in the scheduling system. The value of this parameter is used to call the GetDeployment operation to poll the status of the asynchronous process.
   * 
   * If this parameter is empty, the file is deleted and the polling is not required.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * The error code returned.
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

