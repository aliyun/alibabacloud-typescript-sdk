// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSiteTimeSeriesDataRequestFields } from "./DescribeSiteTimeSeriesDataRequestFields";


export class DescribeSiteTimeSeriesDataRequest extends $dara.Model {
  /**
   * @example
   * 2023-04-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: DescribeSiteTimeSeriesDataRequestFields[];
  /**
   * @example
   * 300
   */
  interval?: string;
  /**
   * @example
   * 1150376036*****
   */
  siteId?: string;
  /**
   * @example
   * 2023-04-08T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fields: 'Fields',
      interval: 'Interval',
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      fields: { 'type': 'array', 'itemType': DescribeSiteTimeSeriesDataRequestFields },
      interval: 'string',
      siteId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

