// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchDBInstanceHARequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the shard node in the sharded cluster instance.
   * 
   * > You must specify this parameter if you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bpxxxxxxxx
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of the roles who switch the primary and secondary nodes for the instance. You can call the [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/123802.html) operation to view the IDs and information of roles of nodes.
   * 
   * > 
   * 
   * *   Separate role IDs with commas (,). If this parameter is not specified, the primary and secondary nodes are switched.
   * 
   * *   If you set the **DBInstanceId** parameter to the ID of a sharded cluster instance, the roles who switch the primary and secondary nodes for the instance must belong to one shard node.
   * 
   * @example
   * 972xxxx,972xxxx
   */
  roleIds?: string;
  /**
   * @remarks
   * The time when the primary and secondary nodes are switched. Valid values:
   * 
   * *   0: The primary and secondary nodes are immediately switched.
   * *   1: The primary and secondary nodes are switched during the O\\&M time period.
   * 
   * @example
   * 0
   */
  switchMode?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleIds: 'RoleIds',
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
      roleIds: 'string',
      switchMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

