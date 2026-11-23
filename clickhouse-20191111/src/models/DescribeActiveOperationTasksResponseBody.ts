// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task can be canceled. Valid values:
   * - **-1**: all
   * - **0**: not allowed
   * - **1**: allowed
   * 
   * @example
   * -1
   */
  allowCancel?: string;
  /**
   * @remarks
   * Indicates whether the execution time can be modified. Valid values:
   * - **-1**: all
   * - **0**: not allowed
   * - **1**: allowed
   * 
   * @example
   * -1
   */
  allowChange?: string;
  /**
   * @remarks
   * The event level code. Valid values:
   * - **S1**: system O&M.
   * - **S0**: risk fix.
   * 
   * @example
   * S1
   */
  changeLevel?: string;
  /**
   * @remarks
   * The English name of the change level.
   * 
   * @example
   * S1
   */
  changeLevelEn?: string;
  /**
   * @remarks
   * The event level in Chinese.
   * 
   * @example
   * System O&M
   */
  changeLevelZh?: string;
  /**
   * @remarks
   * The creation time in UTC. The format is YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2018-05-30T14:30:00Z
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
   * The database type.
   * 
   * @example
   * clickhouse
   */
  dbType?: string;
  /**
   * @remarks
   * The Milvus version of the cluster kernel.
   * 
   * @example
   * 23.8
   */
  dbVersion?: string;
  /**
   * @remarks
   * The deadline for adjusting the task execution time in UTC. The format is YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2018-05-30T23:59:59Z
   */
  deadline?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 11
   */
  id?: number;
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
   * The event impact in English.
   * 
   * @example
   * Transient instance disconnection
   */
  impactEn?: string;
  /**
   * @remarks
   * The business impact in Chinese.
   * 
   * @example
   * Transient instance disconnection
   */
  impactZh?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * test
   */
  insComment?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cc-bp191w*******
   */
  insName?: string;
  /**
   * @remarks
   * The modification time in UTC. The format is YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2023-11-15T06:17:54Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The preparation time required between the start time and the switchover time. The format is HH:mm:ss.
   * 
   * @example
   * 04:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The description of the execution result.
   * 
   * @example
   * userCancel
   */
  resultInfo?: string;
  /**
   * @remarks
   * The time when the backend executes the task in UTC. The format is YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2025-04-22T01:06Z
   */
  startTime?: string;
  /**
   * @remarks
   * The running status of the task. Valid values:
   * - **2**: waiting for the user to specify a time.
   * - **3**: pending.
   * - **4**: in progress.
   * - **5**: successful.
   * - **6**: failed.
   * - **7**: canceled.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The instance ID of the sub-instances.
   */
  subInsNames?: string[];
  /**
   * @remarks
   * The time when the backend initiates the switchover operation in UTC. The format is YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The O&M event parameters.
   * 
   * @example
   * {
   *       "Action": "UpgradeDBInstance"
   * }
   */
  taskParams?: string;
  /**
   * @remarks
   * The O&M event task type.
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  /**
   * @remarks
   * The task type in English.
   * 
   * @example
   * Minor version update
   */
  taskTypeEn?: string;
  /**
   * @remarks
   * The task cause in Chinese.
   * 
   * @example
   * Minor version update
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
  /**
   * @remarks
   * The list of O&M tasks.
   */
  items?: DescribeActiveOperationTasksResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **30** (default)
   * - **50**
   * - **100**
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
   * F5178C10-1407-4987-9133-DE4DC9119F76
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
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

