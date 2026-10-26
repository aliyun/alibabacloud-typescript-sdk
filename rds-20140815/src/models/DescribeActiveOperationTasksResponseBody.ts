// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task can be canceled. A value of 1 indicates that the task can be canceled. A value of 0 indicates that the task cannot be canceled.
   * 
   * @example
   * 1
   */
  allowCancel?: string;
  /**
   * @remarks
   * Indicates whether the execution time can be modified. A value of 1 indicates that the execution time can be modified. A value of 0 indicates that the execution time cannot be modified.
   * 
   * @example
   * 1
   */
  allowChange?: string;
  /**
   * @remarks
   * The event level code. Valid values: S1 (system O&M) and S0 (exception recovery).
   * 
   * @example
   * S1
   */
  changeLevel?: string;
  /**
   * @remarks
   * The event level in English.
   * 
   * @example
   * System maintenance
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
   * The time when the task was created. The time is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
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
   * The database engine, such as mysql, pgsql, or mssql.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The kernel version.
   * 
   * @example
   * 5.7
   */
  dbVersion?: string;
  /**
   * @remarks
   * The latest time to which the task execution time can be adjusted. The time is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
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
   * 11111
   */
  id?: number;
  /**
   * @remarks
   * The impact of the event.
   * 
   * @example
   * TransientDisconnection
   */
  impact?: string;
  /**
   * @remarks
   * The impact of the event in English.
   * 
   * @example
   * Transient instance disconnection
   */
  impactEn?: string;
  /**
   * @remarks
   * The impact of the event in Chinese.
   * 
   * @example
   * Instance interruption
   */
  impactZh?: string;
  /**
   * @remarks
   * The instance alias or description.
   * 
   * @example
   * test
   */
  insComment?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rm-wz96h8jujh512****
   */
  insName?: string;
  /**
   * @remarks
   * The time when the task was modified. The time is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The preparation time required between the start time and the switchover time. The time is in the HH:mm:ss format.
   * 
   * @example
   * 04:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The region ID of the pending event.
   * 
   * @example
   * cn-beijing
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
   * The time when the backend executes the task. The time is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2018-05-30T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * * **3**: pending tasks.
   * * **4**: tasks in progress.
   * * **5**: successfully completed tasks.
   * * **6**: failed tasks.
   * * **7**: canceled tasks.
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The instance shards.
   */
  subInsNames?: string[];
  /**
   * @remarks
   * The time when the backend initiates the switchover. The time is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  switchTime?: string;
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
   * The task type. Valid values:
   * 
   * * **rds_apsaradb_ha**: primary and secondary node switch.
   * * **rds_apsaradb_transfer**: instance migration.
   * * **rds_apsaradb_upgrade**: minor engine version update.
   * * **rds_apsaradb_maxscale**: proxy minor version upgrade.
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  /**
   * @remarks
   * The task cause in English.
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
   * Minor engine version update
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
   * The page number, which must be greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 25. Maximum value: 100.
   * 
   * @example
   * 25
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4D4BE8A-DD46-440A-BFCD-EE31DA81****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned task records.
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

