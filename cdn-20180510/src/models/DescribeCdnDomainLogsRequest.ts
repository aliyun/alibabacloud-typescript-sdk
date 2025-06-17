// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name. You can specify only one domain name.
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
   * > The end time must be later than the start time.
   * 
   * @example
   * 2017-12-22T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **300**. Maximum value: **1000**. Valid values: **1** to **1000**.
   * 
   * @example
   * 300
   */
  pageSize?: number;
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
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

