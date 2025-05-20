// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSqlLogTasksResponseBodyDataListFilters } from "./DescribeSqlLogTasksResponseBodyDataListFilters";


export class DescribeSqlLogTasksResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The time when the analysis task was complete. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1712751923000
   */
  analysisTaskFinishTime?: number;
  /**
   * @remarks
   * The state of the analysis task.
   * 
   * >  This parameter is a system parameter. You do not need to pay attention to the parameter.
   * 
   * @example
   * SCAN_ANALYZE_COMPLETED
   */
  analysisTaskStatus?: string;
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
   * The time when the task ended. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1705975320000
   */
  end?: number;
  /**
   * @remarks
   * Indicates whether the task expired. Valid values:
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
   * The filter parameters.
   */
  filters?: DescribeSqlLogTasksResponseBodyDataListFilters[];
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * @example
   * rm-2zew761kf7ho18752
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of log records.
   * 
   * @example
   * 99999
   */
  logCount?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * test01
   */
  name?: string;
  /**
   * @remarks
   * The task progress.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The URL that is returned if the value of TaskType is **Export**.
   * 
   * @example
   * https://das-sqllog-download-cn-shanghai.oss-cn-shanghai.aliyuncs.com/la
   */
  result?: string;
  /**
   * @remarks
   * The number of files that are scanned.
   * 
   * @example
   * 3000
   */
  scanFileSize?: number;
  /**
   * @remarks
   * The time when the task started. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1683859555482
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
   * RUNNING
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
   * Export
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      analysisTaskFinishTime: 'AnalysisTaskFinishTime',
      analysisTaskStatus: 'AnalysisTaskStatus',
      createTime: 'CreateTime',
      end: 'End',
      expire: 'Expire',
      filters: 'Filters',
      instanceId: 'InstanceId',
      logCount: 'LogCount',
      name: 'Name',
      progress: 'Progress',
      result: 'Result',
      scanFileSize: 'ScanFileSize',
      start: 'Start',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisTaskFinishTime: 'number',
      analysisTaskStatus: 'string',
      createTime: 'number',
      end: 'number',
      expire: 'boolean',
      filters: { 'type': 'array', 'itemType': DescribeSqlLogTasksResponseBodyDataListFilters },
      instanceId: 'string',
      logCount: 'number',
      name: 'string',
      progress: 'number',
      result: 'string',
      scanFileSize: 'number',
      start: 'number',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

