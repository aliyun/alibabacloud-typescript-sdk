// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgress } from "./DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgress";


export class DescribePreCheckStatusResponseBodySubDistributedJobStatus extends $dara.Model {
  /**
   * @remarks
   * The task code that indicates the type of the subtask. Valid values:
   * 
   * *   **01**: precheck.
   * *   **02**: schema migration or initial schema synchronization.
   * *   **03**: full data migration or initial full data synchronization.
   * *   **04**: incremental data migration or synchronization.
   * 
   * @example
   * 02
   */
  code?: string;
  /**
   * @remarks
   * The number of subtasks that failed.
   * 
   * @example
   * 0
   */
  errorItem?: number;
  /**
   * @remarks
   * The subtask ID.
   * 
   * @example
   * n0gm1682j6563np
   */
  jobId?: string;
  /**
   * @remarks
   * The name of distributed subtasks associated with the subtask.
   * 
   * @example
   * dts.step.struct.load
   */
  jobName?: string;
  /**
   * @remarks
   * The subtasks and the progress of each subtask.
   */
  jobProgress?: DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgress[];
  /**
   * @remarks
   * The status of the subtask. Valid values:
   * 
   * *   **NotStarted**: The subtask is not started.
   * *   **Suspending**: The subtask is paused.
   * *   **Checking**: The subtask is being checked.
   * *   **Migrating**: The subtask is in progress. Data is being migrated.
   * *   **Failed**: The subtask failed.
   * *   **Catched**: The subtask is in progress. Incremental data is being migrated or synchronized.
   * *   **Finished**: The subtask is complete.
   * 
   * @example
   * Finished
   */
  state?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 11
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorItem: 'ErrorItem',
      jobId: 'JobId',
      jobName: 'JobName',
      jobProgress: 'JobProgress',
      state: 'State',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorItem: 'number',
      jobId: 'string',
      jobName: 'string',
      jobProgress: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgress },
      state: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobProgress)) {
      $dara.Model.validateArray(this.jobProgress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

