// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReDeployLhDagVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment record.
   * 
   * @example
   * 15990
   */
  deployId?: number;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 035C92E0-2EAD-50E5-A6DD-550F5F73D7CE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
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

