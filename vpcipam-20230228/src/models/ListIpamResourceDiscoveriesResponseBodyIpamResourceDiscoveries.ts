// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveriesTags } from "./ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveriesTags";


export class ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveries extends $dara.Model {
  /**
   * @remarks
   * The time when the resource was discovered.
   * 
   * @example
   * 2022-07-01T02:05:23Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the resource discovery.
   * 
   * @example
   * test description
   */
  ipamResourceDiscoveryDescription?: string;
  /**
   * @remarks
   * The ID of resource discovery instance.
   * 
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  ipamResourceDiscoveryId?: string;
  /**
   * @remarks
   * The name of the resource discovery.
   * 
   * @example
   * test
   */
  ipamResourceDiscoveryName?: string;
  /**
   * @remarks
   * The status of the resource discovery instance. Valid values:
   * 
   * *   **Creating**
   * *   **Created**
   * *   **Modifying**
   * *   **Deleting**
   * *   **Deleted**
   * 
   * @example
   * Created
   */
  ipamResourceDiscoveryStatus?: string;
  /**
   * @remarks
   * The list of resource discovery regions.
   */
  operatingRegionList?: string[];
  /**
   * @remarks
   * The Alibaba Cloud account that owns the resource discovery.
   * 
   * @example
   * 1210123456******
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the queried resource discovery instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group that resource discovery belongs.
   * 
   * @example
   * rg-aek2sermdd6****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The sharing status of the resource.
   * 
   * *   If the value is empty, the resource is as an average instance.
   * *   If the value is Shared, the resource discovery comes from a shared source.
   * *   If the value is Sharing, the resource discovery is being shared.
   * 
   * @example
   * Shared
   */
  shareType?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveriesTags[];
  /**
   * @remarks
   * The type of resource discovery.
   * 
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      ipamResourceDiscoveryDescription: 'IpamResourceDiscoveryDescription',
      ipamResourceDiscoveryId: 'IpamResourceDiscoveryId',
      ipamResourceDiscoveryName: 'IpamResourceDiscoveryName',
      ipamResourceDiscoveryStatus: 'IpamResourceDiscoveryStatus',
      operatingRegionList: 'OperatingRegionList',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      ipamResourceDiscoveryDescription: 'string',
      ipamResourceDiscoveryId: 'string',
      ipamResourceDiscoveryName: 'string',
      ipamResourceDiscoveryStatus: 'string',
      operatingRegionList: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'array', 'itemType': ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveriesTags },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operatingRegionList)) {
      $dara.Model.validateArray(this.operatingRegionList);
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

