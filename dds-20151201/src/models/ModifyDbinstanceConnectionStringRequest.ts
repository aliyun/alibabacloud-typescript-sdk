// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConnectionStringRequest extends $dara.Model {
  /**
   * @remarks
   * The current endpoint, which is the endpoint to be modified.
   * 
   * @example
   * s-bpxxxxxxxx.mongodb.rds.aliyuncs.com
   */
  currentConnectionString?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > If you specify the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  forceModifySuffix?: boolean;
  /**
   * @remarks
   * The network type of the connection string when only the port number is modified.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The new endpoint. The endpoint must meet the following requirements:
   * - It must start with a lowercase letter.
   * - It must end with a lowercase letter or a digit.
   * - It can contain only lowercase letters, digits, and hyphens (-).
   * - It must be 8 to 63 characters in length.
   * 
   * > Specify only the prefix of the endpoint. The remaining part cannot be modified.
   * 
   * @example
   * aliyuntest111
   */
  newConnectionString?: string;
  /**
   * @remarks
   * The new port. Valid values: 1000 to 65535.
   * > This parameter is active only when the **DBInstanceId** parameter is set to a cloud disk instance ID.
   * 
   * @example
   * 3310
   */
  newPort?: number;
  /**
   * @remarks
   * Instance ID of the Mongos node in the sharded cluster instance. You can specify only one Mongos node ID in each call.
   * 
   * > This parameter is valid only when the **DBInstanceId** parameter is set to instance ID of a sharded cluster instance.
   * 
   * @example
   * s-bpxxxxxxxx
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to modify only port numbers. If you modify only port numbers, batch modification is supported.
   */
  portModifyOnly?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      currentConnectionString: 'CurrentConnectionString',
      DBInstanceId: 'DBInstanceId',
      forceModifySuffix: 'ForceModifySuffix',
      networkType: 'NetworkType',
      newConnectionString: 'NewConnectionString',
      newPort: 'NewPort',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portModifyOnly: 'PortModifyOnly',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentConnectionString: 'string',
      DBInstanceId: 'string',
      forceModifySuffix: 'boolean',
      networkType: 'string',
      newConnectionString: 'string',
      newPort: 'number',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portModifyOnly: 'boolean',
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

