// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSL7QpsListRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The time span between the start time and the end time cannot exceed 31 days. If you do not specify this parameter, the current time is used as the end time.
   * 
   * @example
   * 2023-04-19T19:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the queried data. Unit: seconds. Valid values: 60 (1 minute), 300 (5 minutes), 1800 (30 minutes), and 3600 (1 hour). The supported values vary based on the maximum time span of a single query.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  interval?: number;
  /**
   * @remarks
   * The record ID. You can call the [ListRecords](~~ListRecords~~) operation to obtain the record ID.
   * 
   * @example
   * 86510927836942****
   */
  recordId?: number;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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

