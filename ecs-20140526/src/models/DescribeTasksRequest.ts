// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The time range refers to the period of time during which the task is created. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-11-23T15:16:00Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the resources associated with the task. Valid values of N: 1 to 100.
   */
  resourceIds?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The time range refers to the period of time during which the task is created. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-11-23T15:10:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the operation that generates the task. Valid values:
   * 
   * *   ImportImage
   * *   ExportImage
   * *   RedeployInstance
   * *   ModifyDiskSpec
   * *   ArchiveSnapshot
   * 
   * @example
   * ImportImage
   */
  taskAction?: string;
  /**
   * **if can be null:**
   * false
   */
  taskGroupId?: string;
  /**
   * @remarks
   * The task IDs. You can specify up to 100 task IDs at a time. Separate the task IDs with commas (,).
   * 
   * @example
   * t-bp1hvgwromzv32iq****,t-bp179lofu2pv768w****
   */
  taskIds?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   Finished
   * *   Processing
   * *   Failed
   * 
   * This parameter is left empty by default.
   * 
   * >  The system only queries tasks in the Finished, Processing, and Failed states and ignores other values.
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

