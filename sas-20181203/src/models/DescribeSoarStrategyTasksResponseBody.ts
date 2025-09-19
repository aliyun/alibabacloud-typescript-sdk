// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarStrategyTasksResponseBodySoarStrategyTasks extends $dara.Model {
  /**
   * @remarks
   * The number of execution failures.
   * 
   * @example
   * 20
   */
  failedNum?: number;
  /**
   * @remarks
   * The timestamp when the policy task was created. Unit: milliseconds.
   * 
   * @example
   * 1708481235000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The timestamp when the policy task was complete. Unit: milliseconds.
   * 
   * @example
   * 1586739841000
   */
  gmtFinish?: number;
  /**
   * @remarks
   * The timestamp when the policy task was modified. Unit: milliseconds.
   * 
   * @example
   * 1669869436000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the policy task.
   * 
   * @example
   * 5374
   */
  id?: number;
  /**
   * @remarks
   * The name of the policy task.
   * 
   * @example
   * strategy_name01
   */
  name?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * *   runmode_TRIGGER_BY_USER: manually executed
   * 
   * @example
   * runmode_TRIGGER_BY_USER
   */
  runMode?: string;
  /**
   * @remarks
   * The status of the policy task. Valid values:
   * 
   * *   \\-1: waiting
   * *   0: starting
   * *   1: running
   * *   2: finished
   * *   3: schedule
   * *   4: pause
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 8000
   */
  strategyId?: number;
  /**
   * @remarks
   * The number of successful executions.
   * 
   * @example
   * 20
   */
  successNum?: number;
  /**
   * @remarks
   * The total number of executions.
   * 
   * @example
   * 20
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      failedNum: 'FailedNum',
      gmtCreate: 'GmtCreate',
      gmtFinish: 'GmtFinish',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      runMode: 'RunMode',
      status: 'Status',
      strategyId: 'StrategyId',
      successNum: 'SuccessNum',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedNum: 'number',
      gmtCreate: 'number',
      gmtFinish: 'number',
      gmtModified: 'number',
      id: 'number',
      name: 'string',
      runMode: 'string',
      status: 'string',
      strategyId: 'number',
      successNum: 'number',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarStrategyTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
   */
  requestId?: string;
  /**
   * @remarks
   * The policy tasks.
   */
  soarStrategyTasks?: DescribeSoarStrategyTasksResponseBodySoarStrategyTasks[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      soarStrategyTasks: 'SoarStrategyTasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      soarStrategyTasks: { 'type': 'array', 'itemType': DescribeSoarStrategyTasksResponseBodySoarStrategyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.soarStrategyTasks)) {
      $dara.Model.validateArray(this.soarStrategyTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

