// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacity } from "./DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacity";
import { DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostIds } from "./DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostIds";
import { DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterTags } from "./DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterTags";


export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostCluster extends $dara.Model {
  /**
   * @remarks
   * The capacity of the host group.
   */
  dedicatedHostClusterCapacity?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacity;
  /**
   * @remarks
   * The ID of the host group.
   * 
   * @example
   * dc-bp12wlf6am0vz9v2****
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * The name of the host group.
   * 
   * @example
   * myDDHCluster
   */
  dedicatedHostClusterName?: string;
  /**
   * @remarks
   * The IDs of dedicated hosts in the host group.
   */
  dedicatedHostIds?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostIds;
  /**
   * @remarks
   * The description of the host group.
   * 
   * @example
   * This-is-my-DDHCluster
   */
  description?: string;
  /**
   * @remarks
   * The region ID of the host group.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the host group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the host group.
   */
  tags?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterTags;
  /**
   * @remarks
   * The zone ID of the host group.
   * 
   * @example
   * cn-hangzhou-f
   */
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

