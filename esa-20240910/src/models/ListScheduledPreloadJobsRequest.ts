// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledPreloadJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the time range to query task creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1717225277000
   */
  endTime?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 190007158391808
   */
  siteId?: number;
  /**
   * @remarks
   * The start time of the time range to query task creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1717225276000
   */
  startTime?: number;
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
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      siteId: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

