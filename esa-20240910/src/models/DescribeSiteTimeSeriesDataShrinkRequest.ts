// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteTimeSeriesDataShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for obtaining data.
   * 
   * The date format follows ISO8601 notation and uses UTC+0 time, in the format yyyy-MM-ddTHH:mm:ssZ.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2023-04-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Query metrics.
   * 
   * This parameter is required.
   */
  fieldsShrink?: string;
  /**
   * @remarks
   * The time granularity for querying data, in seconds.
   * 
   * Depending on the maximum time span of a single query, this parameter supports values of 60 (1 minute), 300 (5 minutes), 3600 (1 hour), and 86400 (1 day). For details, see the **Supported Query Time Granularities**.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * Site ID. Obtain the site ID by calling the [ListSites](~~ListSites~~) interface.
   * 
   * If this parameter is empty, user-level data will be queried.
   * 
   * @example
   * 1150376036*****
   */
  siteId?: string;
  /**
   * @remarks
   * The start time for obtaining data.
   * 
   * The date format follows ISO8601 notation and uses UTC+0 time, in the format yyyy-MM-ddTHH:mm:ssZ.
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

