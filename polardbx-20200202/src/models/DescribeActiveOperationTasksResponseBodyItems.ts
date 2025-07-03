// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 0
   */
  allowCancel?: string;
  /**
   * @example
   * 0
   */
  allowChange?: string;
  /**
   * @example
   * Risk
   */
  changeLevel?: string;
  /**
   * @example
   * Risk repairment
   */
  changeLevelEn?: string;
  changeLevelZh?: string;
  /**
   * @example
   * 2021-06-15T16:00:00Z
   */
  createdTime?: string;
  /**
   * @example
   * cn-shanghai-et-a
   */
  currentAVZ?: string;
  /**
   * @example
   * polarx
   */
  dbType?: string;
  /**
   * @example
   * 2.0
   */
  dbVersion?: string;
  /**
   * @example
   * 2021-06-15T16:00:00Z
   */
  deadline?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * --
   */
  impact?: string;
  /**
   * @example
   * Transient instance disconnection
   */
  impactEn?: string;
  impactZh?: string;
  /**
   * @example
   * xxx
   */
  insComment?: string;
  /**
   * @example
   * pxc-dd
   */
  insName?: string;
  /**
   * @example
   * 2021-06-15T16:00:00Z
   */
  modifiedTime?: string;
  /**
   * @example
   * 03:00:00
   */
  prepareInterval?: string;
  /**
   * @example
   * cn-shanghai-et15-b01
   */
  region?: string;
  /**
   * @example
   * --
   */
  resultInfo?: string;
  /**
   * @example
   * 2021-06-15T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * 3
   */
  status?: number;
  subInsNames?: string[];
  /**
   * @example
   * 2021-06-15T16:00:00Z
   */
  switchTime?: string;
  /**
   * @example
   * rds_apsaradb_transfer
   */
  taskType?: string;
  /**
   * @example
   * --
   */
  taskTypeEn?: string;
  /**
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

