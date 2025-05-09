// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackFillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the execution record of the task flow.
   * 
   * @example
   * 47****
   */
  dagInstanceId?: number;
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
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 43****
   */
  nodeId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7FAD400F-7A5C-4193-8F9A-39D86C4F0231
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
      dagInstanceId: 'DagInstanceId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      nodeId: 'NodeId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagInstanceId: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      nodeId: 'number',
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

