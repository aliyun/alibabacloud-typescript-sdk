// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the creation time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-11-23T15:16:00Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the results.
   * 
   * Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. Valid values of N: 1 to 100.
   */
  resourceIds?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the creation time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-11-23T15:10:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the API operation associated with the task. Valid values:
   * 
   * - ImportImage: import an image.
   * - ExportImage: export an image.
   * - RedeployInstance: redeploy an ECS instance.
   * - ModifyDiskSpec: change the cloud disk type.
   * - ArchiveSnapshot: archive a snapshot.
   * 
   * @example
   * ImportImage
   */
  taskAction?: string;
  /**
   * @remarks
   * The task group ID.
   * 
   * > This parameter is in invitational preview. When this parameter is specified, other query conditions do not take effect.
   * 
   * @example
   * g-2ze2op2grqpclwu7****
   * 
   * **if can be null:**
   * false
   */
  taskGroupId?: string;
  /**
   * @remarks
   * The task IDs. You can specify up to 100 task IDs at a time. Separate multiple IDs with commas (,).
   * 
   * @example
   * t-bp1hvgwromzv32iq****,t-bp179lofu2pv768w****
   */
  taskIds?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - Finished: The task is complete.
   * - Processing: The task is running.
   * - Failed: The task has failed.
   * 
   * Default value: null.
   * 
   * > Only tasks in the Finished, Processing, or Failed state can be queried. Other values do not take effect.
   * 
   * @example
   * Finished
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      taskAction: 'TaskAction',
      taskGroupId: 'TaskGroupId',
      taskIds: 'TaskIds',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      taskAction: 'string',
      taskGroupId: 'string',
      taskIds: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

