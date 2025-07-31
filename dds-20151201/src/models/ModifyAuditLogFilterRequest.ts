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
   * The type of logs collected by the audit log feature of the instance. Separate multiple types with commas (,). Valid values:
   * 
   * *   **admin**: O\\&M and management operations
   * *   **slow**: slow query logs
   * *   **query**: query operations
   * *   **insert**: insert operations
   * *   **update**: update operations
   * *   **delete**: delete operations
   * *   **command**: protocol commands such as the aggregate method
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
   * 
   * *   **primary**
   * *   **secondary**
   * 
   * @example
   * primary
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

