// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CountJobByConditionRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the destination database.
   * 
   * @example
   * MongoDB
   */
  destDbType?: string;
  /**
   * @remarks
   * The ID of the DTS task.
   * 
   * @example
   * pk13r731m****
   */
  groupId?: string;
  /**
   * @remarks
   * The type of the DTS task. Valid values:
   * 
   * *   **MIGRATION**: data migration task
   * *   **SYNC**: data synchronization task
   * *   **SUBSCRIBE**: change tracking task
   * 
   * @example
   * SYNC
   */
  jobType?: string;
  /**
   * @remarks
   * The content of the query condition, which corresponds to the value of the JobType parameter.
   * 
   * @example
   * dtspk3f13r731m****
   */
  params?: string;
  /**
   * @remarks
   * One of the query conditions. The ID of the region. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the region in which the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID, global parameter that does not need to be passed in by the current API.
   * 
   * @example
   * Resource group ID, global parameter that does not need to be passed in by the current API.
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the source database.
   * 
   * @example
   * MongoDB
   */
  srcDbType?: string;
  /**
   * @remarks
   * The status of the DTS task.
   * 
   * Valid values for a data migration task:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is in precheck.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **PreCheckPass**: The task passed the precheck.
   * *   **NotConfigured**: The task is not configured.
   * *   **Migrating**: The task is in progress.
   * *   **Suspending**: The task is paused.
   * *   **MigrationFailed**: The task failed to migrate data.
   * *   **Finished**: The task is complete.
   * *   **Retrying**: The task is being retried.
   * *   **Upgrade**: The task is being upgraded.
   * *   **Locked**: The task is locked.
   * *   **Downgrade**: The task is being downgraded.
   * 
   * Valid values for a data synchronization task:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is in precheck.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **PreCheckPass**: The task passed the precheck.
   * *   **NotConfigured**: The task is not configured.
   * *   **Initializing**: The task is performing initial synchronization.
   * *   **InitializeFailed**: Initial synchronization failed.
   * *   **Synchronizing**: The task is in progress.
   * *   **Failed**: The task failed to synchronize data.
   * *   **Suspending**: The task is paused.
   * *   **Modifying**: The objects in the task are being modified.
   * *   **Finished**: The task is complete.
   * *   **Retrying**: The task is being retried.
   * *   **Upgrade**: The task is being upgraded.
   * *   **Locked**: The task is locked.
   * *   **Downgrade**: The task is being downgraded.
   * 
   * Valid values for a change tracking task:
   * 
   * *   **NotConfigured**: The task is not configured.
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is in precheck.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **PreCheckPass**: The task passed the precheck.
   * *   **Starting**: The task is being started.
   * *   **Normal**: The task is running as expected.
   * *   **Retrying**: The task is being retried.
   * *   **Abnormal**: The task is not running as expected.
   * *   **Upgrade**: The task is being upgraded.
   * *   **Locked**: The task is locked.
   * *   **Downgrade**: The task is being downgraded.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The content of the query condition. Valid values:
   * 
   * *   **name**: the name of the task
   * *   **rds**: the ID of the destination instance
   * *   **instance**: the ID of the Data Transmission Service (DTS) instance
   * *   **srcRds**: the ID of the source instance
   * 
   * > The value of this parameter corresponds to the value of the **JobType** parameter.
   * 
   * @example
   * name/instance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      destDbType: 'DestDbType',
      groupId: 'GroupId',
      jobType: 'JobType',
      params: 'Params',
      region: 'Region',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      srcDbType: 'SrcDbType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destDbType: 'string',
      groupId: 'string',
      jobType: 'string',
      params: 'string',
      region: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      srcDbType: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

