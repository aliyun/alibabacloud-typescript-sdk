// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether cancellation is allowed. Valid values:
   * 
   * - 1: indicates that users are allowed to cancel the task.
   * 
   * - 0: indicates that cancellation is not allowed.
   * 
   * @example
   * 0
   */
  allowCancel?: number;
  /**
   * @remarks
   * Indicates whether time modification is allowed. Valid values:
   * 
   * - 1: indicates that users are allowed to modify the time.
   * 
   * - 0: indicates that users are not allowed to modify the time.
   * 
   * @example
   * 0
   */
  allowChange?: number;
  /**
   * @remarks
   * The event level code. Valid values:
   * 
   * - S1: system maintenance.
   * 
   * - S0: threat fix.
   * 
   * @example
   * S0
   */
  changeLevel?: string;
  /**
   * @remarks
   * The event level (English).
   * 
   * @example
   * System maintenance
   */
  changeLevelEn?: string;
  /**
   * @remarks
   * The event level (Chinese).
   * 
   * @example
   * 系统运维
   */
  changeLevelZh?: string;
  /**
   * @remarks
   * The creation time. Format: YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2020-06-09T22:00:42Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The current zone.
   * 
   * @example
   * cn-beijing-h
   */
  currentAVZ?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The list of node IDs.
   */
  DBNodeIds?: string[];
  /**
   * @remarks
   * The database engine type. Valid values:
   * 
   * - **MySQL**
   * 
   * - **PostgreSQL**
   * 
   * - **Oracle**
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The kernel version number.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The latest deadline for the adjustable range of task execution time. Format: YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2020-06-11T15:59:59Z
   */
  deadline?: string;
  /**
   * @remarks
   * The event impact.
   * 
   * @example
   * TransientDisconnection
   */
  impact?: string;
  /**
   * @remarks
   * The event impact (English).
   * 
   * @example
   * Transient instance disconnection
   */
  impactEn?: string;
  /**
   * @remarks
   * The event impact (Chinese).
   * 
   * @example
   * 集群闪断
   */
  impactZh?: string;
  /**
   * @remarks
   * The cluster alias or cluster comment.
   * 
   * @example
   * test
   */
  insComment?: string;
  /**
   * @remarks
   * The modification time. Format: YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2020-06-09T22:00:42Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The preparation time required between the start time and the switch time. Format: HH:mm:ss.
   * 
   * @example
   * 04:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The execution result information.
   * 
   * @example
   * userCancel
   */
  resultInfo?: string;
  /**
   * @remarks
   * The time when the background task is executed. Format: YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2023-05-19T02:48:17Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - 0: indicates waiting for notification.
   * 
   * - 1: indicates retry notification.
   * 
   * - 2: indicates waiting for user-specified time.
   * 
   * - 3: indicates waiting for processing.
   * 
   * - 4: indicates in progress.
   * 
   * - 5: indicates successfully completed.
   * 
   * - 6: indicates failed.
   * 
   * - 7: indicates canceled.
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The time when the background initiates the switch operation. Format: YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2020-06-09T22:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 107202351
   */
  taskId?: number;
  /**
   * @remarks
   * The task parameters.
   * 
   * @example
   * {
   *       "Action": "UpgradeDBInstance"
   * }
   */
  taskParams?: string;
  /**
   * @remarks
   * The type of the pending event task. Valid values:
   * 
   * - **DatabaseSoftwareUpgrading**: database software upgrade.
   * 
   * - **DatabaseHardwareMaintenance**: hardware maintenance and upgrade.
   * 
   * - **DatabaseStorageUpgrading**: database storage upgrade.
   * 
   * - **DatabaseProxyUpgrading**: proxy minor version upgrade.
   * 
   * - **all**: returns all types of pending events.
   * 
   * @example
   * DatabaseSoftwareUpgrading
   */
  taskType?: string;
  /**
   * @remarks
   * The task reason in English.
   * 
   * @example
   * Minor version update
   */
  taskTypeEn?: string;
  /**
   * @remarks
   * The task reason in Chinese.
   * 
   * @example
   * 小版本升级
   */
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
  /**
   * @remarks
   * The list of O\\&M tasks.
   */
  items?: DescribeActiveOperationTasksResponseBodyItems[];
  /**
   * @remarks
   * The page number. The value must be greater than 0 and cannot exceed the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FAF88508-D5F8-52B1-8824-262601769E31
   */
  requestId?: string;
  /**
   * @remarks
   * The number of task records returned.
   * 
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

