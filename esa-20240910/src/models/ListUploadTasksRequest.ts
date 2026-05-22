// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUploadTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the task ends. Specify the time in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2019-12-06T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The time when the task starts. Specify the time in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2018-11-29T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   **file**: purges the cache by file URL.
   * *   **preload**: prefetches files.
   * *   **directory**: purges the cache by directory.
   * *   **ignoreparams**: purges the cache by URL with specified parameters ignored.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      siteId: 'SiteId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      siteId: 'number',
      startTime: 'string',
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

