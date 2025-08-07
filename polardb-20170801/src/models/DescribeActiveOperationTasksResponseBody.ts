// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 0
   */
  allowCancel?: number;
  /**
   * @example
   * 0
   */
  allowChange?: number;
  /**
   * @example
   * S0
   */
  changeLevel?: string;
  /**
   * @example
   * System maintenance
   */
  changeLevelEn?: string;
  changeLevelZh?: string;
  /**
   * @example
   * 2020-06-09T22:00:42Z
   */
  createdTime?: string;
  /**
   * @example
   * cn-beijing-h
   */
  currentAVZ?: string;
  /**
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  DBNodeIds?: string[];
  /**
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @example
   * 2020-06-11T15:59:59Z
   */
  deadline?: string;
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
   * 2020-06-09T22:00:42Z
   */
  modifiedTime?: string;
  /**
   * @example
   * 04:00:00
   */
  prepareInterval?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * userCancel
   */
  resultInfo?: string;
  /**
   * @example
   * 2023-05-19T02:48:17Z
   */
  startTime?: string;
  /**
   * @example
   * 3
   */
  status?: number;
  /**
   * @example
   * 2020-06-09T22:00:00Z
   */
  switchTime?: string;
  /**
   * @example
   * 107202351
   */
  taskId?: number;
  /**
   * @example
   * {
   *       "Action": "UpgradeDBInstance"
   * }
   */
  taskParams?: string;
  /**
   * @example
   * DatabaseSoftwareUpgrading
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
      DBClusterId: 'DBClusterId',
      DBNodeIds: 'DBNodeIds',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      deadline: 'Deadline',
      impact: 'Impact',
      impactEn: 'ImpactEn',
      impactZh: 'ImpactZh',
      insComment: 'InsComment',
      modifiedTime: 'ModifiedTime',
      prepareInterval: 'PrepareInterval',
      region: 'Region',
      resultInfo: 'ResultInfo',
      startTime: 'StartTime',
      status: 'Status',
      switchTime: 'SwitchTime',
      taskId: 'TaskId',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
      taskTypeEn: 'TaskTypeEn',
      taskTypeZh: 'TaskTypeZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'number',
      allowChange: 'number',
      changeLevel: 'string',
      changeLevelEn: 'string',
      changeLevelZh: 'string',
      createdTime: 'string',
      currentAVZ: 'string',
      DBClusterId: 'string',
      DBNodeIds: { 'type': 'array', 'itemType': 'string' },
      DBType: 'string',
      DBVersion: 'string',
      deadline: 'string',
      impact: 'string',
      impactEn: 'string',
      impactZh: 'string',
      insComment: 'string',
      modifiedTime: 'string',
      prepareInterval: 'string',
      region: 'string',
      resultInfo: 'string',
      startTime: 'string',
      status: 'number',
      switchTime: 'string',
      taskId: 'number',
      taskParams: 'string',
      taskType: 'string',
      taskTypeEn: 'string',
      taskTypeZh: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeIds)) {
      $dara.Model.validateArray(this.DBNodeIds);
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
   * FAF88508-D5F8-52B1-8824-262601769E31
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

