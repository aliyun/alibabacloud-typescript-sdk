// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskFlowGraphResponseBodyTaskFlowGraph } from "./GetTaskFlowGraphResponseBodyTaskFlowGraph";


export class GetTaskFlowGraphResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * D9D91166-A626-5F4E-9CA6-7AB10C59DBD8
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
  /**
   * @remarks
   * The list of DAG variables of the task flow.
   */
  taskFlowGraph?: GetTaskFlowGraphResponseBodyTaskFlowGraph;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      taskFlowGraph: 'TaskFlowGraph',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      taskFlowGraph: GetTaskFlowGraphResponseBodyTaskFlowGraph,
    };
  }

  validate() {
    if(this.taskFlowGraph && typeof (this.taskFlowGraph as any).validate === 'function') {
      (this.taskFlowGraph as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

