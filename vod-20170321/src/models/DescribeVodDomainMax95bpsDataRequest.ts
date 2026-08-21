// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainMax95BpsDataRequest extends $dara.Model {
  /**
   * @remarks
   * The cycle for the 95th percentile bandwidth. Default value: day. Valid values:
   * 
   * - day: queries the 95th percentile bandwidth by day.
   * 
   * - month: queries the 95th percentile bandwidth by month.
   * 
   * @example
   * month
   */
  cycle?: string;
  /**
   * @remarks
   * The accelerated domain name to query. If this parameter is left empty, the merged data of all accelerated domain names is returned by default.
   * 
   * 
   * > Batch domain name queries are not supported.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2017-01-12T13:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The start time point for data retrieval. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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

