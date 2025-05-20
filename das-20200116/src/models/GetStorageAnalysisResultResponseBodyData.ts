// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStorageAnalysisResultResponseBodyDataStorageAnalysisResult } from "./GetStorageAnalysisResultResponseBodyDataStorageAnalysisResult";


export class GetStorageAnalysisResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of databases that have been analyzed.
   * 
   * @example
   * 2
   */
  analyzedDbCount?: number;
  /**
   * @remarks
   * The details of storage analysis.
   */
  storageAnalysisResult?: GetStorageAnalysisResultResponseBodyDataStorageAnalysisResult;
  /**
   * @remarks
   * Indicates whether the task is complete.
   * 
   * @example
   * true
   */
  taskFinish?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 910f83f4b96df0524ddc5749f615****
   */
  taskId?: string;
  /**
   * @remarks
   * The task progress.
   * 
   * >  Valid values are integers that range from 0 to 100.
   * 
   * @example
   * 50
   */
  taskProgress?: number;
  /**
   * @remarks
   * The status of the storage analysis task. Valid values:
   * 
   * *   **INIT**: The task is being initialized.
   * *   **PENDING**: The task is being queued for execution.
   * *   **RECEIVED**: The task is received for execution.
   * *   **RUNNING**: The task is being executed.
   * *   **RETRY**: The task is being retried.
   * *   **SUCCESS**: The task succeeds.
   * *   **FAILURE**: The task fails.
   * 
   * @example
   * RUNNING
   */
  taskState?: string;
  /**
   * @remarks
   * Indicates whether the task is successful.
   * 
   * @example
   * true
   */
  taskSuccess?: boolean;
  /**
   * @remarks
   * The number of databases that need to be analyzed in the storage analysis task.
   * 
   * @example
   * 32
   */
  totalDbCount?: number;
  static names(): { [key: string]: string } {
    return {
      analyzedDbCount: 'AnalyzedDbCount',
      storageAnalysisResult: 'StorageAnalysisResult',
      taskFinish: 'TaskFinish',
      taskId: 'TaskId',
      taskProgress: 'TaskProgress',
      taskState: 'TaskState',
      taskSuccess: 'TaskSuccess',
      totalDbCount: 'TotalDbCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzedDbCount: 'number',
      storageAnalysisResult: GetStorageAnalysisResultResponseBodyDataStorageAnalysisResult,
      taskFinish: 'boolean',
      taskId: 'string',
      taskProgress: 'number',
      taskState: 'string',
      taskSuccess: 'boolean',
      totalDbCount: 'number',
    };
  }

  validate() {
    if(this.storageAnalysisResult && typeof (this.storageAnalysisResult as any).validate === 'function') {
      (this.storageAnalysisResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

