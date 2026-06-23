// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUploadTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The end time in ISO 8601 format (for example, 2024-01-01T00:00:00+Z).
   * >Notice: StartTime and EndTime must be provided together to define the query time window. An error is returned if either one is missing..
   * 
   * @example
   * 2019-12-06T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The site ID. You can obtain this value by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * >Notice: This parameter is required when you call the ListUploadTasks operation..
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The start time in ISO 8601 format (for example, 2024-01-01T00:00:00+Z).
   * >Notice: StartTime and EndTime must be provided together to define the query time window. An error is returned if either one is missing..
   * 
   * @example
   * 2018-11-29T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - **file**: URL file purge.
   * - **preload**: resource prefetch.
   * - **directory**: directory purge.
   * - **ignoreparams**: purge with parameters ignored.
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

