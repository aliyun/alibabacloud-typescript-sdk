// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteTimeSeriesDataShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2023-04-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fieldsShrink?: string;
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

