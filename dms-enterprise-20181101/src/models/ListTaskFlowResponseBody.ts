// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskFlowResponseBodyTaskFlowListTaskFlow extends $dara.Model {
  creatorId?: string;
  creatorNickName?: string;
  dagOwnerNickName?: string;
  deployId?: number;
  id?: number;
  latestInstanceStatus?: number;
  latestInstanceTime?: string;
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

