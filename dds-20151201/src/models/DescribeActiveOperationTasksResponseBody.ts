// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the task can be canceled. Valid values:
   * - **1**: The task can be canceled.
   * - **0**: The task cannot be canceled.
   * 
   * @example
   * 1
   */
  allowCancel?: string;
  /**
   * @remarks
   * Specifies whether the execution time can be modified. Valid values:
   * - **1**: The execution time can be modified.
   * - **0**: The execution time cannot be modified.
   * 
   * @example
   * 1
   */
  allowChange?: string;
  /**
   * @remarks
   * The event level code. Valid values:
   * - **S1**: system O&M
   * - **S0**: risk remediation
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
   * The creation time. The time follows the <i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z format. The time is displayed in UTC.
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
   * The type of the database engine.
   * 
   * @example
   * mongoDb
   */
  dbType?: string;
  /**
   * @remarks
   * The database DPI engine version number.
   * 
   * @example
   * 5.6
   */
  dbVersion?: string;
  /**
   * @remarks
   * The deadline for adjusting the task execution time. The time follows the <i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z format. The time is displayed in UTC.
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
   * The event impact in English.
   * 
   * @example
   * Transient instance disconnection
   */
  impactEn?: string;
  /**
   * @remarks
   * The event impact in Chinese.
   * 
   * @example
   * Transient instance disconnection
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
   * The name of the instance.
   * 
   * @example
   * dds-bp16aaccfe10****
   */
  insName?: string;
  /**
   * @remarks
   * The modification time. The time follows the <i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-30T14:30:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The preparation time required between the start time of the O&M task and the switchover time. The time follows the <i>HH:mm:ss</i> format.
   * 
   * @example
   * 04:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The ID of the region to which the pending event belongs.
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
   * The time when the backend executes the task. The time follows the <i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-30T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **3**: pending tasks
   * - **4**: in-progress tasks
   * - **5**: successfully completed tasks
   * - **6**: failed tasks
   * - **7**: canceled tasks
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The child instances.
   */
  subInsNames?: string[];
  /**
   * @remarks
   * The time when the backend initiates the switchover. The time follows the <i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z format. The time is displayed in UTC.
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
   * - **rds_apsaradb_ha**: primary/secondary node switch
   * - **rds_apsaradb_transfer**: instance migration
   * - **rds_apsaradb_upgrade**: minor version upgrade
   * - **rds_apsaradb_maxscale**: proxy minor version upgrade
   * - **all**: all task types
   * 
   * @example
   * rds_apsaradb_upgrade
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
   * Minor version upgrade
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
   * The O&M tasks.
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

