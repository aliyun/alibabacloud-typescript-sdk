// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainRealTimeReqHitRateDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain names. Separate multiple domain names with commas (,). You can specify up to 100 domain names at a time. When you query data for multiple domain names, the returned data is the aggregated data for all specified domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * > The end time must be later than the start time.
   * 
   * @example
   * 2024-01-02T11:26:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2024-01-02T11:23:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
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

