// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalTimerRecordsResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The type of action that was performed.
   * 
   * @example
   * REBOOT
   */
  actionType?: string;
  /**
   * @remarks
   * The batch ID of the scheduled task execution.
   * 
   * @example
   * ccg-0cvfvf6u1enx1****
   */
  batchId?: string;
  /**
   * @remarks
   * The record information during the execution of the scheduled task.
   * 
   * @example
   * {}
   */
  context?: string;
  /**
   * @remarks
   * The time when the record was created.
   * 
   * @example
   * 2023-08-03T08:27:29Z
   */
  createTime?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-0c951fy9arnk9****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud computer name.
   * 
   * @example
   * DesktopName
   */
  desktopName?: string;
  /**
   * @remarks
   * The display result name.
   * 
   * @example
   * SKIPPED
   */
  displayResultName?: string;
  /**
   * @remarks
   * The time when the task ended.
   * 
   * @example
   * 2025-01-21T02:00:45Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * p-xxx
   */
  resourceParentId?: string;
  /**
   * @remarks
   * Specifies whether the task can be retried.
   * 
   * @example
   * true
   */
  retryable?: boolean;
  /**
   * @remarks
   * The ID of the scheduled task group.
   * 
   * @example
   * ccg-xxxx
   */
  timerGroupId?: string;
  /**
   * @remarks
   * The timer record ID.
   * 
   * @example
   * t-xxx
   */
  timerRecordId?: string;
  /**
   * @remarks
   * The execution result of the scheduled task.
   * 
   * @example
   * RUNNING
   */
  timerResult?: string;
  /**
   * @remarks
   * The type of the scheduled task.
   * 
   * @example
   * TimerBoot
   */
  timerType?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      batchId: 'BatchId',
      context: 'Context',
      createTime: 'CreateTime',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      displayResultName: 'DisplayResultName',
      finishTime: 'FinishTime',
      regionId: 'RegionId',
      resourceParentId: 'ResourceParentId',
      retryable: 'Retryable',
      timerGroupId: 'TimerGroupId',
      timerRecordId: 'TimerRecordId',
      timerResult: 'TimerResult',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      batchId: 'string',
      context: 'string',
      createTime: 'string',
      desktopId: 'string',
      desktopName: 'string',
      displayResultName: 'string',
      finishTime: 'string',
      regionId: 'string',
      resourceParentId: 'string',
      retryable: 'boolean',
      timerGroupId: 'string',
      timerRecordId: 'string',
      timerResult: 'string',
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

export class DescribeGlobalTimerRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The token for the next query. If NextToken is empty, no more results exist.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6mnFXZiT7NdvGNgkInJ****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 63740E03-1B4B-5A18-AC27-2745A4F2****
   */
  requestId?: string;
  /**
   * @remarks
   * The result information.
   */
  results?: DescribeGlobalTimerRecordsResponseBodyResults[];
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
      results: { 'type': 'array', 'itemType': DescribeGlobalTimerRecordsResponseBodyResults },
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

