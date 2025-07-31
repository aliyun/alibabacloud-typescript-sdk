// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * N/A
   * 
   * @example
   * ***
   */
  allowCancel?: string;
  /**
   * @remarks
   * Indicates whether the modification operation is allowed.
   * 
   * *   **0**: The modification operation is not allowed.
   * *   **1**: The modification operation is allowed.
   * 
   * @example
   * 0
   */
  allowChange?: string;
  /**
   * @remarks
   * The change level of the O\\&M task.
   * 
   * @example
   * ***
   */
  changeLevel?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * ***
   */
  changeLevelEn?: string;
  /**
   * @remarks
   * The task type in English.
   * 
   * @example
   * ***
   */
  changeLevelZh?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2021-07-14 10:48:43
   */
  createdTime?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * ***
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
   * The version of the database engine.
   * 
   * @example
   * 5.6
   */
  dbVersion?: string;
  /**
   * @remarks
   * The end time of the O\\&M task.
   * 
   * @example
   * 1646014421633
   */
  deadline?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ***
   */
  id?: number;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * ***
   */
  impactEn?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * ***
   */
  impactZh?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * ***
   */
  insComment?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * ***
   */
  insName?: string;
  /**
   * @remarks
   * The time when the task is modified. The time follows the ISO 8601 standard in the *yyyy-mm-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-24T09:48:01Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The required preparation period between the task start time and the switchover time. The time is displayed in the *HH:mm:ss* format.
   * 
   * @example
   * ***
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The region of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The result information. The value of this parameter can be ignored.
   * 
   * @example
   * ***
   */
  resultInfo?: string;
  /**
   * @remarks
   * The start time of the task. The time follows the ISO 8601 standard in the *yyyy-mm-dd* T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-24T06:01:05Z
   */
  startTime?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * ***
   */
  status?: number;
  /**
   * @remarks
   * The subinstances.
   */
  subInsNames?: string[];
  /**
   * @remarks
   * The switchover point in time in which disconnection may occur. The time follows the ISO 8601 standard in the *yyyy-mm-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-24T11:20:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * ***
   */
  taskType?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * ***
   */
  taskTypeEn?: string;
  /**
   * @remarks
   * The task type in Chinese.
   * 
   * @example
   * ***
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
   * The O\\&M tasks.
   */
  items?: DescribeActiveOperationTasksResponseBodyItems[];
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 111E7B16-0A87-4CBA-B271-F34AD61E099F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 727
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

