// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransferHistoryResponseBodyHistoryDetailsHistoryDetail extends $dara.Model {
  /**
   * @remarks
   * The amount of data that is migrated per minute.
   * 
   * @example
   * 10240
   */
  bytesPerMinute?: number;
  /**
   * @remarks
   * The time window during which write operations are stopped.
   * 
   * @example
   * 2025-02-08T00:00:00+08:00,2025-02-12T00:00:00+08:00
   * 
   * **if can be null:**
   * false
   */
  disableWriteWindows?: string;
  /**
   * @remarks
   * The number of parts that are migrated per minute.
   * 
   * @example
   * 1.24
   */
  partsPerMinute?: number;
  /**
   * @remarks
   * The progress of the data migration.
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The control version of the source cluster.
   * 
   * @example
   * v1
   */
  sourceControlVersion?: string;
  /**
   * @remarks
   * The ID of the source cluster.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  sourceDBCluster?: string;
  /**
   * @remarks
   * The status of the data migration task. Valid values:
   * 
   * *   **Finished**: The data migration task is complete.
   * *   **Processing**: The data migration task is in progress.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The running subtask.
   * 
   * @example
   * SubJob
   */
  subJob?: string;
  /**
   * @remarks
   * The subtask status.
   * 
   * @example
   * running
   */
  subJobStatus?: string;
  /**
   * @remarks
   * The control version of the destination cluster.
   * 
   * @example
   * v2
   */
  targetControlVersion?: string;
  /**
   * @remarks
   * The ID of the destination cluster.
   * 
   * @example
   * cc-bp13zkh9uw523****
   */
  targetDBCluster?: string;
  /**
   * @remarks
   * The amount of data that is not migrated.
   * 
   * @example
   * 102400
   */
  unsyncedBytes?: number;
  /**
   * @remarks
   * The number of parts that are not migrated.
   * 
   * @example
   * 1000
   */
  unsyncedParts?: number;
  static names(): { [key: string]: string } {
    return {
      bytesPerMinute: 'BytesPerMinute',
      disableWriteWindows: 'DisableWriteWindows',
      partsPerMinute: 'PartsPerMinute',
      progress: 'Progress',
      sourceControlVersion: 'SourceControlVersion',
      sourceDBCluster: 'SourceDBCluster',
      status: 'Status',
      subJob: 'SubJob',
      subJobStatus: 'SubJobStatus',
      targetControlVersion: 'TargetControlVersion',
      targetDBCluster: 'TargetDBCluster',
      unsyncedBytes: 'UnsyncedBytes',
      unsyncedParts: 'UnsyncedParts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesPerMinute: 'number',
      disableWriteWindows: 'string',
      partsPerMinute: 'number',
      progress: 'string',
      sourceControlVersion: 'string',
      sourceDBCluster: 'string',
      status: 'string',
      subJob: 'string',
      subJobStatus: 'string',
      targetControlVersion: 'string',
      targetDBCluster: 'string',
      unsyncedBytes: 'number',
      unsyncedParts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

