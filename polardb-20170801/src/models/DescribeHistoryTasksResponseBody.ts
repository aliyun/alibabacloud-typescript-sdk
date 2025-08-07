// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksResponseBodyItems extends $dara.Model {
  /**
   * @example
   * {}
   */
  actionInfo?: string;
  /**
   * @example
   * User
   */
  callerSource?: string;
  /**
   * @example
   * 1816563541899***
   */
  callerUid?: string;
  /**
   * @example
   * finish_task
   */
  currentStepName?: string;
  /**
   * @example
   * polardb_mysql
   */
  dbType?: string;
  /**
   * @example
   * 2025-03-03T07:30:57Z
   */
  endTime?: string;
  /**
   * @example
   * pc-2zed3m89cw***
   */
  instanceId?: string;
  /**
   * @example
   * pc-2zed3m89cw***
   */
  instanceName?: string;
  /**
   * @example
   * Instance
   */
  instanceType?: string;
  /**
   * @example
   * polardb
   */
  product?: string;
  /**
   * @example
   * 100.0
   */
  progress?: number;
  /**
   * @example
   * ""
   */
  reasonCode?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * 0
   */
  remainTime?: number;
  /**
   * @example
   * 2025-03-03T07:25:16Z
   */
  startTime?: string;
  /**
   * @example
   * Succeed
   */
  status?: string;
  /**
   * @example
   * {\\"steps\\":[{\\"step_name\\":\\"init_task\\"},{\\"step_name\\":\\"exec_task\\"},{\\"step_name\\":\\"finish_task\\"}]}
   */
  taskDetail?: string;
  /**
   * @example
   * t-0mqt8qhnw04ipz0***
   */
  taskId?: string;
  /**
   * @example
   * ChangeVariable
   */
  taskType?: string;
  /**
   * @example
   * 1816563541899***
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      actionInfo: 'ActionInfo',
      callerSource: 'CallerSource',
      callerUid: 'CallerUid',
      currentStepName: 'CurrentStepName',
      dbType: 'DbType',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      product: 'Product',
      progress: 'Progress',
      reasonCode: 'ReasonCode',
      regionId: 'RegionId',
      remainTime: 'RemainTime',
      startTime: 'StartTime',
      status: 'Status',
      taskDetail: 'TaskDetail',
      taskId: 'TaskId',
      taskType: 'TaskType',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionInfo: 'string',
      callerSource: 'string',
      callerUid: 'string',
      currentStepName: 'string',
      dbType: 'string',
      endTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      product: 'string',
      progress: 'number',
      reasonCode: 'string',
      regionId: 'string',
      remainTime: 'number',
      startTime: 'string',
      status: 'string',
      taskDetail: 'string',
      taskId: 'string',
      taskType: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksResponseBody extends $dara.Model {
  items?: DescribeHistoryTasksResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * F90D7C14-2D1C-5B88-9CD1-23AB2CF89***
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeHistoryTasksResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
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

