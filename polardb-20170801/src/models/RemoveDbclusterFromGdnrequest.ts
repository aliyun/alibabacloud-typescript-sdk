// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveDBClusterFromGDNRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the secondary cluster that you want to remove from the GDN.
   * 
   * > You can call the [DescribeGlobalDatabaseNetwork](https://help.aliyun.com/document_detail/264580.html) operation to query the IDs of clusters in the GDN.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-wz9fb5nn44u1d****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly remove the cluster.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the GDN.
   * 
   * This parameter is required.
   * 
   * @example
   * gdn-bp1fttxsrmv*****
   */
  GDNId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the target cluster.
   * 
   * @example
   * pc-wz9fb5nn44u1d****
   */
  targetDBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      force: 'Force',
      GDNId: 'GDNId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      targetDBClusterId: 'TargetDBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      force: 'boolean',
      GDNId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      targetDBClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

