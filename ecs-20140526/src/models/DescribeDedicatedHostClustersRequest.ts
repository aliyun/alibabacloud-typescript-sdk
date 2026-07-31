// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostClustersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the dedicated host cluster. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * If you use a single tag to filter resources, the resource count with the tag cannot exceed 1,000. If you use multiple tags to filter resources, the resource count of resources that have all specified tags attached cannot exceed 1,000. If the resource count exceeds 1,000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the dedicated host cluster. Valid values of N: 1 to 20. The tag value cannot be an empty string. The tag value can be up to 64 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of dedicated host clusters. The value is a JSON array of dedicated host cluster IDs in the format of `["dc-xxxxxxxxx", "dc-yyyyyyyyy", … ,"dc-zzzzzzzzz"]`. A maximum of 100 IDs are supported. Separate multiple IDs with commas (,).
   * 
   * @example
   * ["dc-bp12wlf6am0vz9v2****", "dc-bp12wlf6am0vz9v3****"]
   */
  dedicatedHostClusterIds?: string;
  /**
   * @remarks
   * The name of the dedicated host cluster.
   * 
   * @example
   * myDDHCluster
   */
  dedicatedHostClusterName?: string;
  /**
   * @remarks
   * >This parameter is not yet available.
   * 
   * @example
   * null
   */
  lockReason?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the dedicated host cluster list.
   * 
   * Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for the paged query. Settings for paging:
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the dedicated host cluster. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the dedicated host cluster belongs. When you use this parameter to filter resources, the resource count cannot exceed 1,000.
   * 
   * >Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * >This parameter is not yet available.
   * 
   * @example
   * null
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeDedicatedHostClustersRequestTag[];
  /**
   * @remarks
   * The zone ID of the dedicated host cluster. You can call [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to query the available zones.
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

