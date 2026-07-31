// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructMvRecommendSubTaskModel extends $dara.Model {
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2025-10-16 16:56
   */
  endTime?: string;
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
   * The number of queries scanned.
   * 
   * @example
   * 55
   */
  scanQueriesCount?: number;
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
   * The start time of the task.
   * 
   * @example
   * 2025-10-16 16:55
   */
  startTime?: string;
  /**
   * @remarks
   * Current execution status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The number of newly generated MV recommendations.
   * 
   * @example
   * 70
   */
  subQueriesCount?: number;
  /**
   * @remarks
   * The record ID of the task execution.
   * 
   * @example
   * 123
   */
  subtaskId?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      minRewriteQueryCount: 'MinRewriteQueryCount',
      minRewriteQueryPattern: 'MinRewriteQueryPattern',
      scanQueriesCount: 'ScanQueriesCount',
      slowQueryThreshold: 'SlowQueryThreshold',
      startTime: 'StartTime',
      status: 'Status',
      subQueriesCount: 'SubQueriesCount',
      subtaskId: 'SubtaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      minRewriteQueryCount: 'number',
      minRewriteQueryPattern: 'number',
      scanQueriesCount: 'number',
      slowQueryThreshold: 'number',
      startTime: 'string',
      status: 'string',
      subQueriesCount: 'number',
      subtaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

