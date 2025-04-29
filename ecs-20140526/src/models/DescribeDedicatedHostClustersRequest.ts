// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostClustersRequestTag } from "./DescribeDedicatedHostClustersRequestTag";


export class DescribeDedicatedHostClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The list of host group IDs. The value can be a JSON array consisting of multiple IDs in the `["dc-xxxxxxxxx", "dc-yyyyyyyyy",..., "dc-zzzzzzzzz"]` format. Separate the IDs with commas (,).
   * 
   * @example
   * ["dc-bp12wlf6am0vz9v2****", "dc-bp12wlf6am0vz9v3****"]
   */
  dedicatedHostClusterIds?: string;
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
   * >  This parameter is unavailable for use.
   * 
   * @example
   * null
   */
  lockReason?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the host group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the host group. You can use a resource group ID to filter no more than 1,000 host groups.
   * 
   * >  A default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * >  This parameter is unavailable for use.
   * 
   * @example
   * null
   */
  status?: string;
  /**
   * @remarks
   * The tags of the host group.
   */
  tag?: DescribeDedicatedHostClustersRequestTag[];
  /**
   * @remarks
   * The zone ID of the host group. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostClusterIds: 'DedicatedHostClusterIds',
      dedicatedHostClusterName: 'DedicatedHostClusterName',
      lockReason: 'LockReason',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostClusterIds: 'string',
      dedicatedHostClusterName: 'string',
      lockReason: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDedicatedHostClustersRequestTag },
      zoneId: 'string',
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

