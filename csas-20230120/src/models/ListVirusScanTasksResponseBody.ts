// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanTasksResponseBodyTasksCustomMatchGroup extends $dara.Model {
  group?: string[];
  /**
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
   * @example
   * usergroup-9d4f2a7b3c1e****
   */
  targetId?: string;
  /**
   * @example
   * 研发部门
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
   * @example
   * 2026-08-21 10:24:31
   */
  createTime?: string;
  customMatchGroup?: ListVirusScanTasksResponseBodyTasksCustomMatchGroup[];
  /**
   * @example
   * 1786377600
   */
  endTime?: number;
  /**
   * @example
   * Quarantine
   */
  highRiskOperation?: string;
  /**
   * @example
   * None
   */
  lowRiskOperation?: string;
  /**
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  matchTargetInfos?: ListVirusScanTasksResponseBodyTasksMatchTargetInfos[];
  /**
   * @example
   * 30
   */
  maxCpuUsage?: number;
  /**
   * @example
   * Notify
   */
  midRiskOperation?: string;
  /**
   * @example
   * Balance
   */
  performanceMode?: string;
  /**
   * @example
   * Quick
   */
  scanMode?: string;
  scanPath?: string[];
  scanTargets?: string[];
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 研发部门全盘扫描
   */
  taskDescription?: string;
  /**
   * @example
   * v1:1024772
   */
  taskId?: string;
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
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  tasks?: ListVirusScanTasksResponseBodyTasks[];
  /**
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

