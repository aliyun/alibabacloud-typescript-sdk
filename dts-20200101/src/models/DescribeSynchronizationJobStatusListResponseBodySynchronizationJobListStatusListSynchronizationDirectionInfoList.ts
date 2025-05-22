// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusListSynchronizationDirectionInfoList extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp generated when the latest data record was synchronized.
   * 
   * >  You can use a search engine to obtain a UNIX timestamp converter.
   * 
   * @example
   * 1610524452
   */
  checkpoint?: string;
  /**
   * @remarks
   * The status of the data synchronization task in this direction. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is being prechecked.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **Initializing**: The task is performing initial synchronization.
   * *   **InitializeFailed**: Initial synchronization failed.
   * *   **Synchronizing**: The task is synchronizing data.
   * *   **Failed**: The task failed to synchronize data.
   * *   **Suspending**: The task is paused.
   * *   **Modifying**: The objects in the task are being modified.
   * *   **Finished**: The task is completed.
   * 
   * @example
   * InitializeFailed
   */
  status?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      status: 'Status',
      synchronizationDirection: 'SynchronizationDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      status: 'string',
      synchronizationDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

