// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleasePublicNetworkAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The public endpoint type. Valid values:
   * 
   * *   **SRV**
   * *   **Normal**
   * 
   * >  This parameter is valid only when you want to release an SRV endpoint.
   * 
   * @example
   * SRV
   */
  connectionType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2235****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the mongos, shard, or Configserver node in the sharded cluster instance.
   * 
   * > *   This parameter is valid only if you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * > *   You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to view the ID of the mongos, shard, or Configserver node.
   * 
   * @example
   * s-bp2235****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionType: 'ConnectionType',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionType: 'string',
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

