// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSBpsListRequest extends $dara.Model {
  /**
   * @remarks
   * Protection area, defaulting to global if not filled. When specified, the values are as follows:
   * 
   * - domestic: Mainland China.
   * 
   * - overseas: Global (excluding Mainland China).
   * 
   * - global: Global.
   * 
   * @example
   * global
   */
  coverage?: string;
  /**
   * @remarks
   * The end time for fetching data. In ISO8601 format, using UTC+0, formatted as: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * The end time must be later than the start time, and the span between start and end times should not exceed 31 days.
   * 
   * @example
   * 2023-05-18T06:19:42Z
   */
  endTime?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 70966210986912
   */
  siteId?: number;
  /**
   * @remarks
   * The start time for fetching data, in ISO8601 format, using UTC+0, formatted as: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-14T17:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      endTime: 'EndTime',
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      endTime: 'string',
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

