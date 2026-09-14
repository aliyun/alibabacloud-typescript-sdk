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
   * The maximum data throughput for read/write (I/O) operations per second. Unit: MB/s.
   * 
   * @example
   * 300
   */
  bps?: number;
  /**
   * @remarks
   * Indicates whether burst (performance bursting) is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL cloud disk](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
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
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The cloud disk ID.
   * 
   * @example
   * d-cd401****
   */
  diskId?: string;
  /**
   * @remarks
   * The cloud disk name.
   * 
   * @example
   * disk-28c6b****
   */
  diskName?: string;
  /**
   * @remarks
   * The cloud disk status. Valid values:
   * - Available: in use.
   * - Deleted: deleted.
   * 
   * @example
   * Available
   */
  diskStatus?: string;
  /**
   * @remarks
   * The cloud disk type. Valid values:
   * 
   * - system: system cloud disk.
   * - data: data cloud disk.
   * 
   * @example
   * system
   */
  diskType?: string;
  /**
   * @remarks
   * The maximum number of read/write (I/O) operations per second. Unit: operations/s.
   * 
   * @example
   * 4000
   */
  iops?: number;
  /**
   * @remarks
   * The collection of event tags for the cloud disk. Event tags display events that occurred on the cloud disk within the last 24 hours, with a delay of up to 1 hour compared to the actual events.
   */
  lensTags?: string[];
  /**
   * @remarks
   * The performance level (PL) of the ESSD cloud disk. Valid values:
   * 
   * - PL0: maximum random read/write IOPS of 10,000 per standard SSD.
   * - PL1: maximum random read/write IOPS of 50,000 per standard SSD.
   * - PL2: maximum random read/write IOPS of 100,000 per standard SSD.
   * - PL3: maximum random read/write IOPS of 1,000,000 per standard SSD.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL cloud disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline performance}.
   * 
   * Baseline performance = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL cloud disk](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 4000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether the cloud disk is a shared cloud disk.
   * 
   * @example
   * true
   */
  sharingEnabled?: string;
  /**
   * @remarks
   * The cloud disk size. Unit: GiB.
   * 
   * @example
   * 64
   */
  size?: number;
  /**
   * @remarks
   * The collection of tags for the cloud disk.
   */
  tags?: DescribeLensMonitorDisksResponseBodyDiskInfosTags[];
  /**
   * @remarks
   * The zone ID of the cloud disk.
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
   * The list of cloud disk information.
   */
  diskInfos?: DescribeLensMonitorDisksResponseBodyDiskInfos[];
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
   * The request ID. A request ID is returned regardless of whether the API call succeeds.
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

