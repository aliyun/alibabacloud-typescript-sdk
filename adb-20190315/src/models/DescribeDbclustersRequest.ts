// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClustersRequestTag } from "./DescribeDbclustersRequestTag";


export class DescribeDBClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the cluster.
   * 
   * *   The description cannot start with `http://` or `https://`.
   * *   The description must be 2 to 256 characters in length
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster IDs.
   * 
   * > You can specify the ID of one cluster or IDs of more clusters within the preceding region.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The state of the cluster. Valid values:
   * 
   * *   **Preparing**: The cluster is being prepared.
   * *   **Creating**: The cluster is being created.
   * *   **Restoring**: The cluster is being restored from a backup.
   * *   **Running**: The cluster is running.
   * *   **Deleting**: The cluster is being deleted.
   * *   **ClassChanging**: The cluster specifications are being changed.
   * *   **NetAddressCreating**: A network connection is being created.
   * *   **NetAddressDeleting**: A network connection is being deleted.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The version of the cluster. Set the value to **3.0**.
   * 
   * @example
   * 3.0
   */
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the clusters.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-4690g37929XXXX
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags that are added to the cluster.
   */
  tag?: DescribeDBClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterIds: 'DBClusterIds',
      DBClusterStatus: 'DBClusterStatus',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterIds: 'string',
      DBClusterStatus: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeDBClustersRequestTag },
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

