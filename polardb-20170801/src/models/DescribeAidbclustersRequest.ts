// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClustersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can filter the cluster list by tag. You can specify up to 20 tag pairs. The number n for each tag pair must be unique and must be a consecutive integer starting from 1. The value of Tag.n.Key corresponds to Tag.n.Value.
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
   * The node type. Multiple types are supported. Separate two values with a comma (,).
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
   * The cluster ID. Separate multiple cluster IDs with commas (,).
   * 
   * @example
   * pc-***************
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * 
   * - **Creating**: being created.
   * - **Running**: running.
   * - **Deleting**: being released.
   * - **Rebooting**: being restarted.
   * - **DBNodeCreating**: a node is being added (increase).
   * - **DBNodeDeleting**: a node is being deleted.
   * - **ClassChanging**: node specifications are being changed.
   * - **NetAddressCreating**: a network connectivity is being created.
   * - **NetAddressDeleting**: a network connectivity is being deleted.
   * - **NetAddressModifying**: a network connectivity is being modified. 
   * - **Deleted**: released.
   * * **ClassChanged**: resources are being revoked after a decrease the quota operation.
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
   * The list of tags.
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

