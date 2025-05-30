// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-06-01T04:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The severity level of the event. Valid values:
   * 
   * *   **INFO**
   * *   **WARN**
   * *   **CRITICAL**
   * 
   * @example
   * WARN
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
   * The number of entries to return on each page. If you specify MaxResults, `MaxResults` and `NextToken` are used for a paged query.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10
   * 
   * @example
   * 10
   */
  maxResults?: number;
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
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The type of resource. Valid values:
   * 
   * *   disk.
   * 
   * Default value: disk.
   * 
   * @example
   * disk
   */
  resourceType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-06-01T03:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of event. Valid values:
   * 
   * - WillExecute
   * - Executing
   * - Executed
   * - Ignore
   * - Expired
   * - Deleted
   * 
   * @example
   * WillExecute
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventLevel: 'EventLevel',
      eventName: 'EventName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventLevel: 'string',
      eventName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
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

