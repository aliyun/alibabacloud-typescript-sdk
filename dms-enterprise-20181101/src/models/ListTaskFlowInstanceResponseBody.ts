// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskFlowInstanceResponseBodyDAGInstanceList } from "./ListTaskFlowInstanceResponseBodyDaginstanceList";


export class ListTaskFlowInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the execution records returned.
   */
  DAGInstanceList?: ListTaskFlowInstanceResponseBodyDAGInstanceList;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * UnknownError
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
   * 8CFF2295-8249-5287-B888-DBD4F0D76CB0
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
  /**
   * @remarks
   * The total number of execution records returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DAGInstanceList: 'DAGInstanceList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DAGInstanceList: ListTaskFlowInstanceResponseBodyDAGInstanceList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.DAGInstanceList && typeof (this.DAGInstanceList as any).validate === 'function') {
      (this.DAGInstanceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

