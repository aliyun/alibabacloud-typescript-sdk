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
   * The parent task ID of a distributed synchronization task.
   * 
   * @example
   * pk13r731m****
   */
  groupId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - **MIGRATION**: data migration.
   * - **SYNC**: data synchronization.
   * - **SUBSCRIBE**: change tracking.
   * 
   * @example
   * SYNC
   */
  jobType?: string;
  /**
   * @remarks
   * The query value that corresponds to JobType.
   * 
   * @example
   * dtspk3f13r731m****
   */
  params?: string;
  /**
   * @remarks
   * The region ID used as a filter condition. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the region where the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. This is a global parameter and does not need to be passed for this API operation.
   * 
   * @example
   * 资源组ID，全局参数，当前API无需传入。
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
   * The instance status of the DTS instance. Valid values:
   * 
   * Data migration node statuses:
   * - **NotStarted**: not started.
   * - **Prechecking**: running a dry run.
   * - **PrecheckFailed**: dry run failed.
   * - **PreCheckPass**: dry run passed.
   * - **NotConfigured**: not configured.
   * - **Migrating**: migrating.
   * - **Suspending**: paused.
   * - **MigrationFailed**: migration failed.
   * - **Finished**: finished.
   * - **Retrying**: retrying.
   * - **Upgrade**: upgrading.
   * - **Locked**: locked.
   * - **Downgrade**: downgrading.
   * 
   * Data synchronization node statuses:
   * - **NotStarted**: not started.
   * - **Prechecking**: running a dry run.
   * - **PrecheckFailed**: dry run failed.
   * - **PreCheckPass**: dry run passed.
   * - **NotConfigured**: not configured.
   * - **Initializing**: performing initial synchronization.
   * - **InitializeFailed**: initial synchronization failed.
   * - **Synchronizing**: synchronizing.
   * - **Failed**: synchronization failed.
   * - **Suspending**: paused.
   * - **Modifying**: modifying sub-objects.
   * - **Finished**: finished.
   * - **Retrying**: retrying.
   * - **Upgrade**: upgrading.
   * - **Locked**: locked.
   * - **Downgrade**: downgrading.
   * 
   * Subscribe node statuses:
   * - **NotConfigured**: not configured.
   * - **NotStarted**: not started.
   * - **Prechecking**: running a dry run.
   * - **PrecheckFailed**: dry run failed.
   * - **PreCheckPass**: dry run passed.
   * - **Starting**: starting.
   * - **Normal**: Normal.
   * - **Retrying**: retrying.
   * - **Abnormal**: abnormal.
   * - **Upgrade**: upgrading.
   * - **Locked**: locked.
   * - **Downgrade**: downgrading.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The query type. Valid values:  
   * - **name**: queries by job name.  
   * - **rds**: queries by destination instance ID.  
   * - **instance**: queries by DTS instance ID.
   * - **srcRds**: queries by source instance ID.
   * 
   * > This parameter corresponds to the **JobType** parameter.
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

