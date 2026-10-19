// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. 
   * > If the instance is a sharded cluster instance, you must also specify `NodeId`.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Instance ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query instance IDs of Mongos nodes, Shard nodes, or ConfigServer nodes.
   * 
   * > This parameter is required when **DBInstanceId** is set to instance ID of a sharded cluster instance.
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
   * 1.  You can call the [DescribeReplicaSetRole](https://help.aliyun.com/document_detail/468469.html) operation to query the node IDs of a replica set instance.
   * 2.  You can call the [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/468472.html) operation to query the node IDs of a sharded cluster instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 6025****
   */
  roleId?: string;
  /**
   * @remarks
   * The execution time. Valid values:
   * * **0**: immediately. This is the default value.
   * * **1**: during the maintenance window.
   * 
   * > You can call the [ModifyInstanceMaintainTime](https://help.aliyun.com/document_detail/473775.html) operation to modify the maintenance window of the instance.
   * 
   * @example
   * 1
   */
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

