// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartScheduledPreloadExecutionResponseBody extends $dara.Model {
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
   * The end time of the prefetch plan.
   * 
   * @example
   * 2024-05-31T18:10:48.849+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the prefetch plan.
   * 
   * @example
   * 665d3b48621bccf3fe29e1a7
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
   * The request ID.
   * 
   * @example
   * 65C66B7B-671A-8297-9187-2R5477247B76
   */
  requestId?: string;
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
   * The start time of the prefetch plan.
   * 
   * @example
   * 2024-05-31T17:10:48.849+08:00
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
   * waiting
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endTime: 'EndTime',
      id: 'Id',
      interval: 'Interval',
      jobId: 'JobId',
      requestId: 'RequestId',
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
      requestId: 'string',
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

