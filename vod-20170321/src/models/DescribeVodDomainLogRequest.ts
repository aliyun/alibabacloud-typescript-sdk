// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainLogRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name for ApsaraVideo VOD.
   * > Only a single domain name is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. The interval between the start time and end time cannot exceed one year. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format (UTC).
   * 
   * @example
   * 2016-10-20T05:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * - Default value: **300**
   * - Maximum value: **1000**
   * 
   * @example
   * 300
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format (UTC).
   * 
   * @example
   * 2016-10-20T04:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
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

