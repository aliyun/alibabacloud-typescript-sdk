// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStatsEventRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the statistical window. The value is a UNIX timestamp in seconds. This parameter must be specified together with startTime and must be later than the start time.
   * 
   * @example
   * 4600
   */
  endTime?: number;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * UserOperator
   */
  eventType?: string;
  /**
   * @remarks
   * The event level.
   * 
   * @example
   * Info
   */
  level?: string;
  /**
   * @remarks
   * The start time of the statistical window. The value is a UNIX timestamp in seconds. This parameter must be specified together with endTime.
   * 
   * @example
   * 1000
   */
  startTime?: number;
  /**
   * @remarks
   * The event status.
   * 
   * @example
   * Executed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      eventType: 'eventType',
      level: 'level',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      eventType: 'string',
      level: 'string',
      startTime: 'number',
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

