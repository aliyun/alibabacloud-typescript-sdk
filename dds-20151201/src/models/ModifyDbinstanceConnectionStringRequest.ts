// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConnectionStringRequest extends $dara.Model {
  /**
   * @remarks
   * The current endpoint that is to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bpxxxxxxxx.mongodb.rds.aliyuncs.com
   */
  currentConnectionString?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The new endpoint. It must be 8 to 64 characters in length and can contain letters and digits. It must start with a lowercase letter.
   * 
   * > You need only to specify the prefix of the endpoint. The content other than the prefix cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyuntest111
   */
  newConnectionString?: string;
  /**
   * @remarks
   * The new port number of the instance. The port number must be within the range from 1000 to 65535.
   * 
   * >  This parameter is available only when you set the **DBInstanceId** parameter to the ID of an instance that uses cloud disks.
   * 
   * @example
   * 3310
   */
  newPort?: number;
  /**
   * @remarks
   * The ID of the mongos in the specified sharded cluster instance. Only one mongos ID can be specified in each call.
   * 
   * > This parameter is valid only when you specify the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * s-bpxxxxxxxx
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      currentConnectionString: 'CurrentConnectionString',
      DBInstanceId: 'DBInstanceId',
      newConnectionString: 'NewConnectionString',
      newPort: 'NewPort',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentConnectionString: 'string',
      DBInstanceId: 'string',
      newConnectionString: 'string',
      newPort: 'number',
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

