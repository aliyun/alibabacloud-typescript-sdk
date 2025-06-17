// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRegionDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. Separate multiple accelerated domain names with commas (,).
   * 
   * By default, this operation queries the geographic distribution of users for all accelerated domain names.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * The end time must be later than the start time.
   * 
   * @example
   * 2015-12-07T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2015-12-05T12:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
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

