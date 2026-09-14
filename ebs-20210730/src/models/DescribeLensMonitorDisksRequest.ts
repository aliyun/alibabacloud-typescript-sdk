// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLensMonitorDisksRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud disk type. Valid values:
   * 
   * - cloud: basic cloud disk.
   * - cloud_efficiency: ultra cloud disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: Enterprise SSD (ESSD).
   * - cloud_auto: ESSD AutoPL cloud disk.
   * - cloud_essd_entry: ESSD Entry disk.
   * 
   * @example
   * cloud_auto
   */
  diskCategory?: string;
  /**
   * @remarks
   * The regular expression pattern used for fuzzy match filtering of cloud disk IDs.
   * 
   * @example
   * d-cd40hxfu0v*
   */
  diskIdPattern?: string;
  /**
   * @remarks
   * The list of cloud disk IDs.
   * 
   * @example
   * [\\"d-1\\", \\"d-2\\"]
   */
  diskIds?: string[];
  /**
   * @remarks
   * The ECS instance ID.
   * 
   * @example
   * i-2zedroc0yv8z19ubnyos
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The list of cloud disk event tags, used to filter cloud disks that have experienced these event types within the last 24 hours. Valid values:
   * - NoSnapshot: data protection
   * - BurstIOTriggered: burst I/O
   * - CostOptimizationNeeded: cost optimization
   * - DiskSpecNotMatchedWithInstance: instance and cloud disk specifications do not match
   * - DiskIONo4kAligned: non-4K aligned read/write
   * - DiskIOHang: I/O hang occurred on the cloud disk
   * - InstanceIOPSExceedInstanceMaxLimit: instance IOPS reached the upper limit
   * - InstanceBPSExceedInstanceMaxLimit: instance BPS reached the upper limit
   * - DiskIOPSExceedInstanceMaxLimit: cloud disk IOPS reached the instance upper limit
   * - DiskBPSExceedInstanceMaxLimit: cloud disk BPS reached the instance upper limit
   * - DiskIOPSExceedDiskMaxLimit: cloud disk IOPS reached the disk upper limit
   * - DiskBPSExceedDiskMaxLimit: cloud disk BPS reached the disk upper limit
   */
  lensTags?: string[];
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Maximum value: 100.
   * Default value:
   * 
   * - The default value is 10.
   * 
   * - If the specified value is greater than 100, the default value of 100 is used.
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
   * caeba0bbb2be03f84eb48b699f0a****
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
  static names(): { [key: string]: string } {
    return {
      diskCategory: 'DiskCategory',
      diskIdPattern: 'DiskIdPattern',
      diskIds: 'DiskIds',
      ecsInstanceId: 'EcsInstanceId',
      lensTags: 'LensTags',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategory: 'string',
      diskIdPattern: 'string',
      diskIds: { 'type': 'array', 'itemType': 'string' },
      ecsInstanceId: 'string',
      lensTags: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diskIds)) {
      $dara.Model.validateArray(this.diskIds);
    }
    if(Array.isArray(this.lensTags)) {
      $dara.Model.validateArray(this.lensTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

