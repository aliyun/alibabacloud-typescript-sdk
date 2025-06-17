// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSrcTopUrlVisitRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. Separate multiple accelerated domain names with commas (,).
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
   * > The end time must be later than the start time. The duration between the end time and the start time cannot exceed seven days.
   * 
   * @example
   * 2018-10-03T20:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The method that is used to sort the returned URLs. Default value: **pv**. Valid values:
   * 
   * *   **traf**: by network traffic
   * *   **pv**: by the number of visits
   * 
   * @example
   * pv
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > If you leave this parameter empty, data within the previous day is queried.
   * 
   * @example
   * 2018-10-03T16:00:00Z
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

