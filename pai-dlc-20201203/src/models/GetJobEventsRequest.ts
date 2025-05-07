// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time (UTC) of the time range for querying events. The default value is the current time.
   * 
   * @example
   * 2020-11-08T18:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of events that can be returned. Default value: 2000.
   * 
   * @example
   * 100
   */
  maxEventsNum?: number;
  /**
   * @remarks
   * The start time (UTC) of the time range for querying events. The default value is 7 days ago.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxEventsNum: 'MaxEventsNum',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxEventsNum: 'number',
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

