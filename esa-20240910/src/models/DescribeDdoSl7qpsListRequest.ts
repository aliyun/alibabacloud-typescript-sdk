// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSL7QpsListRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query.
   * 
   * The date format follows ISO8601 notation and uses UTC+0, formatted as yyyy-MM-ddTHH:mm:ssZ. The maximum span between the start and end times is 31 days.
   * 
   * If this parameter is not set, the current time will be used as the end time of the query.
   * 
   * @example
   * 2023-04-19T19:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the queried data, in seconds.
   * 
   * Depending on the maximum time span of a single query, this parameter supports values of 60 (1 minute), 300 (5 minutes), 1800 (half an hour), and 3600 (1 hour).
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  interval?: number;
  /**
   * @remarks
   * Record ID, which can be obtained by calling the [ListRecords](~~ListRecords~~) interface.
   * 
   * @example
   * 86510927836942****
   */
  recordId?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The start time of the query.
   * 
   * The date format follows ISO8601 notation and uses UTC+0, formatted as yyyy-MM-ddTHH:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-19T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      recordId: 'RecordId',
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'number',
      recordId: 'number',
      siteId: 'number',
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

