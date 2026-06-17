// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the node configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * FailoverPriority
   */
  configName?: string;
  /**
   * @remarks
   * The configuration of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * perfdb
   */
  configValue?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters in your account, including the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the cluster node.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/185342.html) operation to query the details of all clusters in your account, including the node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pi-****************
   */
  DBNodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      configValue: 'ConfigValue',
      DBClusterId: 'DBClusterId',
      DBNodeId: 'DBNodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      configValue: 'string',
      DBClusterId: 'string',
      DBNodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

