// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSqlLogTaskResponseBodyDataFilters } from "./DescribeSqlLogTaskResponseBodyDataFilters";
import { DescribeSqlLogTaskResponseBodyDataQueries } from "./DescribeSqlLogTaskResponseBodyDataQueries";


export class DescribeSqlLogTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1681363254423
   */
  createTime?: number;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1608888296000
   */
  end?: number;
  /**
   * @remarks
   * Indicates whether the task has expired. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  expire?: boolean;
  /**
   * @remarks
   * The download URL of the export task.
   * 
   * @example
   * "https://das-sqllog-download-cn-hongkong.oss-cn-hongkong.aliyuncs.com/****"
   */
  export?: string;
  /**
   * @remarks
   * The filter parameters.
   */
  filters?: DescribeSqlLogTaskResponseBodyDataFilters[];
  /**
   * @remarks
   * The task name.
   */
  name?: string;
  /**
   * @remarks
   * The results of the offline querying task.
   */
  queries?: DescribeSqlLogTaskResponseBodyDataQueries[];
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1596177993000
   */
  start?: number;
  /**
   * @remarks
   * The task state. Valid values:
   * 
   * *   **INIT**: The task is to be scheduled.
   * *   **RUNNING**: The task is running.
   * *   **FAILED**: The task failed.
   * *   **CANCELED**: The task is canceled.
   * *   **COMPLETED**: The task is complete.
   * 
   * >  If a task is in the **COMPLETED** state, you can view the results of the task.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 9a4f5c4494dbd6713185d87a97aa53e8
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   **Export**
   * *   **Query**
   * 
   * @example
   * Query
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      end: 'End',
      expire: 'Expire',
      export: 'Export',
      filters: 'Filters',
      name: 'Name',
      queries: 'Queries',
      start: 'Start',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      end: 'number',
      expire: 'boolean',
      export: 'string',
      filters: { 'type': 'array', 'itemType': DescribeSqlLogTaskResponseBodyDataFilters },
      name: 'string',
      queries: { 'type': 'array', 'itemType': DescribeSqlLogTaskResponseBodyDataQueries },
      start: 'number',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.queries)) {
      $dara.Model.validateArray(this.queries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

