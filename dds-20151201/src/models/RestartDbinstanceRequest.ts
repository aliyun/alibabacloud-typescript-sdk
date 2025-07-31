// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the shard or mongos node in the sharded cluster instance.
   * 
   * > The sharded cluster instance is restarted if you do not specify this parameter.
   * 
   * @example
   * d-bpxxxxxxxx
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  switchMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchMode: 'SwitchMode',
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
      switchMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

