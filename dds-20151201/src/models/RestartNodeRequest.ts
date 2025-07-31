// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * >  If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the shard, mongos, or ConfigServer node in a child instance of the sharded cluster instance.
   * 
   * >  If you set the **DBInstanceId** parameter to the ID of a sharded cluster instance, you must specify this parameter.
   * 
   * @example
   * d-bp128a003436****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role ID of the node.
   * 
   * 1.  You can call the [DescribeReplicaSetRole](https://help.aliyun.com/document_detail/468469.html) operation to query the role ID of a node in a replica set instance.
   * 2.  You can call the [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/468472.html) operation to query the role ID of a node in a sharded cluster instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 6025****
   */
  roleId?: string;
  switchMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleId: 'RoleId',
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
      roleId: 'string',
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

