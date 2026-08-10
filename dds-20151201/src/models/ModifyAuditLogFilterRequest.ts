// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAuditLogFilterRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The collection types of audit logs. Separate multiple collection types with commas (,).
   * - **admin**: O&M and management operations.
   * - **slow**: Slow queries.
   * - **query**: Query operations.
   * - **insert**: Insert operations.  
   * - **update**: Update operations.  
   * - **delete**: Delete operations. 
   * - **command**: Protocol commands, such as the aggregate method.
   * 
   * This parameter is required.
   * 
   * @example
   * insert,query,update,delete
   */
  filter?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role of the node in the instance. Valid values:
   * - **db**: shard node
   * - **mongos**: mongos node
   * 
   * 
   * 
   * 
   * 
   * 
   * > Metric description
   * > - This parameter applies only to sharded cluster instances. If this parameter is left empty, the default value db is used. You do not need to specify this parameter for replica set instances.
   * 
   * @example
   * db
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      filter: 'Filter',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      filter: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

