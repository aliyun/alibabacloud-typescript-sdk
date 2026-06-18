// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether cancellation is allowed. Valid values:
   * 
   * - **0**: Not allowed.
   * - **1**: Allowed.
   * 
   * @example
   * 0
   */
  allowCancel?: string;
  /**
   * @remarks
   * Indicates whether modification is allowed. Valid values:
   * 
   * - **0**: Not allowed.
   * - **1**: Allowed.
   * 
   * @example
   * 0
   */
  allowChange?: string;
  /**
   * @remarks
   * The change level. This parameter can be ignored.
   * 
   * @example
   * Risk
   */
  changeLevel?: string;
  /**
   * @remarks
   * The change level in English.
   * 
   * @example
   * Risk repairment
   */
  changeLevelEn?: string;
  /**
   * @remarks
   * The change level in Chinese.
   * 
   * @example
   * 风险修复
   */
  changeLevelZh?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-06-15T16:00:00Z
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
   * The database type.
   * 
   * @example
   * polarx
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
   * The deadline.
   * 
   * @example
   * 2021-06-15T16:00:00Z
   */
  deadline?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The impact. This parameter is not returned.
   * 
   * @example
   * --
   */
  impact?: string;
  /**
   * @remarks
   * The impact description in English.
   * 
   * @example
   * Transient instance disconnection
   */
  impactEn?: string;
  /**
   * @remarks
   * The impact description in Chinese.
   * 
   * @example
   * 中断
   */
  impactZh?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * xxx
   */
  insComment?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-dd
   */
  insName?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2021-06-15T16:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The preparation interval.
   * 
   * @example
   * 03:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-shanghai-et15-b01
   */
  region?: string;
  /**
   * @remarks
   * The result information. This parameter can be ignored.
   * 
   * @example
   * --
   */
  resultInfo?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2021-06-15T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - **3**: Pending. 
   * - **4**: Running.
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
   * The switchover time.
   * 
   * @example
   * 2021-06-15T16:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * rds_apsaradb_transfer
   */
  taskType?: string;
  /**
   * @remarks
   * The task type in English. This parameter can be ignored.
   * 
   * @example
   * --
   */
  taskTypeEn?: string;
  /**
   * @remarks
   * The task type in Chinese. This parameter can be ignored.
   * 
   * @example
   * --
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
   * The list of parameters.
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
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 23
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

