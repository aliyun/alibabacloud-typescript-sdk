// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainMax95BpsDataRequest extends $dara.Model {
  /**
   * @remarks
   * The cycle to query the 95th percentile bandwidth data. Valid values:
   * 
   * *   day (default)
   * *   month
   * 
   * @example
   * month
   */
  cycle?: string;
  /**
   * @remarks
   * The domain name to be queried for acceleration. If the parameter is empty, the data merged from all accelerated domain names will be returned by default.
   * 
   * > Batch domain name queries are not supported.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * End time point. The date format follows the ISO8601 representation and uses UTC time, in the format yyyy-MM-dd\\"T\\"HH:mm:ssZ.
   * 
   * @example
   * 2017-01-12T13:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * Start time point. The date format follows the ISO8601 representation and uses UTC time, in the format yyyy-MM-dd\\"T\\"HH:mm:ssZ.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The start time point for getting the data. The date format follows the ISO8601 representation and uses UTC time, in the format yyyy-MM-dd\\"T\\"HH:mm:ssZ.
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
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycle: 'string',
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
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

