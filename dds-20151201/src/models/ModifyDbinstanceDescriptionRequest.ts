// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * > 
   * 
   * *   The name cannot start with `http://` or `https://`.
   * 
   * *   It must start with a letter.
   * 
   * *   It must be 2 to 256 characters in length, and can contain letters, underscores (_), hyphens (-), and digits.
   * 
   * This parameter is required.
   * 
   * @example
   * testdata
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  To modify the name of a shard or mongos node in a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2234****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the shard or mongos node in the sharded cluster instance.
   * 
   * >  This parameter is valid only if you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp89067****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
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
      DBInstanceDescription: 'string',
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

