// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSEventMaxRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * The date is in ISO 8601 format. The time is displayed in UTC. The format is yyyy-MM-ddTHH:mm:ssZ. The maximum time span between the start time and end time is 31 days.
   * 
   * If you do not set this parameter, the current time is used as the end time.
   * 
   * @example
   * 2023-04-10T02:10:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 7096621098****
   */
  siteId?: number;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * The date is in ISO 8601 format. The time is displayed in UTC. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-18T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

