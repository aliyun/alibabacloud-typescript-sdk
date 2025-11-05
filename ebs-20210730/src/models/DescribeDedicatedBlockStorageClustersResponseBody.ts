// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersDedicatedBlockStorageClusterCapacity extends $dara.Model {
  /**
   * @remarks
   * The available capacity of the dedicated block storage cluster. Unit: GiB.
   * 
   * @example
   * 61440
   */
  availableCapacity?: number;
  /**
   * @remarks
   * The total capacity of the dedicated block storage cluster that was delivered in disk creation orders. Unit: GB.
   * 
   * @example
   * 61440
   */
  availableDeviceCapacity?: number;
  /**
   * @remarks
   * This parameter is displayed only if Thin Provision is enabled.
   * 
   * @example
   * 40000.3
   */
  availableSpaceCapacity?: number;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster that was delivered in orders. Unit: GB.
   * 
   * @example
   * 61440
   */
  clusterAvailableCapacity?: number;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster that is to be delivered in orders. Unit: GB.
   * 
   * @example
   * 0
   */
  clusterDeliveryCapacity?: number;
  /**
   * @remarks
   * The capacity to be delivered for the dedicated block storage cluster. Unit: GiB.
   * 
   * @example
   * 0
   */
  deliveryCapacity?: number;
  /**
   * @remarks
   * The total capacity of the dedicated block storage cluster. Unit: GiB.
   * 
   * @example
   * 61440
   */
  totalCapacity?: number;
  /**
   * @remarks
   * The total capacity of the dedicated block storage cluster that is to be delivered in disk creation orders. Unit: GB.
   * 
   * @example
   * 61440
   */
  totalDeviceCapacity?: number;
  /**
   * @remarks
   * This parameter is displayed only if Thin Provision is enabled.
   * 
   * @example
   * 73728
   */
  totalSpaceCapacity?: number;
  /**
   * @remarks
   * The used capacity of the dedicated block storage cluster. Unit: GiB.
   * 
   * @example
   * 1440
   */
  usedCapacity?: number;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster that was used to create disks. Unit: GB.
   * 
   * @example
   * 32000
   */
  usedDeviceCapacity?: number;
  /**
   * @remarks
   * This parameter is displayed only if Thin Provision is enabled.
   * 
   * @example
   * 33727.7
   */
  usedSpaceCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      availableCapacity: 'AvailableCapacity',
      availableDeviceCapacity: 'AvailableDeviceCapacity',
      availableSpaceCapacity: 'AvailableSpaceCapacity',
      clusterAvailableCapacity: 'ClusterAvailableCapacity',
      clusterDeliveryCapacity: 'ClusterDeliveryCapacity',
      deliveryCapacity: 'DeliveryCapacity',
      totalCapacity: 'TotalCapacity',
      totalDeviceCapacity: 'TotalDeviceCapacity',
      totalSpaceCapacity: 'TotalSpaceCapacity',
      usedCapacity: 'UsedCapacity',
      usedDeviceCapacity: 'UsedDeviceCapacity',
      usedSpaceCapacity: 'UsedSpaceCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCapacity: 'number',
      availableDeviceCapacity: 'number',
      availableSpaceCapacity: 'number',
      clusterAvailableCapacity: 'number',
      clusterDeliveryCapacity: 'number',
      deliveryCapacity: 'number',
      totalCapacity: 'number',
      totalDeviceCapacity: 'number',
      totalSpaceCapacity: 'number',
      usedCapacity: 'number',
      usedDeviceCapacity: 'number',
      usedSpaceCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the dedicated block storage cluster.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the dedicated block storage cluster.
   * 
   * @example
   * testValue
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

