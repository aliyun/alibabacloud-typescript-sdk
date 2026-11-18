// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the event can be canceled. A value of 1 indicates that users are allowed to cancel the event. A value of 0 indicates that users are not allowed to cancel the event.
   * 
   * @example
   * 1
   */
  allowCancel?: string;
  /**
   * @remarks
   * Indicates whether the execution time can be modified. A value of 1 indicates that users are allowed to modify the execution time. A value of 0 indicates that users are not allowed to modify the execution time.
   * 
   * @example
   * 1
   */
  allowChange?: string;
  /**
   * @remarks
   * The code of the event level. S1 indicates system O&M, and S0 indicates exception repair.
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
   * The time when the event was created. The time is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
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
   * The database engine. Valid value: **redis**.
   * 
   * @example
   * redis
   */
  dbType?: string;
  /**
   * @remarks
   * The Milvus version.
   * 
   * @example
   * 5.0
   */
  dbVersion?: string;
  /**
   * @remarks
   * The latest time within the adjustable range for the task execution time. The time is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2018-05-30T23:59:59Z
   */
  deadline?: string;
  /**
   * @remarks
   * The ID of the O&M event.
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
   * Transient disconnection of the instance
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
   * The instance ID.
   * 
   * @example
   * r-bp1lgal1sdvxrz****
   */
  insName?: string;
  /**
   * @remarks
   * The time when the event was modified. The time is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
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
   * The region ID.
   * 
   * @example
   * cn-hanghzou
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
   * The time when the backend executes the event. The time is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2018-05-30T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the O&M event. Valid values:
   * - **3**: Pending events.
   * - **4**: Processing events.
   * - **5**: Successfully completed events.
   * - **6**: Failed events.
   * - **7**: Canceled events.
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
   * The time when the backend initiates the switchover operation. The time is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The parameters of the O&M event.
   * 
   * @example
   * {
   *       "Action": "UpgradeDBInstance"
   * }
   */
  taskParams?: string;
  /**
   * @remarks
   * The type of the O&M event.
   * 
   * @example
   * rds_apsaradb_transfer
   */
  taskType?: string;
  /**
   * @remarks
   * The cause of the O&M event in English.
   * 
   * @example
   * Minor version update
   */
  taskTypeEn?: string;
  /**
   * @remarks
   * The cause of the task in Chinese.
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
   * The list of O&M events.
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
   * The number of entries per page. Default value: 25.
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
   * The total number of returned O&M event records.
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

