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

