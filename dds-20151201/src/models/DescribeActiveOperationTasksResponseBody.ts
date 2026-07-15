// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task can be canceled.
   * 
   * - **1**: The task can be canceled.
   * 
   * - **0**: The task cannot be canceled.
   * 
   * @example
   * 1
   */
  allowCancel?: string;
  /**
   * @remarks
   * Indicates whether the time can be changed.
   * 
   * - **1**: The time can be changed.
   * 
   * - **0**: The time cannot be changed.
   * 
   * @example
   * 1
   */
  allowChange?: string;
  /**
   * @remarks
   * The code of the event level.
   * 
   * - **S1**: system O\\&M.
   * 
   * - **S0**: threat fixing.
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
   * 系统运维
   */
  changeLevelZh?: string;
  /**
   * @remarks
   * The time when the task was created. The time is in the *yyyy-mm-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-30T14:30:00Z
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
   * The database engine type.
   * 
   * @example
   * mongoDb
   */
  dbType?: string;
  /**
   * @remarks
   * The database engine version number.
   * 
   * @example
   * 5.6
   */
  dbVersion?: string;
  /**
   * @remarks
   * The latest time to which the task execution time can be postponed. The time is in the *yyyy-mm-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-30T23:59:59Z
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
   * 实例闪断
   */
  impactZh?: string;
  /**
   * @remarks
   * The alias or description of the instance.
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
   * dds-bp16aaccfe10****
   */
  insName?: string;
  /**
   * @remarks
   * The time when the task was modified. The time is in the *yyyy-mm-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-30T14:30:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The preparation time required between the start time of the O\\&M task and the switchover time. The time is in the *HH:mm:ss* format.
   * 
   * @example
   * 04:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The ID of the region where the pending event is located.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The information about the execution result.
   * 
   * @example
   * userCancel
   */
  resultInfo?: string;
  /**
   * @remarks
   * The time when the task was executed. The time is in the *yyyy-mm-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-30T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status.
   * 
   * - **3**: pending.
   * 
   * - **4**: running.
   * 
   * - **5**: successful.
   * 
   * - **6**: failed.
   * 
   * - **7**: canceled.
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The list of child instances.
   */
  subInsNames?: string[];
  /**
   * @remarks
   * The time when the switchover was initiated. The time is in the *yyyy-mm-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-30T14:30:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The task parameters.
   * 
   * @example
   * ""
   */
  taskParams?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - **rds_apsaradb_ha**: primary-secondary node switchover.
   * 
   * - **rds_apsaradb_transfer**: instance migration.
   * 
   * - **rds_apsaradb_upgrade**: minor version upgrade.
   * 
   * - **rds_apsaradb_maxscale**: proxy minor version upgrade.
   * 
   * - **all**: all task types.
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  /**
   * @remarks
   * The reason for the task in English.
   * 
   * @example
   * Minor version update
   */
  taskTypeEn?: string;
  /**
   * @remarks
   * The reason for the task in Chinese.
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
   * The list of O\\&M tasks.
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
   * The number of entries per page.
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
   * 111E7B16-0A87-4CBA-B271-F34AD61E****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned task records.
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

