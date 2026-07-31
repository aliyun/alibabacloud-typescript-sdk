// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructMvRecommendTaskModel extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-12-12 23:59
   */
  createdTime?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * task desc
   */
  description?: string;
  /**
   * @remarks
   * Last execution time.
   * 
   * @example
   * 2024-12-13 00:10
   */
  lastRunAt?: string;
  /**
   * @remarks
   * The minimum number of slow queries that match the pattern.
   * 
   * @example
   * 3
   */
  minRewriteQueryCount?: number;
  /**
   * @remarks
   * The number of minimum acceleration patterns.
   * 
   * @example
   * 5
   */
  minRewriteQueryPattern?: number;
  /**
   * @remarks
   * The time range for scanning data. Unit: days. Default value: 3.
   * 
   * @example
   * 3
   */
  scanQueriesRange?: number;
  /**
   * @remarks
   * The execution schedule of the task.
   * 
   * @example
   * The 12:30 every day
   */
  schedulingSettings?: string;
  /**
   * @remarks
   * The wait threshold for slow queries.
   * 
   * @example
   * 2
   */
  slowQueryThreshold?: number;
  /**
   * @remarks
   * The name of the recommendation task.
   * 
   * @example
   * mv_task1
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      lastRunAt: 'LastRunAt',
      minRewriteQueryCount: 'MinRewriteQueryCount',
      minRewriteQueryPattern: 'MinRewriteQueryPattern',
      scanQueriesRange: 'ScanQueriesRange',
      schedulingSettings: 'SchedulingSettings',
      slowQueryThreshold: 'SlowQueryThreshold',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      lastRunAt: 'string',
      minRewriteQueryCount: 'number',
      minRewriteQueryPattern: 'number',
      scanQueriesRange: 'number',
      schedulingSettings: 'string',
      slowQueryThreshold: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

