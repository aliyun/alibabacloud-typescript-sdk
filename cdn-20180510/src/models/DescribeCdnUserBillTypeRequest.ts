// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserBillTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-10-31T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * The minimum data granularity is 5 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-09-30T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
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

