// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledPreloadJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for querying the task creation time range. Specify the timestamp in milliseconds.
   * 
   * @example
   * 1717225277000
   */
  endTime?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The website ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ListScheduledPreloadJobs
   */
  siteId?: number;
  /**
   * @remarks
   * The beginning of the task creation time range to query. Specify the timestamp in milliseconds.
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

