// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the event. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-06-01T04:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The event level. Valid values:
   * - **INFO**: Notification.
   * - **WARN**: Warning.
   * - **CRITICAL**: Critical.
   * 
   * @example
   * WARN
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
   * The maximum number of entries per page for a paged query. If you specify this parameter, the `MaxResults` and `NextToken` parameters are used together for the query.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the list of regions supported by EBS Lens.
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
   * The resource type. Valid values:
   * - disk: cloud disk
   * 
   * @example
   * disk
   */
  resourceType?: string;
  /**
   * @remarks
   * The start time of the event. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-06-01T03:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * - WillExecute: pending 
   * - Executing: processing
   * - Executed: processed
   * - Ignore: ignored
   * - Expired: expired
   * - Deleted: deleted
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

