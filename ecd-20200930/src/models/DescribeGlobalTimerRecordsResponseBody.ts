// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalTimerRecordsResponseBodyResults extends $dara.Model {
  actionType?: string;
  /**
   * @remarks
   * The ID of the batch in which the scheduled task is executed.
   * 
   * @example
   * ccg-0cvfvf6u1enx1****
   */
  batchId?: string;
  context?: string;
  /**
   * @remarks
   * The time when the execution record was created.
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
   * The time when the scheduled task ended.
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
   * @remarks
   * The ID of the scheduled task group.
   * 
   * @example
   * ccg-xxxx
   */
  timerGroupId?: string;
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
      finishTime: 'FinishTime',
      regionId: 'RegionId',
      timerGroupId: 'TimerGroupId',
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
      finishTime: 'string',
      regionId: 'string',
      timerGroupId: 'string',
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
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
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
   * The response parameters.
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

