// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskFlowResponseBodyTaskFlowListTaskFlow extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who creates the task flow.
   * 
   * @example
   * 51****
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the user who creates the task flow.
   * 
   * @example
   * Creator_NickName
   */
  creatorNickName?: string;
  /**
   * @remarks
   * The name of the task flow owner.
   * 
   * @example
   * Owner_NickName
   */
  dagOwnerNickName?: string;
  /**
   * @remarks
   * The ID of the latest deployment record.
   * 
   * @example
   * 12**
   */
  deployId?: number;
  /**
   * @remarks
   * The ID of the task flow.
   * 
   * @example
   * 134137****
   */
  id?: number;
  /**
   * @remarks
   * The status of the latest execution. Valid values:
   * 
   * *   **0**: invalid.
   * *   **1**: scheduling disabled.
   * *   **2**: waiting to be scheduled.
   * 
   * @example
   * 0
   */
  latestInstanceStatus?: number;
  /**
   * @remarks
   * The time when the latest execution record was generated.
   * 
   * @example
   * 2022-04-13
   */
  latestInstanceTime?: string;
  /**
   * @remarks
   * The status of the task flow. Valid values:
   * 
   * *   **0**: The task flow is invalid.
   * *   **1**: Scheduling is disabled for the task flow.
   * *   **2**: The task flow is waiting to be scheduled.
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      creatorNickName: 'CreatorNickName',
      dagOwnerNickName: 'DagOwnerNickName',
      deployId: 'DeployId',
      id: 'Id',
      latestInstanceStatus: 'LatestInstanceStatus',
      latestInstanceTime: 'LatestInstanceTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      creatorNickName: 'string',
      dagOwnerNickName: 'string',
      deployId: 'number',
      id: 'number',
      latestInstanceStatus: 'number',
      latestInstanceTime: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskFlowResponseBodyTaskFlowList extends $dara.Model {
  taskFlow?: ListTaskFlowResponseBodyTaskFlowListTaskFlow[];
  static names(): { [key: string]: string } {
    return {
      taskFlow: 'TaskFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskFlow: { 'type': 'array', 'itemType': ListTaskFlowResponseBodyTaskFlowListTaskFlow },
    };
  }

  validate() {
    if(Array.isArray(this.taskFlow)) {
      $dara.Model.validateArray(this.taskFlow);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
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
   * 4116147E-C628-5816-8779-8EEAF8E973F4
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
   * The information about the task flows returned.
   */
  taskFlowList?: ListTaskFlowResponseBodyTaskFlowList;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      taskFlowList: 'TaskFlowList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      taskFlowList: ListTaskFlowResponseBodyTaskFlowList,
    };
  }

  validate() {
    if(this.taskFlowList && typeof (this.taskFlowList as any).validate === 'function') {
      (this.taskFlowList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

