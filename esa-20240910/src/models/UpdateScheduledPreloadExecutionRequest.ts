// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduledPreloadExecutionRequest extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * UpdateScheduledPreloadExecution
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
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      id: 'Id',
      interval: 'Interval',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      id: 'string',
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

