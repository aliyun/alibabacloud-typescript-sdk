// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The page number for paging. Pages start from 1. If this parameter is not specified or is set to a value less than 1, the first page is returned. The query results are sorted in descending order of task creation time, with the most recently created tasks listed first. When polling a single task by TaskId, we recommend that you explicitly set this parameter to 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of tasks to return on each page. Default value: 200. If this parameter is set to a value less than 1, the value 10 is used. When polling a single task by TaskId, set this parameter to 1 to avoid returning redundant tasks.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters export tasks by task ID. The value is the TaskId returned by CreateExportTask, which is a 32-character UUID string without hyphens. This parameter requires an exact match and does not support fuzzy queries. If this parameter is not specified, all tasks under the current account that meet other conditions are returned.
   * 
   * @example
   * 8119078c29e948dba2e0a9917995332a
   */
  taskId?: string;
  /**
   * @remarks
   * Filters export tasks by task type. The value is case-sensitive and must be one of the following valid values:
   * - WUYING_SERVER_LIST: Wuying host list.
   * - USER_USAGE_REPORT: User usage report.
   * - BROWSER_BOOKMARK_LIST: Cloud browser bookmark list.
   * - BROWSER_RESTRICTED_URL_LIST: Cloud browser URL whitelist.
   * 
   * If this parameter is not specified, tasks are not filtered by type, and all tasks under the current account that meet other conditions are returned. If an unrecognized value is passed, the server does not return a parameter error but cancels the type filter. Therefore, you must pass the exact valid values listed above. When querying a single task by TaskId, omit this parameter.
   * 
   * @example
   * WUYING_SERVER_LIST
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

