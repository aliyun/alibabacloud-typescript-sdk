// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStatsEventRecordsRequest extends $dara.Model {
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

