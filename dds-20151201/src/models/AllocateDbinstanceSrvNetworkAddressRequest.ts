// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateDBInstanceSrvNetworkAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-2ze5eb9514e31364
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of a mongos or shard node in a sharded cluster instance.
   * 
   * > This parameter is not currently required.
   * 
   * @example
   * d-bp1b7bb3bbe****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of SRV connection string to enable.
   * 
   * - `vpc`: SRV connection string for the VPC.
   * 
   * - `public`: Public SRV connection string.
   * 
   * > The default is the VPC connection string.
   * 
   * @example
   * vpc
   */
  srvConnectionType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      srvConnectionType: 'SrvConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      srvConnectionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

