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
   * The ID of the parent task for a distributed synchronization task.
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
   * The query value, which corresponds to JobType.
   * 
   * @example
   * dtspk3f13r731m****
   */
  params?: string;
  /**
   * @remarks
   * The region ID, which is one of the filter conditions. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * The resource group ID. This is a global parameter and is not required for this operation.
   * 
   * @example
   * The resource group ID. This is a global parameter and is not required for this operation
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
   * The DTS instance status. Valid values:
   * 
   * Status of a data migration task:
   * - **NotStarted**: not started.
   * - **Prechecking**: performing a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **PreCheckPass**: precheck passed.
   * - **NotConfigured**: not configured.
   * - **Migrating**: migrating data.
   * - **Suspending**: being paused.
   * - **MigrationFailed**: migration failed.
   * - **Finished**: completed.
   * - **Retrying**: being retried.
   * - **Upgrade**: being upgraded.
   * - **Locked**: locked.
   * - **Downgrade**: being downgraded.
   * 
   * Status of a data synchronization task:
   * - **NotStarted**: not started.
   * - **Prechecking**: performing a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **PreCheckPass**: precheck passed.
   * - **NotConfigured**: not configured.
   * - **Initializing**: performing initial synchronization.
   * - **InitializeFailed**: initial synchronization failed.
   * - **Synchronizing**: synchronizing data.
   * - **Failed**: synchronization failed.
   * - **Suspending**: being paused.
   * - **Modifying**: modifying sub-objects.
   * - **Finished**: completed.
   * - **Retrying**: being retried.
   * - **Upgrade**: being upgraded.
   * - **Locked**: locked.
   * - **Downgrade**: being downgraded.
   * 
   * Status of a change tracking task:
   * - **NotConfigured**: not configured.
   * - **NotStarted**: not started.
   * - **Prechecking**: performing a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **PreCheckPass**: precheck passed.
   * - **Starting**: being started.
   * - **Normal**: normal.
   * - **Retrying**: being retried.
   * - **Abnormal**: abnormal.
   * - **Upgrade**: being upgraded.
   * - **Locked**: locked.
   * - **Downgrade**: being downgraded.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * Specifies the query type. Valid values:  
   * - **name**: queries by job name.  
   * - **rds**: queries by destination instance ID.  
   * - **instance**: queries by DTS instance ID.
   * - **srcRds**: queries by source instance ID.
   * 
   * > This parameter corresponds to the query value and **JobType**.
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

