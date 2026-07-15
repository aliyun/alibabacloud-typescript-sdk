// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConnectionStringRequest extends $dara.Model {
  /**
   * @remarks
   * The current connection address—the address to modify.
   * 
   * @example
   * s-bpxxxxxxxx.mongodb.rds.aliyuncs.com
   */
  currentConnectionString?: string;
  /**
   * @remarks
   * The ID of the instance.
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
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The new connection address. It must meet these requirements:
   * 
   * - Start with a lowercase letter.
   * 
   * - End with a lowercase letter or digit.
   * 
   * - Contain only lowercase letters, digits, and hyphens (-).
   * 
   * - Be 8 to 63 characters long.
   * 
   * > Specify only the prefix of the connection address. You cannot change any part beyond the prefix.
   * 
   * @example
   * aliyuntest111
   */
  newConnectionString?: string;
  /**
   * @remarks
   * The new port number. Valid values are from 1000 to 65535.
   * 
   * > This parameter is valid only when **DBInstanceId** specifies the ID of a cloud disk instance.
   * 
   * @example
   * 3310
   */
  newPort?: number;
  /**
   * @remarks
   * The ID of a Mongos node in a sharded cluster instance. You can specify only one Mongos node ID per call.
   * 
   * > This parameter is valid only when **DBInstanceId** specifies the ID of a sharded cluster instance.
   * 
   * @example
   * s-bpxxxxxxxx
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
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

