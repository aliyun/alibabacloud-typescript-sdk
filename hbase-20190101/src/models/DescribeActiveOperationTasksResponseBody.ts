// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task can be canceled. Valid values:
   * 
   * - **0**: The task cannot be canceled.
   * - **1**: The task can be canceled.
   * 
   * @example
   * 1
   */
  allowCancel?: string;
  /**
   * @remarks
   * Indicates whether the time can be modified. Valid values:
   * 
   * - **0**: The time cannot be modified.
   * - **1**: The time can be modified.
   * 
   * @example
   * 1
   */
  allowChange?: string;
  /**
   * @remarks
   * The change level.
   * 
   * @example
   * all
   */
  changeLevel?: string;
  /**
   * @remarks
   * The change level name in English.
   * 
   * @example
   * Risk repairment
   */
  changeLevelEn?: string;
  /**
   * @remarks
   * The change level name in Chinese.
   * 
   * @example
   * 风险修复
   */
  changeLevelZh?: string;
  /**
   * @remarks
   * The time when the O&M task was created.
   * 
   * @example
   * 2022-02-15 23:59:59
   */
  createdTime?: string;
  /**
   * @remarks
   * The current availability zone.
   * 
   * @example
   * cn-shanghai-et-a
   */
  currentAVZ?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * - **hbaseue**: ApsaraDB for HBase Enhanced Edition.
   * - **hbase**: ApsaraDB for HBase Standard Edition.
   * - **bds**: BDS data synchronization service.
   * 
   * @example
   * hbaseue
   */
  dbType?: string;
  /**
   * @remarks
   * The database version.
   * 
   * @example
   * 2.0
   */
  dbVersion?: string;
  /**
   * @remarks
   * The latest time to which the O&M task execution time can be adjusted.
   * 
   * @example
   * 2022-02-19 23:59:59
   */
  deadline?: string;
  /**
   * @remarks
   * The O&M task ID.
   * 
   * @example
   * 111111
   */
  id?: number;
  /**
   * @remarks
   * The business impact in English.
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
   * 中断
   */
  impactZh?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * --
   */
  insComment?: string;
  /**
   * @remarks
   * The HBase instance ID.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  insName?: string;
  /**
   * @remarks
   * The time when the O&M task was modified.
   * 
   * @example
   * 2022-02-19 14:00:00
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The preparation time required between the start time of the O&M task and the switchover time.
   * 
   * @example
   * 14:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hanghzou
   */
  region?: string;
  /**
   * @remarks
   * The description of the execution result.
   * 
   * @example
   * --
   */
  resultInfo?: string;
  /**
   * @remarks
   * The time when the O&M task starts to be executed.
   * 
   * @example
   * 2022-02-19 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The task running status. Valid values:
   * 
   * - **2**: Waiting for the user to specify a time.
   * - **3**: Waiting for processing.
   * - **4**: Processing.
   * - **5**: Succeeded.
   * - **6**: Failed.
   * - **7**: Canceled.
   * 
   * @example
   * 5
   */
  status?: number;
  subInsNames?: string[];
  /**
   * @remarks
   * The time when the system initiates the switchover.
   * 
   * @example
   * 2022-02-19 14:00:00
   */
  switchTime?: string;
  /**
   * @remarks
   * The task type. The value **rds_apsaradb_upgrade** indicates a minor version upgrade.
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
   * rds_apsaradb_upgrade
   */
  taskTypeEn?: string;
  /**
   * @remarks
   * The task type in Chinese.
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
      dbType: 'DbType',
      dbVersion: 'DbVersion',
      deadline: 'Deadline',
      id: 'Id',
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
   * The maximum number of records per page.
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
   * C634E813-42FA-53D2-A7EB-B881C4B264CC
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

