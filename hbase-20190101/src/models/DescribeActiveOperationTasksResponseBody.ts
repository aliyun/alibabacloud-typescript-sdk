// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 1
   */
  allowCancel?: string;
  /**
   * @example
   * 1
   */
  allowChange?: string;
  /**
   * @example
   * all
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
   * 2022-02-15 23:59:59
   */
  createdTime?: string;
  /**
   * @example
   * cn-shanghai-et-a
   */
  currentAVZ?: string;
  /**
   * @example
   * hbaseue
   */
  dbType?: string;
  /**
   * @example
   * 2.0
   */
  dbVersion?: string;
  /**
   * @example
   * 2022-02-19 23:59:59
   */
  deadline?: string;
  /**
   * @example
   * 111111
   */
  id?: number;
  /**
   * @example
   * Transient instance disconnection
   */
  impactEn?: string;
  impactZh?: string;
  /**
   * @example
   * --
   */
  insComment?: string;
  /**
   * @example
   * ld-bp150tns0sjxs****
   */
  insName?: string;
  /**
   * @example
   * 2022-02-19 14:00:00
   */
  modifiedTime?: string;
  /**
   * @example
   * 14:00:00
   */
  prepareInterval?: string;
  /**
   * @example
   * cn-hanghzou
   */
  region?: string;
  /**
   * @example
   * --
   */
  resultInfo?: string;
  /**
   * @example
   * 2022-02-19 10:00:00
   */
  startTime?: string;
  /**
   * @example
   * 5
   */
  status?: number;
  subInsNames?: string[];
  /**
   * @example
   * 2022-02-19 14:00:00
   */
  switchTime?: string;
  /**
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  /**
   * @example
   * rds_apsaradb_upgrade
   */
  taskTypeEn?: string;
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
  items?: DescribeActiveOperationTasksResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * C634E813-42FA-53D2-A7EB-B881C4B264CC
   */
  requestId?: string;
  /**
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