export class DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClusters extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 12345601234560***
   */
  aliUid?: string;
  /**
   * @remarks
   * The category of disks that can be created in the dedicated block storage cluster.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The time when the dedicated block storage cluster was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1657113211
   */
  createTime?: string;
  /**
   * @remarks
   * Details about the storage capacity of the dedicated block storage cluster.
   */
  dedicatedBlockStorageClusterCapacity?: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersDedicatedBlockStorageClusterCapacity;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * @example
   * dbsc-f8z4d3k4nsgg9okb****
   */
  dedicatedBlockStorageClusterId?: string;
  /**
   * @remarks
   * The name of the dedicated block storage cluster.
   * 
   * @example
   * myDBSCCluster
   */
  dedicatedBlockStorageClusterName?: string;
  /**
   * @remarks
   * The description of the dedicated block storage cluster.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether Thin Provision is enabled.
   * 
   * @example
   * true
   */
  enableThinProvision?: boolean;
  /**
   * @remarks
   * The time when the dedicated block storage cluster expires. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1673020800
   */
  expiredTime?: string;
  /**
   * @remarks
   * The performance level of disks. Valid values:
   * 
   * *   PL0
   * *   PL1
   * *   PL2
   * *   PL3
   * 
   * >  This parameter is valid only when the SupportedCategory value is cloud_essd.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the dedicated block storage cluster belongs. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to obtain the ID of the resource group.
   * 
   * @example
   * rg-aekzsoux****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The capacity oversold ratio.
   * 
   * @example
   * 1.2
   */
  sizeOverSoldRatio?: number;
  /**
   * @remarks
   * The state of the dedicated block storage cluster. Valid values:
   * 
   * *   Preparing
   * *   Running
   * *   Expired
   * *   Offline
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * StorageDomain
   * 
   * @example
   * StorageDomain
   */
  storageDomain?: string;
  /**
   * @remarks
   * This parameter is not supported.
   * 
   * @example
   * cloud_essd
   */
  supportedCategory?: string;
  /**
   * @remarks
   * The tags of the dedicated block storage cluster.
   */
  tags?: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersTags[];
  /**
   * @remarks
   * The type of the dedicated block storage cluster. Valid values:
   * 
   * *   Standard: basic dedicated block storage cluster. ESSDs at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
   * *   Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
   * 
   * @example
   * Standard
   */
  type?: string;
  /**
   * @remarks
   * The zone ID of the dedicated block storage cluster.
   * 
   * @example
   * cn-heyuan-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      category: 'Category',
      createTime: 'CreateTime',
      dedicatedBlockStorageClusterCapacity: 'DedicatedBlockStorageClusterCapacity',
      dedicatedBlockStorageClusterId: 'DedicatedBlockStorageClusterId',
      dedicatedBlockStorageClusterName: 'DedicatedBlockStorageClusterName',
      description: 'Description',
      enableThinProvision: 'EnableThinProvision',
      expiredTime: 'ExpiredTime',
      performanceLevel: 'PerformanceLevel',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sizeOverSoldRatio: 'SizeOverSoldRatio',
      status: 'Status',
      storageDomain: 'StorageDomain',
      supportedCategory: 'SupportedCategory',
      tags: 'Tags',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      category: 'string',
      createTime: 'string',
      dedicatedBlockStorageClusterCapacity: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersDedicatedBlockStorageClusterCapacity,
      dedicatedBlockStorageClusterId: 'string',
      dedicatedBlockStorageClusterName: 'string',
      description: 'string',
      enableThinProvision: 'boolean',
      expiredTime: 'string',
      performanceLevel: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sizeOverSoldRatio: 'number',
      status: 'string',
      storageDomain: 'string',
      supportedCategory: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersTags },
      type: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.dedicatedBlockStorageClusterCapacity && typeof (this.dedicatedBlockStorageClusterCapacity as any).validate === 'function') {
      (this.dedicatedBlockStorageClusterCapacity as any).validate();
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

export class DescribeDedicatedBlockStorageClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the dedicated block storage clusters.
   */
  dedicatedBlockStorageClusters?: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClusters[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11B55F58-D3A4-4A9B-9596-342420D0****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedBlockStorageClusters: 'DedicatedBlockStorageClusters',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedBlockStorageClusters: { 'type': 'array', 'itemType': DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClusters },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedBlockStorageClusters)) {
      $dara.Model.validateArray(this.dedicatedBlockStorageClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

