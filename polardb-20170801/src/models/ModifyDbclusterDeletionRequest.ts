// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterDeletionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the target cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to find the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1313h70cd5m****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to enable or disable the cluster lock. The default value is false. Valid values:
   * 
   * - **true**: Enables the cluster lock. When this feature is enabled, the cluster cannot be released. To release the cluster, first disable the cluster lock.
   * 
   * - **false**: Disables the cluster lock.
   * 
   * @example
   * true
   */
  protection?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      protection: 'Protection',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      protection: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

