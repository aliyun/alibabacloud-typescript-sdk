// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledPreloadExecutionsRequestExecutions extends $dara.Model {
  /**
   * @remarks
   * The end time of the prefetch plans.
   * 
   * @example
   * 2024-06-04T02:02:09Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time interval between each batch execution. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  interval?: number;
  /**
   * @remarks
   * The number of URLs prefetched in each batch.
   * 
   * This parameter is required.
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
   * 2024-06-03T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'number',
      sliceLen: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

