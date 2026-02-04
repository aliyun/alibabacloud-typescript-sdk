// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the event can be canceled. The value 1 indicates that the event can be canceled. The value 0 indicates that the event cannot be canceled.
   * 
   * @example
   * 1
   */
  allowCancel?: string;
  /**
   * @remarks
   * Indicates whether the switching time can be changed. The value 1 indicates that the switching time can be changed. The value 0 indicates that the switching time cannot be changed.
   * 
   * @example
   * 1
   */
  allowChange?: string;
  /**
   * @remarks
   * The code of the task level. The value S1 indicates the system O\\&M level. The value S0 indicates the exception fixing level.
   * 
   * @example
   * S1
   */
  changeLevel?: string;
  /**
   * @remarks
   * The level of the task in English.
   * 
   * @example
   * System maintenance
   */
  changeLevelEn?: string;
  /**
   * @remarks
   * The level of the task in Chinese.
   * 
   * @example
   * 系统运维
   */
  changeLevelZh?: string;
  /**
   * @remarks
   * The time when the O\\&M task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
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
   * The database type of the instance. The return value is **Redis**.
   * 
   * @example
   * redis
   */
  dbType?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 5.0
   */
  dbVersion?: string;
  /**
   * @remarks
   * The deadline before which the time to preform the O&M task can be modified. The time in UTC is displayed in the *yyyy-MM-dd*T*HH:mm:ss*Z format.
   * 
   * @example
   * 2018-05-30T23:59:59Z
   */
  deadline?: string;
  /**
   * @remarks
   * The ID of the O\\&M event.
   * 
   * @example
   * 11111
   */
  id?: number;
  /**
   * @remarks
   * The impact of the task.
   * 
   * @example
   * TransientDisconnection
   */
  impact?: string;
  /**
   * @remarks
   * The impact of the task in English.
   * 
   * @example
   * Transient instance disconnection
   */
  impactEn?: string;
  /**
   * @remarks
   * The impact of the task in Chinese.
   * 
   * @example
   * 实例闪断
   */
  impactZh?: string;
  /**
   * @remarks
   * The alias and description of the instance.
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
   * r-bp1lgal1sdvxrz****
   */
  insName?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The required preparation period between the task start time and the switchover time. The time is displayed in the *HH:mm:ss* format.
   * 
   * @example
   * 04:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hanghzou
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
   * The time when the event is executed in the backend. The time must be in UTC. Format: YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2018-05-30T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the O\\&M event. Valid values:
   * 
   * *   **3**: filters pending events.
   * *   **4**: filters in-progress events.
   * *   **5**: filters successful events.
   * *   **6**: filters failed events.
   * *   **7**: filters canceled events.
   * 
   * @example
   * 5
   */
  status?: number;
  /**
   * @remarks
   * The list of sub-events.
   */
  subInsNames?: string[];
  /**
   * @remarks
   * The time when the system performs the switchover operation. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The O\\&M event parameters.
   * 
   * @example
   * {
   *       "Action": "UpgradeDBInstance"
   * }
   */
  taskParams?: string;
  /**
   * @remarks
   * The type of the O\\&M event.
   * 
   * @example
   * rds_apsaradb_transfer
   */
  taskType?: string;
  /**
   * @remarks
   * The cause of the O\\&M event.
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
   * The list of O\\&M events.
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
   * The number of entries returned per page. Default 25.
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
   * 2D9F3768-EDA9-4811-943E-42C8006E****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of O\\&M events returned.
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

