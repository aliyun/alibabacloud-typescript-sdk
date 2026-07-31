// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreloadTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The query content. Exact match is used.
   * 
   * @example
   * http://a.com/1.jpg?b=2
   */
  content?: string;
  /**
   * @remarks
   * The end time. The date is in ISO 8601 format and uses UTC+0 time in the yyyy-MM-ddTHH:mm:ssZ format.
   * > The end time must be later than the start time.
   * 
   * @example
   * 2023-03-23T06:23:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Valid values: **1** to **100000**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Default value: **20**. Maximum value: **50**. Valid values: any integer from **1** to **50**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The start time. The date is in ISO 8601 format and uses UTC+0 time in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2023-03-22T17:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task execution status. Valid values:
   * 
   * - **Complte**: Complete.
   * - **Refreshing**: Prefetching.
   * - **Failed**: Prefetch failed.
   * 
   * @example
   * Complete
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteId: 'SiteId',
      startTime: 'StartTime',
      status: 'Status',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

