// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOnlineDDLProgressResponseBodyOnlineDDLTaskDetail extends $dara.Model {
  /**
   * @remarks
   * The cleanup policy of the original table after the cut-over. Valid values:
   * 
   * *   **DROP**: Invalid original tables are deleted.
   * *   **MOVE**: Invalid original tables are moved to the test database. You can delete the tables manually.
   * *   **NOTHING**: Invalid original tables are retained in the original database. You can delete the tables manually.
   * 
   * @example
   * DROP
   */
  cleanStrategy?: string;
  /**
   * @remarks
   * The policy of full replication. Valid values:
   * 
   * *   **AUTO**: DMS dynamically adjusts the chunk size based on the performance of the database. Tables are locked for less than 1.5 seconds during a single replication operation.
   * *   **RUNNING**: DMS uses the specified value of the CopyChunkSize parameter. The valid value of the CopyChunkSize parameter ranges from 1 to 60000. If you set this parameter to RUNNING, you must specify the CopyChunkSize parameter.
   * 
   * @example
   * AUTO
   */
  copyChunkMode?: string;
  /**
   * @remarks
   * The size of each chunk that is used to replicate data. This parameter is used to specify the size of each chunk. A larger chunk size increases the replication efficiency and decreases the business performance.
   * 
   * > During full replication, the original table is divided into N small chunks and each chunk is replicated to the temporary table one by one. By default, DMS dynamically adjusts the size of each chunk.
   * 
   * @example
   * 1000
   */
  copyChunkSize?: number;
  /**
   * @remarks
   * The actual amount of data replicated from the original table in the lock-free change operation.
   * 
   * @example
   * 9
   */
  copyCount?: number;
  /**
   * @remarks
   * The estimated total number of rows of the data. The value is obtained from the statistical data in the information_schema database. In most cases, the estimated total number of rows is smaller than the actual number of rows in a table.
   * 
   * @example
   * 10
   */
  copyTotal?: number;
  /**
   * @remarks
   * The number of retries when the cut-over fails.
   * 
   * @example
   * 3
   */
  cutoverFailRetryTimes?: number;
  /**
   * @remarks
   * The maximum period of time that a table can be locked during cut-over. Unit: seconds.
   * 
   * @example
   * 2
   */
  cutoverLockTimeSeconds?: number;
  /**
   * @remarks
   * The end of the time window of the cut-over operation. This value is at least 30 minutes later than the CutoverWindowStartTime parameter. Default value: 23:59:59
   * 
   * @example
   * 13:00:00
   */
  cutoverWindowEndTime?: string;
  /**
   * @remarks
   * The beginning of the time window of the cut-over operation. Default value: 00:00:00. This parameter controls the time window of the cut-over. Cut-over can be performed only when the cut-over conditions are met and the time is within the specified time window. If the time is not within the time window, the cut-over operation is not performed until the time reaches the beginning of the time window.
   * 
   * @example
   * 12:00:00
   */
  cutoverWindowStartTime?: string;
  /**
   * @remarks
   * The replay latency of DMS. Unit: seconds. The replay latency is the period of time that is taken to replay the binary logs of the table to the temporary table. The latency does not indicate the data migration latency between a primary database and a secondary database.
   * 
   * @example
   * 0
   */
  delaySeconds?: number;
  /**
   * @remarks
   * The state of the task. Valid values:
   * 
   * *   **INIT**: The task is being initialized.
   * *   **SUCCESS**: The task is complete.
   * *   **RUNNING**: The task is being executed.
   * *   **WAITING_CUTOVER**: The task is waiting for cut-over.
   * *   **RESTARTING**: The task is restarting.
   * *   **PAUSE**: The task is suspended.
   * *   **UNSUPPORTED**: The task is not supported.
   * *   **CANCELED**: The task is canceled.
   * *   **FAIL**: The task failed.
   * *   **INTERRUPT**: The task is interrupted.
   * 
   * @example
   * SUCCESS
   */
  jobStatus?: string;
  /**
   * @remarks
   * The estimated execution progress. The actual progress is subject to the task status.
   * 
   * @example
   * 90%
   */
  progressRatio?: string;
  /**
   * @remarks
   * The description of the task status.
   * 
   * @example
   * Success
   */
  statusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      cleanStrategy: 'CleanStrategy',
      copyChunkMode: 'CopyChunkMode',
      copyChunkSize: 'CopyChunkSize',
      copyCount: 'CopyCount',
      copyTotal: 'CopyTotal',
      cutoverFailRetryTimes: 'CutoverFailRetryTimes',
      cutoverLockTimeSeconds: 'CutoverLockTimeSeconds',
      cutoverWindowEndTime: 'CutoverWindowEndTime',
      cutoverWindowStartTime: 'CutoverWindowStartTime',
      delaySeconds: 'DelaySeconds',
      jobStatus: 'JobStatus',
      progressRatio: 'ProgressRatio',
      statusDesc: 'StatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanStrategy: 'string',
      copyChunkMode: 'string',
      copyChunkSize: 'number',
      copyCount: 'number',
      copyTotal: 'number',
      cutoverFailRetryTimes: 'number',
      cutoverLockTimeSeconds: 'number',
      cutoverWindowEndTime: 'string',
      cutoverWindowStartTime: 'string',
      delaySeconds: 'number',
      jobStatus: 'string',
      progressRatio: 'string',
      statusDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

