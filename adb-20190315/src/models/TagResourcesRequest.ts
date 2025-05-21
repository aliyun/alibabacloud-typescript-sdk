// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagResourcesRequestTag } from "./TagResourcesRequestTag";


export class TagResourcesRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cluster to which to add a tag. If you want to add a tag to multiple clusters, click **Add** and enter the cluster IDs.
   * 
   * > 
   * 
   * *   You can add tags to up to 50 clusters at a time.
   * 
   * *   You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxx.1
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the cluster. Set the value to **ALIYUN::ADB::CLUSTER**.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ADB::CLUSTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags to add to the cluster.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

