// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLensMonitorDisksResponseBodyDiskInfosTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * user
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensMonitorDisksResponseBodyDiskInfos extends $dara.Model {
  /**
   * @remarks
   * The BPS.
   * 
   * @example
   * 300
   */
  bps?: number;
  /**
   * @remarks
   * Indicates whether the performance burst feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is available only if you set `DiskCategory` to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * - cloud
   * - cloud_efficiency
   * - cloud_ssd
   * - cloud_essd
   * - cloud_auto
   * - cloud_essd_entry
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-cd401****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * disk-28c6b****
   */
  diskName?: string;
  /**
   * @remarks
   * The disk status. Valid values:
   * 
   * - Available
   * - Deleted
   * 
   * @example
   * Available
   */
  diskStatus?: string;
  /**
   * @remarks
   * The disk type. Valid values:
   * *   system: system disk
   * *   data: data disk
   * 
   * @example
   * system
   */
  diskType?: string;
  /**
   * @remarks
   * The IOPS.
   * 
   * @example
   * 4000
   */
  iops?: number;
  /**
   * @remarks
   * Event tags of the disk.
   */
  lensTags?: string[];
  /**
   * @remarks
   * The new performance level of the ESSD. Valid values:
   * 
   * *   PL0: An ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD delivers up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk to use as the system disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.
   * 
   * Baseline performance = min{1,800 + 50 × Capacity, 50,000}
   * 
   * This parameter is available only if you set `DiskCategory` to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 4000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  sharingEnabled?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 64
   */
  size?: number;
  /**
   * @remarks
   * Tags of the disk.
   */
  tags?: DescribeLensMonitorDisksResponseBodyDiskInfosTags[];
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      burstingEnabled: 'BurstingEnabled',
      diskCategory: 'DiskCategory',
      diskId: 'DiskId',
      diskName: 'DiskName',
      diskStatus: 'DiskStatus',
      diskType: 'DiskType',
      iops: 'Iops',
      lensTags: 'LensTags',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      regionId: 'RegionId',
      sharingEnabled: 'SharingEnabled',
      size: 'Size',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      burstingEnabled: 'boolean',
      diskCategory: 'string',
      diskId: 'string',
      diskName: 'string',
      diskStatus: 'string',
      diskType: 'string',
      iops: 'number',
      lensTags: { 'type': 'array', 'itemType': 'string' },
      performanceLevel: 'string',
      provisionedIops: 'number',
      regionId: 'string',
      sharingEnabled: 'string',
      size: 'number',
      tags: { 'type': 'array', 'itemType': DescribeLensMonitorDisksResponseBodyDiskInfosTags },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lensTags)) {
      $dara.Model.validateArray(this.lensTags);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensMonitorDisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the disks.
   */
  diskInfos?: DescribeLensMonitorDisksResponseBodyDiskInfos[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      diskInfos: 'DiskInfos',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskInfos: { 'type': 'array', 'itemType': DescribeLensMonitorDisksResponseBodyDiskInfos },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.diskInfos)) {
      $dara.Model.validateArray(this.diskInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

