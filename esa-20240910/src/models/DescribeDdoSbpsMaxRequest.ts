// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSBpsMaxRequest extends $dara.Model {
  /**
   * @remarks
   * The protection region. If this parameter is not specified, the default value global is used. Valid values:
   * 
   * - domestic: the Chinese mainland.
   * 
   * - overseas: global (excluding the Chinese mainland).
   * 
   * - global: global.
   * 
   * @example
   * global
   */
  coverage?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * >The end time must be later than the start time.
   * 
   * @example
   * 2023-04-07T02:34:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](url) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 709662109****
   */
  siteId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-14T17:00:00Z
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

