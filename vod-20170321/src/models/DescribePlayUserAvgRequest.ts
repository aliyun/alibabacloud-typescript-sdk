// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayUserAvgRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * > The end time must be later than the start time. The maximum time range between the start time and end time is 180 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-06-30T13:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-06-29T13:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerId: 'number',
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

