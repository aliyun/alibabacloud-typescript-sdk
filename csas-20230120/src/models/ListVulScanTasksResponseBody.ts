// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVulScanTasksResponseBodyTasksCustomMatchGroup extends $dara.Model {
  /**
   * @remarks
   * The collection of organizational structure nodes.
   */
  group?: string[];
  /**
   * @remarks
   * The identity provider ID.
   * 
   * @example
   * idp-7c3f9a2e5b18****
   */
  idpId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      idpId: 'IdpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': 'string' },
      idpId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.group)) {
      $dara.Model.validateArray(this.group);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVulScanTasksResponseBodyTasksTargetDeviceCount extends $dara.Model {
  /**
   * @remarks
   * The number of user endpoint devices that have acknowledged receipt of this task.
   * 
   * @example
   * 12
   */
  ackCount?: number;
  /**
   * @remarks
   * The number of user endpoint devices on which the scan failed.
   * 
   * @example
   * 1
   */
  failCount?: number;
  /**
   * @remarks
   * The number of user endpoint devices currently executing the scan. This value is calculated by subtracting SuccessCount and FailCount from AckCount.
   * 
   * @example
   * 3
   */
  startCount?: number;
  /**
   * @remarks
   * The number of user endpoint devices on which the scan succeeded.
   * 
   * @example
   * 8
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      ackCount: 'AckCount',
      failCount: 'FailCount',
      startCount: 'StartCount',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackCount: 'number',
      failCount: 'number',
      startCount: 'number',
      successCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVulScanTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The task creation time, in seconds-level UNIX timestamp.
   * 
   * @example
   * 1786291200
   */
  createTime?: number;
  /**
   * @remarks
   * The effective scope specified by organizational structure. An empty list is returned if no organizational structure is configured.
   */
  customMatchGroup?: ListVulScanTasksResponseBodyTasksCustomMatchGroup[];
  /**
   * @remarks
   * The task expiration time, in seconds-level UNIX timestamp. After this time, endpoints no longer pull and execute this task.
   * 
   * @example
   * 1786291200
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The matching mode of the effective scope. Valid values:
   * - **UserGroupAll**: applies to all users under the current Alibaba Cloud account.
   * - **UserGroupNormal**: applies only to users within specified user groups.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The collection of effective user group IDs. An empty list is returned when MatchMode is UserGroupAll.
   */
  matchTargetIds?: string[];
  /**
   * @remarks
   * The ID of the vulnerability scheduled scan policy that triggered this task. An empty string is returned when TaskType is Instant.
   * 
   * @example
   * vul-scan-scheduled-strategy-8a3f6c2e91b7****
   */
  scheduledStrategyId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - **Running**: the task is in progress and still within the validity period.
   * - **Expired**: the task has expired and exceeded the validity period.
   * - **Canceled**: the task has been canceled.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The execution statistics of this task on user endpoint devices within the effective scope.
   */
  targetDeviceCount?: ListVulScanTasksResponseBodyTasksTargetDeviceCount;
  /**
   * @remarks
   * The task description. An empty string is returned if no description is specified.
   * 
   * @example
   * Execute a vulnerability scanning on R&D department endpoints
   */
  taskDescription?: string;
  /**
   * @remarks
   * The vulnerability scanning task ID.
   * 
   * @example
   * vul-scan-task-4d7b1e9a6c38****
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * R&D department vulnerability scanning
   */
  taskName?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **Instant**: an instant task created by CreateVulScanTask.
   * - **Scheduled**: a scheduled task automatically created by a vulnerability scheduled scan policy on a periodic basis.
   * 
   * @example
   * Instant
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of vulnerabilities detected by this task.
   * 
   * @example
   * 27
   */
  vulCount?: number;
  /**
   * @remarks
   * The list of exempted users. Users in this list are excluded from the scan. An empty list is returned if no exemption is configured.
   */
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      customMatchGroup: 'CustomMatchGroup',
      endTimestamp: 'EndTimestamp',
      matchMode: 'MatchMode',
      matchTargetIds: 'MatchTargetIds',
      scheduledStrategyId: 'ScheduledStrategyId',
      status: 'Status',
      targetDeviceCount: 'TargetDeviceCount',
      taskDescription: 'TaskDescription',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
      vulCount: 'VulCount',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      customMatchGroup: { 'type': 'array', 'itemType': ListVulScanTasksResponseBodyTasksCustomMatchGroup },
      endTimestamp: 'number',
      matchMode: 'string',
      matchTargetIds: { 'type': 'array', 'itemType': 'string' },
      scheduledStrategyId: 'string',
      status: 'string',
      targetDeviceCount: ListVulScanTasksResponseBodyTasksTargetDeviceCount,
      taskDescription: 'string',
      taskId: 'string',
      taskName: 'string',
      taskType: 'string',
      vulCount: 'number',
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customMatchGroup)) {
      $dara.Model.validateArray(this.customMatchGroup);
    }
    if(Array.isArray(this.matchTargetIds)) {
      $dara.Model.validateArray(this.matchTargetIds);
    }
    if(this.targetDeviceCount && typeof (this.targetDeviceCount as any).validate === 'function') {
      (this.targetDeviceCount as any).validate();
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVulScanTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  /**
   * @remarks
   * The list of vulnerability scanning tasks.
   */
  tasks?: ListVulScanTasksResponseBodyTasks[];
  /**
   * @remarks
   * The total number of vulnerability scanning tasks that match the query conditions.
   * 
   * @example
   * 37
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListVulScanTasksResponseBodyTasks },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

