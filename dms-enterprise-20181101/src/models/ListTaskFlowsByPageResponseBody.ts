// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskFlowsByPageResponseBodyTaskFlowListTaskFlow extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who created the task flow.
   * 
   * @example
   * 51****
   */
  creatorId?: string;
  /**
   * @remarks
   * The username of the user who created the task flow.
   * 
   * @example
   * Creator_NickName
   */
  creatorNickName?: string;
  /**
   * @remarks
   * The start time of scheduled scheduling. The task flow is not scheduled before this point in time.
   * 
   * @example
   * 1970-01-01
   */
  cronBeginDate?: string;
  /**
   * @remarks
   * The end time of scheduled scheduling. The task flow is not scheduled after this point in time.
   * 
   * @example
   * 2023-01-01
   */
  cronEndDate?: string;
  /**
   * @remarks
   * Scheduled Cron.
   * 
   * @example
   * 0 0 1 * * ? *
   */
  cronStr?: string;
  /**
   * @remarks
   * Whether to enable scheduled scheduling.
   * 
   * @example
   * false
   */
  cronSwitch?: boolean;
  /**
   * @remarks
   * Scheduling cycle type. Valid values:
   * - **2**: Hourly scheduling
   * - **3**: Daily scheduling
   * - **4**: Weekly scheduling
   * - **5**: Monthly scheduling
   * 
   * @example
   * 2
   */
  cronType?: number;
  /**
   * @remarks
   * The name of the task flow.
   * 
   * @example
   * poc_task_test
   */
  dagName?: string;
  /**
   * @remarks
   * The user ID of the task flow owner.
   * 
   * @example
   * 12***89
   */
  dagOwnerId?: string;
  /**
   * @remarks
   * The username of the owner of the task flow.
   * 
   * @example
   * Owner_NickName
   */
  dagOwnerNickName?: string;
  /**
   * @remarks
   * The ID of the last deployment record of the task flow.
   * 
   * @example
   * 65***
   */
  deployId?: number;
  /**
   * @remarks
   * The description of the task flow.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the task flow.
   * 
   * @example
   * 7***
   */
  id?: number;
  /**
   * @remarks
   * The status of the last execution of the task flow. Valid values:
   * 
   * *   **0**: invalid
   * *   **1**: scheduling disabled
   * *   **2**: waiting to be scheduled
   * 
   * @example
   * 0
   */
  latestInstanceStatus?: number;
  /**
   * @remarks
   * The time when the last execution record was created.
   * 
   * @example
   * 2022-04-13
   */
  latestInstanceTime?: string;
  /**
   * @remarks
   * The ID of the application scenario.
   * 
   * @example
   * 1245
   */
  scenarioId?: string;
  /**
   * @remarks
   * Event scheduling configuration, JSON string format.
   * 
   * @example
   * {\\"triggerType\\":\\"1\\",\\"specificTime\\":\\"2022-11-15 11:59\\"}
   */
  scheduleParam?: string;
  /**
   * @remarks
   * The status of the task flow. Valid values:
   * 
   * *   **0**: invalid
   * *   **1**: scheduling disabled
   * *   **2**: waiting to be scheduled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Time zone setting. Default value: East 8(Asia/Shanghai).
   * 
   * @example
   * Asia/Shanghai
   */
  timeZoneId?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * - **0**: Periodic scheduling
   * - **1**: Run manually
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The details of the returned task flows.
   */
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

