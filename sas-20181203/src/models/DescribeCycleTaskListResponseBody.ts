// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCycleTaskListResponseBodyCycleScheduleResponseList extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 2cdbdeba8dd70586d5814d4cbf21****
   */
  configId?: string;
  /**
   * @remarks
   * Indicates whether the configuration for the task interval was enabled. Valid values:
   * 
   * *   **1**: enabled.
   * *   **0**: disabled.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The time when the task first started.
   * 
   * @example
   * 1667491200000
   */
  firstDateStr?: number;
  /**
   * @remarks
   * The interval between which two consecutive tasks are run.
   * 
   * @example
   * 3
   */
  intervalPeriod?: number;
  /**
   * @remarks
   * The ID of the last task.
   * 
   * @example
   * 38730bb078f4a1461d4ed283994c****
   */
  lastTaskId?: string;
  /**
   * @remarks
   * The time when the next task starts. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1671184531000
   */
  nextStartTimeStr?: number;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {"userAgreement":"yes","lang":"zh"}
   */
  param?: string;
  /**
   * @remarks
   * The unit of the scan interval. Valid values:
   * 
   * *   **day**
   * *   **hour**
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The end time of the task. The time must be a time frame.
   * 
   * @example
   * 7
   */
  targetEndTime?: number;
  /**
   * @remarks
   * The start time of the task. The start time must be a time frame.
   * 
   * @example
   * 0
   */
  targetStartTime?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * IMAGE_SCAN
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * IMAGE_SCAN
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      enable: 'Enable',
      firstDateStr: 'FirstDateStr',
      intervalPeriod: 'IntervalPeriod',
      lastTaskId: 'LastTaskId',
      nextStartTimeStr: 'NextStartTimeStr',
      param: 'Param',
      periodUnit: 'PeriodUnit',
      targetEndTime: 'TargetEndTime',
      targetStartTime: 'TargetStartTime',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      enable: 'number',
      firstDateStr: 'number',
      intervalPeriod: 'number',
      lastTaskId: 'string',
      nextStartTimeStr: 'number',
      param: 'string',
      periodUnit: 'string',
      targetEndTime: 'number',
      targetStartTime: 'number',
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCycleTaskListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 9
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 149
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCycleTaskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of periodic scan tasks.
   */
  cycleScheduleResponseList?: DescribeCycleTaskListResponseBodyCycleScheduleResponseList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeCycleTaskListResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB393****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cycleScheduleResponseList: 'CycleScheduleResponseList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleScheduleResponseList: { 'type': 'array', 'itemType': DescribeCycleTaskListResponseBodyCycleScheduleResponseList },
      pageInfo: DescribeCycleTaskListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cycleScheduleResponseList)) {
      $dara.Model.validateArray(this.cycleScheduleResponseList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

