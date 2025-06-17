// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopUrlVisitRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name that you want to query.
   * 
   * This parameter is required.
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
   * > The end time must be later than the start time. The maximum time range that can be specified is seven days.
   * 
   * @example
   * 2019-10-04T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The method that is used to sort the returned URLs. Default value: **pv**. Valid values:
   * 
   * *   **traf**: by network traffic
   * *   **pv**: by the number of page views
   * 
   * @example
   * pv
   */
  sortBy?: string;
  /**
   * @remarks
   * The start of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * If you want to query data of a specific day, we recommend that you set the value in the yyyy-MM-ddT16:00:00Z format.
   * 
   * @example
   * 2019-10-04T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      sortBy: 'SortBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
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

