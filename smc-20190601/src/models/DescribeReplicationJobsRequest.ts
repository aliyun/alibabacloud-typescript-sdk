// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReplicationJobsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag N that is added to the SMC resource. Valid values of N: 1 to 20.
   * 
   * The tag key can be an empty string. It can be up to 64 characters in length and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that is added to the SMC resource. Valid values of N: 1 to 20.
   * 
   * The tag value can be an empty string. It can be up to 64 characters in length and cannot contain http:// or https://.[](http://https://。)
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The business status of the migration job. Valid values:
   * 
   * *   Preparing: The migration is being prepared.
   * *   Syncing: Data is being synchronized.
   * *   Processing: The migration is in progress.
   * *   Cleaning: Intermediate resources are being released.
   * 
   * @example
   * Preparing
   */
  businessStatus?: string;
  /**
   * @remarks
   * The IDs of the destination Elastic Compute Service (ECS) instances.
   */
  instanceId?: string[];
  /**
   * @remarks
   * The IDs of the migration jobs. You can specify a maximum of 50 IDs.
   * 
   * @example
   * j-bp19vlwm0tyigbmj****
   */
  jobId?: string[];
  /**
   * @remarks
   * The type of the migration job. Valid values:
   * 
   * *   0: server migration.
   * *   1: operating system migration.
   * *   2: cross-zone migration.
   * *   3: agentless migration for a VMware VM.
   * 
   * @example
   * 0
   */
  jobType?: number;
  /**
   * @remarks
   * The name of the migration job.
   * 
   * @example
   * testMigrationTaskName
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud region to which you want to migrate the source server.
   * 
   * For example, if you want to migrate a source server to the China (Hangzhou) region, set this parameter to `cn-hangzhou`. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the latest regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmw3ty5y7****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The IDs of the source servers. You can specify a maximum of 50 IDs.
   * 
   * @example
   * s-bp1e2fsl57knvuug****
   */
  sourceId?: string[];
  /**
   * @remarks
   * The status of the migration job. Valid values:
   * 
   * *   Ready: The migration job is not started.
   * *   Running: The migration job is running.
   * *   Stopped: The migration job is paused.
   * *   InError: An error occurs in the migration job.
   * *   Finished: The migration job is complete.
   * *   Waiting: The migration job is waiting to run.
   * *   Expired: The migration job has expired.
   * *   Deleting: The migration job is being deleted.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The information about tags that are attached to the SMC resource.
   */
  tag?: DescribeReplicationJobsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      jobType: 'JobType',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      jobId: { 'type': 'array', 'itemType': 'string' },
      jobType: 'number',
      name: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      sourceId: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeReplicationJobsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    if(Array.isArray(this.jobId)) {
      $dara.Model.validateArray(this.jobId);
    }
    if(Array.isArray(this.sourceId)) {
      $dara.Model.validateArray(this.sourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

