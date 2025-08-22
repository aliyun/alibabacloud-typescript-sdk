// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainTopUrlVisitRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. You can specify only one domain name in each request.
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
   * Default value: **pv**
   * 
   * @example
   * pv
   */
  sortBy?: string;
  /**
   * @remarks
   * The start of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * To query the data on a specified day, use the format: yyyy-MM-ddT16:00:00Z.
   * 
   * > If you do not specify this parameter, the data in the last 24 hours is queried.
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

