// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClustersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can use tags to filter the cluster list. You can specify up to 20 tag key-value pairs. The number n in each tag pair must be unique and must be a consecutive integer starting from 1. The value of Tag.n.Key is Tag.n.Value.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value that corresponds to the tag key.
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
   * The node type. You can specify multiple types separated by commas (,). Valid values:
   * 
   * - vnode: managed by Kubernetes.
   * - container: logon-enabled container.
   * - maas: model service.
   * 
   * @example
   * vnode,container
   */
  aiNodeType?: string;
  /**
   * @remarks
   * The cluster description. Fuzzy match is supported.
   * 
   * @example
   * pc-****************
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster IDs. Separate multiple cluster IDs with commas (,).
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
   * - **Running**: The cluster is running.
   * - **Deleting**: The cluster is being released.
   * - **Rebooting**: The cluster is being restarted.
   * - **DBNodeCreating**: Nodes are being increased.
   * - **DBNodeDeleting**: Nodes are being deleted.
   * - **ClassChanging**: The node specifications are being changed.
   * - **NetAddressCreating**: The network connectivity is being created.
   * - **NetAddressDeleting**: The network connectivity is being deleted.
   * - **NetAddressModifying**: The network connectivity is being modified. 
   * - **Deleted**: The cluster is released.
   * - **ClassChanged**: Resources are being revoked after an upgrade or decrease the quota.
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
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
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
   * The tag list.
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

