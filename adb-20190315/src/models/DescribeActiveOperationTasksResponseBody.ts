// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the O\\&M task can be canceled. Valid values:
   * 
   * *   0: no.
   * *   1: yes.
   * 
   * @example
   * 1
   */
  allowCancel?: string;
  /**
   * @remarks
   * Indicates whether the execution time of the O\\&M task can be changed. Valid values:
   * 
   * *   0: no.
   * *   1: yes.
   * 
   * @example
   * 0
   */
  allowChange?: string;
  /**
   * @remarks
   * The trigger level of the O\\&M task.
   * 
   * @example
   * all
   */
  changeLevel?: string;
  /**
   * @remarks
   * The trigger level of the O\\&M task.
   * 
   * @example
   * Risk repairment
   */
  changeLevelEn?: string;
  /**
   * @remarks
   * The trigger level of the O\\&M task in Chinese.
   * 
   * @example
   * System maintenance
   */
  changeLevelZh?: string;
  /**
   * @remarks
   * The time when the O\\&M task was created.
   * 
   * @example
   * 2021-06-15T16:00:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-k
   */
  currentAVZ?: string;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * analyticdb
   */
  dbType?: string;
  /**
   * @remarks
   * The database version.
   * 
   * @example
   * 3.0
   */
  dbVersion?: string;
  /**
   * @remarks
   * The end time of the O\\&M task.
   * 
   * @example
   * 2021-06-15T16:00:00Z
   */
  deadline?: string;
  /**
   * @remarks
   * The O\\&M task ID.
   * 
   * @example
   * 2389899
   */
  id?: number;
  /**
   * @remarks
   * The impact of the O\\&M task.
   * 
   * @example
   * TransientDisconnectionAndMinorVersionUpgrade
   */
  impact?: string;
  /**
   * @remarks
   * The impact of the O\\&M task.
   * 
   * @example
   * Transient instance disconnection, minor version upgrade
   */
  impactEn?: string;
  /**
   * @remarks
   * The impact of the O\\&M task in Chinese.
   * 
   * @example
   * Service interruption and minor version update
   */
  impactZh?: string;
  /**
   * @remarks
   * The description of the O\\&M task.
   * 
   * @example
   * xxx
   */
  insComment?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * am-2ze307ym37t762hnl
   */
  insName?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 2021-06-15T16:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The preparation time period for the O\\&M task.
   * 
   * @example
   * 03:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * xxx
   */
  resultInfo?: string;
  /**
   * @remarks
   * The start time of the O\\&M task.
   * 
   * @example
   * 2021-06-15T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the O\\&M task. Valid values:
   * 
   * *   3: pending.
   * *   4: executing.
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The child instance IDs.
   */
  subInsNames?: string[];
  /**
   * @remarks
   * The time when the switchover was performed.
   * 
   * @example
   * 2021-06-15T16:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The parameters of the O\\&M task.
   * 
   * @example
   * {\\"outer_user_params\\":{\\"TargetMinorVersion\\":\\"3.2.2.6\\",\\"detailCode\\":\\"OldKernelVersionUpgrade\\",\\"cancelCode\\":\\"OutOfNewFeatureAndStability\\"},\\"params\\":{},\\"internal_params\\":{\\"instanceInfo\\":[],\\"destHostInfo\\":[]}}
   */
  taskParams?: string;
  /**
   * @remarks
   * The type of the O\\&M task.
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  /**
   * @remarks
   * The type of the O\\&M task.
   * 
   * @example
   * Minor version update
   */
  taskTypeEn?: string;
  /**
   * @remarks
   * The type of the O\\&M task in Chinese.
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
   * The queried O\\&M tasks.
   */
  items?: DescribeActiveOperationTasksResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 12
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 421794A3-72A5-5D27-9E8B-A75A4C503E17
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
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

