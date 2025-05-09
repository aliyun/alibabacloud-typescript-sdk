// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddTaskFlowEdgesResponseBodyEdgeIds } from "./AddTaskFlowEdgesResponseBodyEdgeIds";


export class AddTaskFlowEdgesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of task flow edge IDs.
   */
  edgeIds?: AddTaskFlowEdgesResponseBodyEdgeIds;
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
   * The ID of the request. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * E5EE2B9E-2F95-57FA-B284-CB441CEE49D6
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
      edgeIds: 'EdgeIds',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeIds: AddTaskFlowEdgesResponseBodyEdgeIds,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.edgeIds && typeof (this.edgeIds as any).validate === 'function') {
      (this.edgeIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

