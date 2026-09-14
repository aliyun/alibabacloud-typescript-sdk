// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsResponseBodyResourceEvents extends $dara.Model {
  /**
   * @remarks
   * The event description.
   * 
   * @example
   * You can purchase 4296 provisioned IOPS for cost optimization. Based on your usage over the past 7 days, costs are estimated to decrease by 16%
   */
  description?: string;
  /**
   * @remarks
   * The end time of the event. This value is a timestamp in milliseconds.
   * 
   * @example
   * 1679538083000
   */
  endTime?: string;
  /**
   * @remarks
   * The event level. Valid values:
   * 
   * 1. INFO
   * 2. WARN
   * 3. CRITICAL
   * 
   * @example
   * INFO
   */
  eventLevel?: string;
  /**
   * @remarks
   * The event name. Valid values:
   * 
   * - NoSnapshot: data protection
   * - BurstIOTriggered: burst I/O
   * - CostOptimizationNeeded: cost optimization
   * - DiskSpecNotMatchedWithInstance: instance and disk specification mismatch
   * - DiskIONo4kAligned: non-4K aligned read/write
   * - DiskIOHang: disk IOHang occurred
   * - InstanceIOPSExceedInstanceMaxLimit: instance IOPS reached the upper limit
   * - InstanceBPSExceedInstanceMaxLimit: instance BPS reached the upper limit
   * - DiskIOPSExceedInstanceMaxLimit: disk IOPS reached the instance upper limit
   * - DiskBPSExceedInstanceMaxLimit: disk BPS reached the instance upper limit
   * - DiskIOPSExceedDiskMaxLimit: disk IOPS reached the disk upper limit
   * - DiskBPSExceedDiskMaxLimit: disk BPS reached the disk upper limit
   * 
   * @example
   * DiskIOHang
   */
  eventName?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 1. Notification
   * 2. SystemException
   * 3. Alert
   * 
   * @example
   * Alert
   */
  eventType?: string;
  /**
   * @remarks
   * The additional properties. Possible fields:
   * 
   * - EcsInstanceId: the ID of the ECS instance to which the cloud disk is attached.
   * - Adapter: the mount point of the cloud disk.
   * 
   * @example
   * {\\"EcsInstanceId\\":\\"i-uf6dkn9qpcw6y94g7ag7\\",\\"Adapter\\":\\"hda\\"}
   */
  extraAttributes?: string;
  /**
   * @remarks
   * The recommended action after the event occurs. Valid values:
   * 
   * - ModifyDiskSpec: change disk specifications
   * - CreateSnapshot: create a snapshot
   * - ResizeDisk: expand disk capacity
   * - AdjustProvision: adjust provisioned performance
   * - ModifyInstanceSpec: change instance specifications
   * 
   * @example
   * AdjustProvision
   */
  recommendAction?: string;
  /**
   * @remarks
   * The parameters for the recommended action after the event occurs.
   * 
   * @example
   * 4296
   */
  recommendParams?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * disk
   */
  resourceType?: string;
  /**
   * @remarks
   * The start time of the event. This value is a timestamp in milliseconds.
   * 
   * @example
   * 1684204822000
   */
  startTime?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * 1. WillExecute: pending
   * 2. Executing: processing
   * 3. Executed: processed
   * 4. Ignore: ignored
   * 5. Expired: expired
   * 6. Deleted: deleted
   * 
   * @example
   * WillExecute
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endTime: 'EndTime',
      eventLevel: 'EventLevel',
      eventName: 'EventName',
      eventType: 'EventType',
      extraAttributes: 'ExtraAttributes',
      recommendAction: 'RecommendAction',
      recommendParams: 'RecommendParams',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endTime: 'string',
      eventLevel: 'string',
      eventName: 'string',
      eventType: 'string',
      extraAttributes: 'string',
      recommendAction: 'string',
      recommendParams: 'string',
      resourceId: 'string',
      resourceType: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token for the next query. If NextToken is empty, no more results exist.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of events.
   */
  resourceEvents?: DescribeEventsResponseBodyResourceEvents[];
  /**
   * @remarks
   * The total number of entries returned for the paged query.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceEvents: 'ResourceEvents',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceEvents: { 'type': 'array', 'itemType': DescribeEventsResponseBodyResourceEvents },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceEvents)) {
      $dara.Model.validateArray(this.resourceEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

