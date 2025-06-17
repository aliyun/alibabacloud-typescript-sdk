// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainMax95BpsDataRequest extends $dara.Model {
  /**
   * @remarks
   * The cycle to query the 95th percentile bandwidth data. Default value: **day**. Valid values:
   * 
   * *   **day**: queries the 95th percentile bandwidth data by day.
   * *   **month**: queries the 95th percentile bandwidth data by month.
   * 
   * @example
   * month
   */
  cycle?: string;
  /**
   * @remarks
   * The accelerated domain name. If you do not specify a domain name, data of all domain names is queried.
   * 
   * > You cannot specify multiple domain names in a DescribeDomainMax95BpsData request.
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
   * > The end time must be later than the start time.
   * 
   * @example
   * 2017-12-22T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-12-21T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-12-21T10:00:00Z
   */
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      cycle: 'Cycle',
      domainName: 'DomainName',
      endTime: 'EndTime',
      startTime: 'StartTime',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycle: 'string',
      domainName: 'string',
      endTime: 'string',
      startTime: 'string',
      timePoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

