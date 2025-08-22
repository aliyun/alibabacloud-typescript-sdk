// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainTopReferVisitRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. You can specify only one domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   **traf**: by network traffic
   * *   **pv**: by the number of visits
   * 
   * Default value: **pv**.
   * 
   * @example
   * pv
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * To query the data on a specified day, use the yyyy-MM-ddT16:00:00Z format.
   * 
   * If you do not set this parameter, data collected within the last 24 hours is queried.
   * 
   * @example
   * 2018-10-03T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      sortBy: 'SortBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      sortBy: 'string',
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

