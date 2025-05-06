// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchOverGlobalDatabaseNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster that will become the primary cluster in the GDN.
   * 
   * You can call the [DescribeGlobalDatabaseNetwork](https://help.aliyun.com/document_detail/264580.html) operation to query the ID of the cluster in the GDN.
   * 
   * @example
   * pc-wz9fb5nn44u1d****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly switch over the primary and secondary clusters in the GDN. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  forced?: boolean;
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
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      forced: 'Forced',
      GDNId: 'GDNId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      forced: 'boolean',
      GDNId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

