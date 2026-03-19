// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskFlowsByPageResponseBodyTaskFlowListTaskFlow extends $dara.Model {
  creatorId?: string;
  creatorNickName?: string;
  cronBeginDate?: string;
  cronEndDate?: string;
  cronStr?: string;
  cronSwitch?: boolean;
  cronType?: number;
  dagName?: string;
  dagOwnerId?: string;
  dagOwnerNickName?: string;
  deployId?: number;
  description?: string;
  id?: number;
  latestInstanceStatus?: number;
  latestInstanceTime?: string;
  scenarioId?: string;
  scheduleParam?: string;
  status?: number;
  timeZoneId?: string;
  triggerType?: number;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      creatorNickName: 'CreatorNickName',
      cronBeginDate: 'CronBeginDate',
      cronEndDate: 'CronEndDate',
      cronStr: 'CronStr',
      cronSwitch: 'CronSwitch',
      cronType: 'CronType',
      dagName: 'DagName',
      dagOwnerId: 'DagOwnerId',
      dagOwnerNickName: 'DagOwnerNickName',
      deployId: 'DeployId',
      description: 'Description',
      id: 'Id',
      latestInstanceStatus: 'LatestInstanceStatus',
      latestInstanceTime: 'LatestInstanceTime',
      scenarioId: 'ScenarioId',
      scheduleParam: 'ScheduleParam',
      status: 'Status',
      timeZoneId: 'TimeZoneId',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      creatorNickName: 'string',
      cronBeginDate: 'string',
      cronEndDate: 'string',
      cronStr: 'string',
      cronSwitch: 'boolean',
      cronType: 'number',
      dagName: 'string',
      dagOwnerId: 'string',
      dagOwnerNickName: 'string',
      deployId: 'number',
      description: 'string',
      id: 'number',
      latestInstanceStatus: 'number',
      latestInstanceTime: 'string',
      scenarioId: 'string',
      scheduleParam: 'string',
      status: 'number',
      timeZoneId: 'string',
      triggerType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskFlowsByPageResponseBodyTaskFlowList extends $dara.Model {
  taskFlow?: ListTaskFlowsByPageResponseBodyTaskFlowListTaskFlow[];
  static names(): { [key: string]: string } {
    return {
      taskFlow: 'TaskFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskFlow: { 'type': 'array', 'itemType': ListTaskFlowsByPageResponseBodyTaskFlowListTaskFlow },
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

export class ListTaskFlowsByPageResponseBody extends $dara.Model {
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
   * 6CB28697-BFE2-5739-9228-3971990E982C
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
  taskFlowList?: ListTaskFlowsByPageResponseBodyTaskFlowList;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 24
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      taskFlowList: 'TaskFlowList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      taskFlowList: ListTaskFlowsByPageResponseBodyTaskFlowList,
      totalCount: 'number',
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

