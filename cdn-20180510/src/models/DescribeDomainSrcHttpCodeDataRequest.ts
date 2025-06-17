// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSrcHttpCodeDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. You can specify a maximum of 500 domain names in a request. Separate multiple domain names with commas (,).
   * 
   * @example
   * example.com,example.org
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format in the ISO 8601 standard. The time is displayed in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time interval between the data entries to return. Unit: seconds.
   * 
   * The time granularity varies with the maximum time range per query. Valid values: 300 (5 minutes), 3600 (1 hour), and 86400 (1 day). For more information, see **Description**.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2019-11-30T05:33:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
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

