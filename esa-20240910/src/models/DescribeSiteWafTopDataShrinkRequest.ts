// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteWafTopDataShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2023-04-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The query metrics.
   * 
   * This parameter is required.
   */
  fieldsShrink?: string;
  /**
   * @remarks
   * The time granularity for querying data. Unit: seconds.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The number of top data entries to query.
   * 
   * @example
   * 5
   */
  limit?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * 
   * If this parameter is left empty, user-level data is queried.
   * 
   * @example
   * 1150376036*****
   */
  siteId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * @example
   * 2023-04-08T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fieldsShrink: 'Fields',
      interval: 'Interval',
      limit: 'Limit',
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      fieldsShrink: 'string',
      interval: 'string',
      limit: 'string',
      siteId: 'string',
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

