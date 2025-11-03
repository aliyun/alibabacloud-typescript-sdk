// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseNodePrivateNetworkAddressRequest extends $dara.Model {
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
   * The ID of the sharded cluster instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1a7009eb24****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The network type of the internal endpoint. Valid values:
   * 
   * *   **VPC**: virtual private cloud (VPC).
   * *   **Classic**: classic network.
   * 
   * >  You can call the [DescribeShardingNetworkAddress](https://help.aliyun.com/document_detail/62135.html) operation to query the network type of the internal endpoint.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the shard or Configserver node.
   * 
   * >  You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the ID of the shard or Configserver node.
   * 
   * @example
   * d-bp128a003436****
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
      networkType: 'NetworkType',
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
      networkType: 'string',
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

