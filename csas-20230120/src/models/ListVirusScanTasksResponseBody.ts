// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanTasksResponseBodyTasksCustomMatchGroup extends $dara.Model {
  /**
   * @remarks
   * The collection of organizational structure nodes.
   */
  group?: string[];
  /**
   * @remarks
   * The ID of the identity provider.
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

export class ListVirusScanTasksResponseBodyTasksMatchTargetInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * usergroup-9d4f2a7b3c1e****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * R&D Department
   */
  targetName?: string;
  static names(): { [key: string]: string } {
    return {
      targetId: 'TargetId',
      targetName: 'TargetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetId: 'string',
      targetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirusScanTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created, in the yyyy-MM-dd HH:mm:ss format. The time is in the UTC+8 time zone.
   * 
   * @example
   * 2026-08-21 10:24:31
   */
  createTime?: string;
  /**
   * @remarks
   * The effective scope specified by organizational structure.
   */
  customMatchGroup?: ListVirusScanTasksResponseBodyTasksCustomMatchGroup[];
  /**
   * @remarks
   * The time when the task expires, in seconds-level UNIX timestamp format.
   * 
   * @example
   * 1786377600
   */
  endTime?: number;
  /**
   * @remarks
   * The action to take on high-risk virus files. Valid values:
   * - **Quarantine**: Quarantine quarantined file.
   * - **Notify**: Report an alert only without taking action on quarantined file.
   * 
   * @example
   * Quarantine
   */
  highRiskOperation?: string;
  /**
   * @remarks
   * The action to take on low-risk virus files. Valid values:
   * - **Quarantine**: Quarantine quarantined file.
   * - **Notify**: Report an alert only without taking action on quarantined file.
   * - **None**: Take no action.
   * 
   * @example
   * None
   */
  lowRiskOperation?: string;
  /**
   * @remarks
   * The matching mode for the effective scope. Valid values:
   * - **UserGroupAll**: Applies to all users under the current Alibaba Cloud account.
   * - **UserGroupNormal**: Applies only to users in specified user groups.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The collection of user groups to which the task applies.
   */
  matchTargetInfos?: ListVirusScanTasksResponseBodyTasksMatchTargetInfos[];
  /**
   * @remarks
   * The maximum percentage of endpoint CPU usage allowed during scanning.
   * 
   * @example
   * 30
   */
  maxCpuUsage?: number;
  /**
   * @remarks
   * The action to take on medium-risk virus files. Valid values:
   * - **Quarantine**: Quarantine quarantined file.
   * - **Notify**: Report an alert only without taking action on quarantined file.
   * 
   * @example
   * Notify
   */
  midRiskOperation?: string;
  /**
   * @remarks
   * The scan performance schema pattern. Valid values:
   * - **SecurityFirst**: Security first. The default CPU usage upper limit is 50%.
   * - **Balance**: Balanced. The default CPU usage upper limit is 30%.
   * - **ExperienceFirst**: Experience first. The default CPU usage upper limit is 15%.
   * 
   * @example
   * Balance
   */
  performanceMode?: string;
  /**
   * @remarks
   * The scan path scope. Valid values:
   * - **Quick**: Quick scan. Only scans critical system directories and common risk locations.
   * - **Full**: Full scan.
   * - **Custom**: Custom path scan.
   * 
   * @example
   * Quick
   */
  scanMode?: string;
  /**
   * @remarks
   * The collection of custom scan paths.
   */
  scanPath?: string[];
  /**
   * @remarks
   * The collection of virus types to be handled in this scan.
   */
  scanTargets?: string[];
  /**
   * @remarks
   * The task status. Valid values:
   * - **0**: Not canceled.
   * - **1**: Canceled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * Full scan for R&D department
   */
  taskDescription?: string;
  /**
   * @remarks
   * The ID of the virus scan task.
   * 
   * @example
   * v1:1024772
   */
  taskId?: string;
  /**
   * @remarks
   * The list of exempted users.
   */
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      customMatchGroup: 'CustomMatchGroup',
      endTime: 'EndTime',
      highRiskOperation: 'HighRiskOperation',
      lowRiskOperation: 'LowRiskOperation',
      matchMode: 'MatchMode',
      matchTargetInfos: 'MatchTargetInfos',
      maxCpuUsage: 'MaxCpuUsage',
      midRiskOperation: 'MidRiskOperation',
      performanceMode: 'PerformanceMode',
      scanMode: 'ScanMode',
      scanPath: 'ScanPath',
      scanTargets: 'ScanTargets',
      status: 'Status',
      taskDescription: 'TaskDescription',
      taskId: 'TaskId',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      customMatchGroup: { 'type': 'array', 'itemType': ListVirusScanTasksResponseBodyTasksCustomMatchGroup },
      endTime: 'number',
      highRiskOperation: 'string',
      lowRiskOperation: 'string',
      matchMode: 'string',
      matchTargetInfos: { 'type': 'array', 'itemType': ListVirusScanTasksResponseBodyTasksMatchTargetInfos },
      maxCpuUsage: 'number',
      midRiskOperation: 'string',
      performanceMode: 'string',
      scanMode: 'string',
      scanPath: { 'type': 'array', 'itemType': 'string' },
      scanTargets: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
      taskDescription: 'string',
      taskId: 'string',
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customMatchGroup)) {
      $dara.Model.validateArray(this.customMatchGroup);
    }
    if(Array.isArray(this.matchTargetInfos)) {
      $dara.Model.validateArray(this.matchTargetInfos);
    }
    if(Array.isArray(this.scanPath)) {
      $dara.Model.validateArray(this.scanPath);
    }
    if(Array.isArray(this.scanTargets)) {
      $dara.Model.validateArray(this.scanTargets);
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

export class ListVirusScanTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  /**
   * @remarks
   * The list of virus scan tasks.
   */
  tasks?: ListVirusScanTasksResponseBodyTasks[];
  /**
   * @remarks
   * The total number of virus scan tasks.
   * 
   * @example
   * 100
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
      tasks: { 'type': 'array', 'itemType': ListVirusScanTasksResponseBodyTasks },
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

