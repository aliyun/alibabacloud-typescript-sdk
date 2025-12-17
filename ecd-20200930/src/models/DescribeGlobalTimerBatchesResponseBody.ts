// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalTimerBatchesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * ccg-0cvfvf6u1enx1****
   */
  batchId?: string;
  /**
   * @example
   * 2023-08-03T08:27:29Z
   */
  createTime?: string;
  /**
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @example
   * 0
   */
  runningCount?: number;
  /**
   * @example
   * 0
   */
  skippedCount?: number;
  /**
   * @example
   * 0
   */
  succeedCount?: number;
  /**
   * @example
   * TimerBoot
   */
  timerType?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      createTime: 'CreateTime',
      failedCount: 'FailedCount',
      runningCount: 'RunningCount',
      skippedCount: 'SkippedCount',
      succeedCount: 'SucceedCount',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      createTime: 'string',
      failedCount: 'number',
      runningCount: 'number',
      skippedCount: 'number',
      succeedCount: 'number',
      timerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalTimerBatchesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E54EB497-D7B7-5F04-B744-D8DFA7B******
   */
  requestId?: string;
  results?: DescribeGlobalTimerBatchesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      nextToken: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DescribeGlobalTimerBatchesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

