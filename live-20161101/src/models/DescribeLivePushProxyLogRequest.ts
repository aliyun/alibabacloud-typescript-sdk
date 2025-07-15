// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePushProxyLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ingest domain. You can specify only one domain in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Get the log end time.
   * Date format follows the ISO8601 representation and uses UTC+0 time, formatted as yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-09-20T09:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: [1,1000]. Default value: 300.
   * 
   * @example
   * 300
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * Get the log start time in ISO8601 format with UTC+0 timezone, formatted as yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-09-20T08:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
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
      regionId: 'string',
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

