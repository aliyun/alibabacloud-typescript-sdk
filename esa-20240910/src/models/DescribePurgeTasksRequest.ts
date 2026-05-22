// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurgeTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The content to purge. Exact match is supported.
   * 
   * @example
   * http://a.com/1.jpg?b=1
   */
  content?: string;
  /**
   * @remarks
   * The end time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time.
   * 
   * @example
   * 2022-11-18T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Valid values: 1 to 100000.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Valid values: 1 to 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The website ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The start time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-11-16T05:33:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   **Complete**: The task is complete.
   * *   **Refreshing**: The task is in progress.
   * *   **Failed**: The task failed.
   * 
   * @example
   * Complete
   */
  status?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   **file** (default): purges the cache by file.
   * *   **cachetag**: purges the cache by cache tag.
   * *   **directory**: purges the cache by directory.
   * *   **ignoreParams**: purges the cache by URL with specified parameters ignored.
   * *   **hostname**: purges the cache by hostname.
   * *   **purgeall**: purges all cache.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteId: 'SiteId',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      siteId: 'number',
      startTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

