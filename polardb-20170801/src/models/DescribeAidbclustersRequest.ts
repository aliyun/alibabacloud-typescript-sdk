// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClustersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Use this parameter with `Tag.n.Value` to filter clusters by tag. You can specify up to 20 tag pairs. The index n must be a unique, consecutive integer starting from 1.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * testValueData
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

export class DescribeAIDBClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The node type. To specify multiple types, separate them with a comma. Valid values:
   * 
   * - **vnode**: a node managed by Kubernetes
   * 
   * - **container**: a container that you can log on to
   * 
   * - **maas**: model service
   * 
   * @example
   * vnode,container
   */
  aiNodeType?: string;
  /**
   * @remarks
   * The cluster description. Fuzzy search is supported.
   * 
   * @example
   * pc-****************
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID. To specify multiple clusters, separate their IDs with a comma.
   * 
   * @example
   * pc-***************
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * 
   * - **Creating**: The cluster is being created.
   * 
   * - **Running**: The cluster is running.
   * 
   * - **Deleting**: The cluster is being released.
   * 
   * - **Rebooting**: The cluster is restarting.
   * 
   * - **DBNodeCreating**: A node is being added.
   * 
   * - **DBNodeDeleting**: A node is being deleted.
   * 
   * - **ClassChanging**: The node specifications are being changed.
   * 
   * - **NetAddressCreating**: A network connection is being created.
   * 
   * - **NetAddressDeleting**: A network connection is being deleted.
   * 
   * - **NetAddressModifying**: A network connection is being modified.
   * 
   * - **Deleted**: The cluster is released.
   * 
   * * **ClassChanged**: Resources are being reclaimed after the upgrade or downgrade.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * The number of entries per page. Valid values: **30**, **50**, and **100**.
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go
   * 
   * - **Prepaid**: subscription
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A list of tags.
   */
  tag?: DescribeAIDBClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aiNodeType: 'AiNodeType',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterIds: 'DBClusterIds',
      DBClusterStatus: 'DBClusterStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiNodeType: 'string',
      DBClusterDescription: 'string',
      DBClusterIds: 'string',
      DBClusterStatus: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      payType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeAIDBClustersRequestTag },
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

