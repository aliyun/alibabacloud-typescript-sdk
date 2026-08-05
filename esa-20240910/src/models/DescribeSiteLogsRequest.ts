// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for log retrieval.
   * 
   * The date is in ISO 8601 format and uses UTC+0 time in the format of yyyy-MM-ddTHH:mm:ssZ.
   * 
   * > Note: The end time must be later than the start time.
   * 
   * @example
   * 2022-11-06T17:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number to return. Valid values: any integer greater than 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 300. Maximum value: 1000. Valid values: any integer from 1 to 1000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The site ID, which can be obtained by calling ListSites.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456***
   */
  siteId?: number;
  /**
   * @remarks
   * The start time for log retrieval.
   * 
   * The date is in ISO 8601 format and uses UTC+0 time in the format of yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-11-06T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      siteId: 'number',
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

