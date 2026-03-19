// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskFlowInstanceResponseBodyDAGInstanceListDAGInstance extends $dara.Model {
  businessTime?: string;
  dagId?: string;
  dagName?: string;
  dagVersion?: string;
  endTime?: string;
  historyDagId?: number;
  id?: number;
  message?: string;
  ownerName?: string;
  status?: number;
  triggerType?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      businessTime: 'BusinessTime',
      dagId: 'DagId',
      dagName: 'DagName',
      dagVersion: 'DagVersion',
      endTime: 'EndTime',
      historyDagId: 'HistoryDagId',
      id: 'Id',
      message: 'Message',
      ownerName: 'OwnerName',
      status: 'Status',
      triggerType: 'TriggerType',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTime: 'string',
      dagId: 'string',
      dagName: 'string',
      dagVersion: 'string',
      endTime: 'string',
      historyDagId: 'number',
      id: 'number',
      message: 'string',
      ownerName: 'string',
      status: 'number',
      triggerType: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskFlowInstanceResponseBodyDAGInstanceList extends $dara.Model {
  DAGInstance?: ListTaskFlowInstanceResponseBodyDAGInstanceListDAGInstance[];
  static names(): { [key: string]: string } {
    return {
      DAGInstance: 'DAGInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DAGInstance: { 'type': 'array', 'itemType': ListTaskFlowInstanceResponseBodyDAGInstanceListDAGInstance },
    };
  }

  validate() {
    if(Array.isArray(this.DAGInstance)) {
      $dara.Model.validateArray(this.DAGInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskFlowInstanceResponseBody extends $dara.Model {
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

