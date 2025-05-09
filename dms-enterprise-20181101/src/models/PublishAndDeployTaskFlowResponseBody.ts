// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishAndDeployTaskFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment record.
   * 
   * @example
   * 12**
   */
  deployId?: number;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Unknown server error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 64E26249-B61F-51C6-B6DF-47EFF50128CC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deployId: 'DeployId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployId: 'number',
      errorCode: 'string',
      errorMessage: 'string',
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

