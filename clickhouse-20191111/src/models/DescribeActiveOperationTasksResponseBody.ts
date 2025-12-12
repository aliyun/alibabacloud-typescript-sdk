// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @example
   * -1
   */
  allowCancel?: string;
  /**
   * @example
   * -1
   */
  allowChange?: string;
  /**
   * @example
   * S1
   */
  changeLevel?: string;
  /**
   * @example
   * S1
   */
  changeLevelEn?: string;
  changeLevelZh?: string;
  /**
   * @example
   * 2018-05-30T14:30:00Z
   */
  createdTime?: string;
  /**
   * @example
   * cn-beijing-h
   */
  currentAVZ?: string;
  /**
   * @example
   * clickhouse
   */
  dbType?: string;
  /**
   * @example
   * 23.8
   */
  dbVersion?: string;
  /**
   * @example
   * 2018-05-30T23:59:59Z
   */
  deadline?: string;
  /**
   * @example
   * 11
   */
  id?: number;
  /**
   * @example
   * TransientDisconnection
   */
  impact?: string;
  /**
   * @example
   * Transient instance disconnection
   */
  impactEn?: string;
  impactZh?: string;
  /**
   * @example
   * test
   */
  insComment?: string;
  /**
   * @example
   * cc-bp191w*******
   */
  insName?: string;
  /**
   * @example
   * 2023-11-15T06:17:54Z
   */
  modifiedTime?: string;
  /**
   * @example
   * 04:00:00
   */
  prepareInterval?: string;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * userCancel
   */
  resultInfo?: string;
  /**
   * @example
   * 2025-04-22T01:06Z
   */
  startTime?: string;
  /**
   * @example
   * 2
   */
  status?: number;
  subInsNames?: string[];
  /**
   * @example
   * 2018-05-30T14:30:00Z
   */
  switchTime?: string;
  /**
   * @example
   * {
   *       "Action": "UpgradeDBInstance"
   * }
   */
  taskParams?: string;
  /**
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  /**
   * @example
   * Minor version update
   */
  taskTypeEn?: string;
  taskTypeZh?: string;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      allowChange: 'AllowChange',
      changeLevel: 'ChangeLevel',
      changeLevelEn: 'ChangeLevelEn',
      changeLevelZh: 'ChangeLevelZh',
      createdTime: 'CreatedTime',
      currentAVZ: 'CurrentAVZ',
      dbType: 'DbType',
      dbVersion: 'DbVersion',
      deadline: 'Deadline',
      id: 'Id',
      impact: 'Impact',
      impactEn: 'ImpactEn',
      impactZh: 'ImpactZh',
      insComment: 'InsComment',
      insName: 'InsName',
      modifiedTime: 'ModifiedTime',
      prepareInterval: 'PrepareInterval',
      region: 'Region',
      resultInfo: 'ResultInfo',
      startTime: 'StartTime',
      status: 'Status',
      subInsNames: 'SubInsNames',
      switchTime: 'SwitchTime',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
      taskTypeEn: 'TaskTypeEn',
      taskTypeZh: 'TaskTypeZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'string',
      allowChange: 'string',
      changeLevel: 'string',
      changeLevelEn: 'string',
      changeLevelZh: 'string',
      createdTime: 'string',
      currentAVZ: 'string',
      dbType: 'string',
      dbVersion: 'string',
      deadline: 'string',
      id: 'number',
      impact: 'string',
      impactEn: 'string',
      impactZh: 'string',
      insComment: 'string',
      insName: 'string',
      modifiedTime: 'string',
      prepareInterval: 'string',
      region: 'string',
      resultInfo: 'string',
      startTime: 'string',
      status: 'number',
      subInsNames: { 'type': 'array', 'itemType': 'string' },
      switchTime: 'string',
      taskParams: 'string',
      taskType: 'string',
      taskTypeEn: 'string',
      taskTypeZh: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subInsNames)) {
      $dara.Model.validateArray(this.subInsNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTasksResponseBody extends $dara.Model {
  items?: DescribeActiveOperationTasksResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F76
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeActiveOperationTasksResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

