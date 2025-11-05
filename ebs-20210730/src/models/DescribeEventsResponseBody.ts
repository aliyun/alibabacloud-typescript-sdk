// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsResponseBodyResourceEvents extends $dara.Model {
  /**
   * @remarks
   * The description of the event.
   * 
   * @example
   * need snapshot
   */
  description?: string;
  /**
   * @remarks
   * The end time of the event, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   * 
   * @example
   * 1679538083000
   */
  endTime?: string;
  /**
   * @remarks
   * The level of the event. Valid values:
   * 
   * 1.  INFO
   * 2.  WARN
   * 3.  CRITICAL
   * 
   * @example
   * INFO
   */
  eventLevel?: string;
  /**
   * @remarks
   * The name of the event. Valid values:
   * 
   * *   NoSnapshot: indicates the event that is triggered because no snapshot is created for a disk to protect data on the disk.
   * *   BurstIOTriggered: indicates the event that is triggered when a burst I/O operation is performed on a disk.
   * *   CostOptimizationNeeded: indicates the event that is triggered when cost optimization is required.
   * *   DiskSpecNotMatchedWithInstance: indicates the event that is triggered because the specifications of a disk do not match the instance to which the disk is attached.
   * *   DiskIONo4kAligned: indicates the event that is triggered because the physical and logical sectors involved in a read or write operation are not 4K aligned.
   * *   DiskIOHang: indicates the event that is triggered when an I/O hang occurs on a disk.
   * *   InstanceIOPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of IOPS on an instance reaches the upper limit.
   * *   InstanceBPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of BPS on an instance reaches the upper limit.
   * *   DiskIOPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of IOPS on a disk reaches the upper limit for the associated instance.
   * *   DiskBPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of BPS on a disk reaches the upper limit for the associated instance.
   * *   DiskIOPSExceedDiskMaxLimit: indicates the event that is triggered when the number of IOPS on a disk reaches the upper limit for the disk.
   * *   DiskBPSExceedDiskMaxLimit: indicates the event that is triggered when the number of BPS on a disk reaches the upper limit for the disk.
   * 
   * @example
   * DiskIOHang
   */
  eventName?: string;
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * 1.  Notification
   * 2.  SystemException
   * 3.  Alert
   * 
   * @example
   * Alert
   */
  eventType?: string;
  /**
   * @remarks
   * Extra attributes of event, possible fields are:
   * 
   * - EcsInstanceId: ECS instance ID where the cloud disk is mounted;
   * - Adapter: cloud disk mount point.
   * 
   * @example
   * {\\"EcsInstanceId\\":\\"i-uf6dkn9qpcw6y94g7ag7\\",\\"Adapter\\":\\"hda\\"}
   */
  extraAttributes?: string;
  /**
   * @remarks
   * The recommended action after the event occurred. Valid values:
   * 
   * *   ModifyDiskSpec
   * *   CreateSnapshot
   * *   ResizeDisk
   * *   AdjustProvision
   * *   ModifyInstanceSpec
   * 
   * @example
   * AdjustProvision
   */
  recommendAction?: string;
  /**
   * @remarks
   * The codes of the parameters for the recommended action after the event occurred.
   * 
   * @example
   * 4296
   */
  recommendParams?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * disk
   */
  resourceType?: string;
  /**
   * @remarks
   * The start time of the event, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   * 
   * @example
   * 1684204822000
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * 1.  WillExecute
   * 2.  Executing
   * 3.  Executed
   * 4.  Ignore
   * 5.  Expired
   * 6.  Deleted
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
   * A pagination token. It can be used in the next request to retrieve a new page of results.
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
   * The events.
   */
  resourceEvents?: DescribeEventsResponseBodyResourceEvents[];
  /**
   * @remarks
   * The total number of entries returned.
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

