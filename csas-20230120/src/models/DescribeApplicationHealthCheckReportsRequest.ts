// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationHealthCheckReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the internal-facing applications. You can specify up to 100 application IDs.
   * 
   * This parameter is required.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds. If this parameter is not specified, the default value is the current time. If only the start time is specified, the end time is set to 5 minutes after the start time. The end time must be later than the start time, and the maximum query time range is 7 days.
   * 
   * @example
   * 1700000600
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds. If this parameter is not specified, the default value is 5 minutes before the end time. If only the end time is specified, the start time is set to 5 minutes before the end time.
   * 
   * @example
   * 1700000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

