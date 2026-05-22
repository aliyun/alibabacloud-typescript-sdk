// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledPreloadExecutionsResponseBodyFailedExecutions extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 15685865xxx14622
   */
  aliUid?: string;
  /**
   * @remarks
   * The end time of the prefetch plans.
   * 
   * @example
   * 2024-06-03T02:43:35Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the prefetch plan.
   * 
   * @example
   * 66599bd7397885b43804901c
   */
  id?: string;
  /**
   * @remarks
   * The time interval between each batch execution. Unit: seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The ID of the prefetch task.
   * 
   * @example
   * 665d3af3621bccf3fe29e1a4
   */
  jobId?: string;
  /**
   * @remarks
   * The number of URLs prefetched in each batch.
   * 
   * @example
   * 10
   */
  sliceLen?: number;
  /**
   * @remarks
   * The start time of the prefetch plans.
   * 
   * @example
   * 2024-06-02T02:43:35Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the prefetch plan. Valid values:
   * 
   * *   **waiting**
   * *   **running**
   * *   **finished**
   * *   **failed**
   * *   **stopped**
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endTime: 'EndTime',
      id: 'Id',
      interval: 'Interval',
      jobId: 'JobId',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      endTime: 'string',
      id: 'string',
      interval: 'number',
      jobId: 'string',
      sliceLen: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPreloadExecutionsResponseBodySuccessExecutions extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 15685865xxx14622
   */
  aliUid?: string;
  /**
   * @remarks
   * The end time of the prefetch plans.
   * 
   * @example
   * 2024-06-03T02:43:35Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the prefetch plan.
   * 
   * @example
   * 66599bd7397885b43804901c
   */
  id?: string;
  /**
   * @remarks
   * The time interval between each batch execution. Unit: seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The ID of the prefetch task.
   * 
   * @example
   * 665d3af3621bccf3fe29e1a4
   */
  jobId?: string;
  /**
   * @remarks
   * The number of URLs prefetched in each batch.
   * 
   * @example
   * 10
   */
  sliceLen?: number;
  /**
   * @remarks
   * The start time of the prefetch plans.
   * 
   * @example
   * 2024-06-02T02:43:35Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the prefetch plan. Valid values:
   * 
   * *   **waiting**
   * *   **running**
   * *   **finished**
   * *   **failed**
   * *   **stopped**
   * 
   * @example
   * failed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endTime: 'EndTime',
      id: 'Id',
      interval: 'Interval',
      jobId: 'JobId',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      endTime: 'string',
      id: 'string',
      interval: 'number',
      jobId: 'string',
      sliceLen: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPreloadExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about prefetch plans that failed to be created.
   */
  failedExecutions?: CreateScheduledPreloadExecutionsResponseBodyFailedExecutions[];
  /**
   * @remarks
   * The information about plan failures.
   */
  failedMessages?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
   */
  requestId?: string;
  /**
   * @remarks
   * The number of prefetch plans that are created.
   * 
   * @example
   * 12
   */
  successCount?: number;
  /**
   * @remarks
   * The information about created prefetch plans.
   */
  successExecutions?: CreateScheduledPreloadExecutionsResponseBodySuccessExecutions[];
  /**
   * @remarks
   * The total number of new plans requested.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedExecutions: 'FailedExecutions',
      failedMessages: 'FailedMessages',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      successExecutions: 'SuccessExecutions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedExecutions: { 'type': 'array', 'itemType': CreateScheduledPreloadExecutionsResponseBodyFailedExecutions },
      failedMessages: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successCount: 'number',
      successExecutions: { 'type': 'array', 'itemType': CreateScheduledPreloadExecutionsResponseBodySuccessExecutions },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedExecutions)) {
      $dara.Model.validateArray(this.failedExecutions);
    }
    if(Array.isArray(this.failedMessages)) {
      $dara.Model.validateArray(this.failedMessages);
    }
    if(Array.isArray(this.successExecutions)) {
      $dara.Model.validateArray(this.successExecutions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

