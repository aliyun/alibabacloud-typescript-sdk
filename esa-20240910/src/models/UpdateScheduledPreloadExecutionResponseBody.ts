// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduledPreloadExecutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 15685865xxx14622
   */
  aliUid?: string;
  /**
   * @remarks
   * The end time of the scheduled prefetch plan, in ISO 8601 format (such as 2024-01-01T00:00:00+Z).
   * 
   * @example
   * 2024-05-31T18:10:48.849+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The prefetch plan ID.
   * 
   * @example
   * 66599bd7397885b43804901c
   */
  id?: string;
  /**
   * @remarks
   * The execution interval between each batch of the scheduled prefetch plan, in seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The prefetch task ID.
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
   * 15C66C7B-671A-4297-9187-2C4477247A123425345
   */
  requestId?: string;
  /**
   * @remarks
   * The number of URLs to prefetch per batch.
   * 
   * @example
   * 10
   */
  sliceLen?: number;
  /**
   * @remarks
   * The start time of the scheduled prefetch plan, in ISO 8601 format (such as 2024-01-01T00:00:00+Z).
   * 
   * @example
   * 2024-05-31T17:10:48.849+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the scheduled prefetch plan. Valid values:
   * - **waiting**: Waiting to be executed.
   * - **running**: Being executed.
   * - **finished**: Execution completed.
   * - **failed**: Execution failed.
   * - **stopped**: Execution paused.
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

