// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * *   db: a shard node.
   * *   cs: a Configserver node.
   * *   mongos: a mongos node.
   * 
   * @example
   * mongos
   */
  characterType?: string;
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
   * The parameter that is available in the future.
   * 
   * @example
   * terrform
   */
  extraParam?: string;
  /**
   * @remarks
   * The ID of the mongos or shard node in the specified sharded cluster instance.
   * 
   * >  This parameter is valid when the **DBInstanceId** parameter is set to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bpxxxxxxxx
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
      extraParam: 'ExtraParam',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterType: 'string',
      DBInstanceId: 'string',
      extraParam: 'string',
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

