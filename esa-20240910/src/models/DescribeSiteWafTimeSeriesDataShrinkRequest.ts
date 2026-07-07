// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteWafTimeSeriesDataShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
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
   * The time granularity of the queried data. Unit: seconds.
   * 
   * Based on the maximum time span of a single query, this parameter supports the values 60 (1 minute), 300 (5 minutes), 3600 (1 hour), and 86400 (1 day). For more information, see the **supported time granularity** section above.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * If this parameter is left empty, user-level data is queried.
   * 
   * @example
   * 11089268296****
   */
  siteId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
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
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      fieldsShrink: 'string',
      interval: 'string',
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

