// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceStatusStatisticResponseBodyStatusCount extends $dara.Model {
  /**
   * @remarks
   * The number of instances that failed to run.
   * 
   * @example
   * 1
   */
  failureCount?: number;
  /**
   * @remarks
   * The number of instances that are not run.
   * 
   * @example
   * 1
   */
  notRunCount?: number;
  /**
   * @remarks
   * The number of instances that are running.
   * 
   * @example
   * 1
   */
  runningCount?: number;
  /**
   * @remarks
   * The number of instances that are successfully run.
   * 
   * @example
   * 1
   */
  successCount?: number;
  /**
   * @remarks
   * The total number of instances returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of instances that are waiting for resources.
   * 
   * @example
   * 1
   */
  waitResCount?: number;
  /**
   * @remarks
   * The number of instances that are waiting to run.
   * 
   * @example
   * 1
   */
  waitTimeCount?: number;
  static names(): { [key: string]: string } {
    return {
      failureCount: 'FailureCount',
      notRunCount: 'NotRunCount',
      runningCount: 'RunningCount',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
      waitResCount: 'WaitResCount',
      waitTimeCount: 'WaitTimeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureCount: 'number',
      notRunCount: 'number',
      runningCount: 'number',
      successCount: 'number',
      totalCount: 'number',
      waitResCount: 'number',
      waitTimeCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStatusStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * The numbers of instances in different states.
   */
  statusCount?: GetInstanceStatusStatisticResponseBodyStatusCount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusCount: 'StatusCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusCount: GetInstanceStatusStatisticResponseBodyStatusCount,
    };
  }

  validate() {
    if(this.statusCount && typeof (this.statusCount as any).validate === 'function') {
      (this.statusCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

