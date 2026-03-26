// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypesAvailableInstanceType extends $dara.Model {
  availableInstanceCapacity?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      availableInstanceCapacity: 'AvailableInstanceCapacity',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableInstanceCapacity: 'number',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypes extends $dara.Model {
  availableInstanceType?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypesAvailableInstanceType[];
  static names(): { [key: string]: string } {
    return {
      availableInstanceType: 'AvailableInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableInstanceType: { 'type': 'array', 'itemType': DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypesAvailableInstanceType },
    };
  }

  validate() {
    if(Array.isArray(this.availableInstanceType)) {
      $dara.Model.validateArray(this.availableInstanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacitiesLocalStorageCapacity extends $dara.Model {
  availableDisk?: number;
  dataDiskCategory?: string;
  totalDisk?: number;
  static names(): { [key: string]: string } {
    return {
      availableDisk: 'AvailableDisk',
      dataDiskCategory: 'DataDiskCategory',
      totalDisk: 'TotalDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDisk: 'number',
      dataDiskCategory: 'string',
      totalDisk: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacities extends $dara.Model {
  localStorageCapacity?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacitiesLocalStorageCapacity[];
  static names(): { [key: string]: string } {
    return {
      localStorageCapacity: 'LocalStorageCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localStorageCapacity: { 'type': 'array', 'itemType': DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacitiesLocalStorageCapacity },
    };
  }

  validate() {
    if(Array.isArray(this.localStorageCapacity)) {
      $dara.Model.validateArray(this.localStorageCapacity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacity extends $dara.Model {
  availableInstanceTypes?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypes;
  availableMemory?: number;
  availableVcpus?: number;
  localStorageCapacities?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacities;
  totalMemory?: number;
  totalVcpus?: number;
  static names(): { [key: string]: string } {
    return {
      availableInstanceTypes: 'AvailableInstanceTypes',
      availableMemory: 'AvailableMemory',
      availableVcpus: 'AvailableVcpus',
      localStorageCapacities: 'LocalStorageCapacities',
      totalMemory: 'TotalMemory',
      totalVcpus: 'TotalVcpus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableInstanceTypes: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypes,
      availableMemory: 'number',
      availableVcpus: 'number',
      localStorageCapacities: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacities,
      totalMemory: 'number',
      totalVcpus: 'number',
    };
  }

  validate() {
    if(this.availableInstanceTypes && typeof (this.availableInstanceTypes as any).validate === 'function') {
      (this.availableInstanceTypes as any).validate();
    }
    if(this.localStorageCapacities && typeof (this.localStorageCapacities as any).validate === 'function') {
      (this.localStorageCapacities as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostIds extends $dara.Model {
  dedicatedHostId?: string[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostId)) {
      $dara.Model.validateArray(this.dedicatedHostId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterTagsTag extends $dara.Model {
  tagKey?: string;
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

export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterTags extends $dara.Model {
  tag?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostCluster extends $dara.Model {
  dedicatedHostClusterCapacity?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacity;
  dedicatedHostClusterId?: string;
  dedicatedHostClusterName?: string;
  dedicatedHostIds?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostIds;
  description?: string;
  regionId?: string;
  resourceGroupId?: string;
  tags?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterTags;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostClusterCapacity: 'DedicatedHostClusterCapacity',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostClusterName: 'DedicatedHostClusterName',
      dedicatedHostIds: 'DedicatedHostIds',
      description: 'Description',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostClusterCapacity: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacity,
      dedicatedHostClusterId: 'string',
      dedicatedHostClusterName: 'string',
      dedicatedHostIds: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostIds,
      description: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterTags,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.dedicatedHostClusterCapacity && typeof (this.dedicatedHostClusterCapacity as any).validate === 'function') {
      (this.dedicatedHostClusterCapacity as any).validate();
    }
    if(this.dedicatedHostIds && typeof (this.dedicatedHostIds as any).validate === 'function') {
      (this.dedicatedHostIds as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClusters extends $dara.Model {
  dedicatedHostCluster?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostCluster[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostCluster: 'DedicatedHostCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostCluster: { 'type': 'array', 'itemType': DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostCluster },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostCluster)) {
      $dara.Model.validateArray(this.dedicatedHostCluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseBody extends $dara.Model {
  dedicatedHostClusters?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClusters;
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
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 214A2187-B06F-4E49-A081-4D053466A8C7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of dedicated host clusters.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostClusters: 'DedicatedHostClusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostClusters: DescribeDedicatedHostClustersResponseBodyDedicatedHostClusters,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.dedicatedHostClusters && typeof (this.dedicatedHostClusters as any).validate === 'function') {
      (this.dedicatedHostClusters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

